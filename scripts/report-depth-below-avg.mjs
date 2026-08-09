/**
 * One-pass report: units whose plain.zh/text.zh CJK ratio is ≤ 80% of
 * that work's average (20% below avg). See docs/CONTENT_QA_DEPTH_BELOW_AVG.md.
 *
 * Usage: node scripts/report-depth-below-avg.mjs
 *        npm run report-depth-below-avg
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const worksPath = path.join(root, "src/data/works.js");
const outPath = path.join(root, "docs/CONTENT_QA_DEPTH_BELOW_AVG.md");
const { default: works } = await import("file://" + worksPath.replace(/\\/g, "/"));

/** Same sweep order as docs/CONTENT_QA.md */
const SWEEP_ORDER = [
  "liyun-datong",
  "filial-piety",
  "great-learning",
  "doctrine-of-mean",
  "analects",
  "mencius",
  "kongzi-jiayu",
  "spring-and-autumn",
  "qingjing-jing",
  "neiguan-jing",
  "yinfu-jing",
  "taishang-ganying",
  "tao-te-ching",
  "zuowang-lun",
  "taiyi-jinhua",
  "zhuangzi-neipian",
  "heart-sutra",
  "amitabha-sutra",
  "medicine-buddha",
  "contemplation-sutra",
  "bequeathed-teachings",
  "forty-two-chapters",
  "diamond-sutra",
  "platform-sutra"
];

const BELOW_AVG_FACTOR = 0.8;

/** Same CJK range as scripts/audit-explanation-depth.mjs */
function cjkCount(s) {
  return (String(s || "").replace(/<[^>]+>/g, "").match(/[\u4e00-\u9fff]/g) || []).length;
}

const byId = new Map(works.filter((w) => w.status === "available").map((w) => [w.id, w]));
const ordered = SWEEP_ORDER.map((id) => byId.get(id)).filter(Boolean);
for (const w of byId.values()) {
  if (!SWEEP_ORDER.includes(w.id)) ordered.push(w);
}

const rows = [];

for (const w of ordered) {
  const units = w.chapters.map((u) => {
    const textLen = cjkCount(u.text?.zh);
    const plainLen = cjkCount(u.plain?.zh);
    const ratio = textLen > 0 ? plainLen / textLen : 1;
    return {
      id: u.id,
      label: u.label || "",
      textLen,
      plainLen,
      ratio
    };
  });
  const avg = units.reduce((s, u) => s + u.ratio, 0) / units.length;
  const cutoff = avg * BELOW_AVG_FACTOR;
  const flagged = units
    .filter((u) => u.ratio <= cutoff)
    .sort((a, b) => a.ratio - b.ratio)
    .map((u) => ({
      ...u,
      pctOfAvg: avg > 0 ? (u.ratio / avg) * 100 : 0
    }));

  rows.push({
    workId: w.id,
    tradition: w.tradition,
    unitCount: units.length,
    avg,
    cutoff,
    flagged
  });
}

const lines = [];
lines.push("# Explanation depth: units ≤ 20% below work average");
lines.push("");
lines.push(
  "One-pass report (not a permanent C6 gate). Metric matches `npm run audit-depth`: CJK length of `plain.zh` ÷ CJK length of `text.zh` (HTML stripped)."
);
lines.push("");
lines.push(
  "**Rule:** for each available work, compute the mean ratio; flag any unit with `ratio ≤ 0.8 × workAvg` (example: avg 1.5x → flag ≤ 1.2x)."
);
lines.push("");
lines.push("Generated from available works in `src/data/works.js`.");
lines.push("");
lines.push("## Summary");
lines.push("");
lines.push("| workId | units | avg | cutoff (80%) | flagged |");
lines.push("|--------|------:|----:|-------------:|--------:|");

let totalFlagged = 0;
for (const r of rows) {
  totalFlagged += r.flagged.length;
  lines.push(
    `| ${r.workId} | ${r.unitCount} | ${r.avg.toFixed(2)}x | ${r.cutoff.toFixed(2)}x | ${r.flagged.length} |`
  );
}
lines.push("");
lines.push(`**Total flagged units:** ${totalFlagged}`);
lines.push("");

const clean = rows.filter((r) => r.flagged.length === 0);
const dirty = rows.filter((r) => r.flagged.length > 0);

if (clean.length) {
  lines.push("## Works with no units below cutoff");
  lines.push("");
  lines.push(clean.map((r) => `\`${r.workId}\``).join(", "));
  lines.push("");
}

lines.push("## Flagged units by work");
lines.push("");

if (!dirty.length) {
  lines.push("_No units fall ≤ 20% below their work average._");
  lines.push("");
} else {
  for (const r of dirty) {
    lines.push(
      `### ${r.workId} — avg ${r.avg.toFixed(2)}x, cutoff ${r.cutoff.toFixed(2)}x (20% below avg), ${r.flagged.length} flagged`
    );
    lines.push("");
    lines.push("| unit | label | text CJK | plain CJK | ratio | % of avg |");
    lines.push("|-----:|-------|---------:|----------:|------:|---------:|");
    for (const u of r.flagged) {
      const label = u.label.replace(/\|/g, "\\|");
      lines.push(
        `| ${u.id} | ${label} | ${u.textLen} | ${u.plainLen} | ${u.ratio.toFixed(2)}x | ${u.pctOfAvg.toFixed(0)}% |`
      );
    }
    lines.push("");
  }
}

const md = lines.join("\n");
fs.writeFileSync(outPath, md, "utf8");

console.log(`Wrote ${path.relative(root, outPath)}`);
console.log(`Works: ${rows.length}; flagged units: ${totalFlagged}`);
for (const r of dirty) {
  console.log(
    `  ${r.workId}: avg ${r.avg.toFixed(2)}x cutoff ${r.cutoff.toFixed(2)}x → ${r.flagged.length} units`
  );
}
