// scripts/audit-explanation-depth.mjs
// Reports plain.zh length vs text.zh length per unit and per work, to catch
// explanations that are too thin (compressed) relative to the source passage.
// See docs/CONTENT_QA.md check C6.
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const worksPath = path.join(__dirname, "../src/data/works.js");
const { default: works } = await import("file://" + worksPath.replace(/\\/g, "/"));

const AVG_RATIO_MIN = 1.5;
const THIN_UNIT_RATIO = 0.5;
const THIN_UNIT_PCT_MAX = 0.05;

const fail = process.argv.includes("--fail");

function cjkCount(s) {
  return (String(s || "").replace(/<[^>]+>/g, "").match(/[一-鿿]/g) || []).length;
}

let warnings = 0;
console.log(
  "Work".padEnd(24),
  "Units",
  "AvgRatio".padStart(9),
  "ThinUnits".padStart(10),
  "Flag"
);
console.log("-".repeat(70));

for (const w of works) {
  if (w.status !== "available") continue;
  const units = w.chapters;
  const ratios = units.map((u) => {
    const textLen = cjkCount(u.text?.zh);
    const plainLen = cjkCount(u.plain?.zh);
    return { id: u.id, ratio: textLen > 0 ? plainLen / textLen : 1 };
  });
  const avgRatio = ratios.reduce((s, r) => s + r.ratio, 0) / ratios.length;
  const thin = ratios.filter((r) => r.ratio < THIN_UNIT_RATIO);
  const thinPct = thin.length / ratios.length;

  const low = avgRatio < AVG_RATIO_MIN || thinPct > THIN_UNIT_PCT_MAX;
  if (low) warnings++;
  const flag = low ? " ⚠ THIN" : " OK";

  console.log(
    w.id.padEnd(24),
    String(units.length).padStart(5),
    `${avgRatio.toFixed(2)}x`.padStart(9),
    `${thin.length}/${units.length}`.padStart(10),
    flag
  );
  if (low && thin.length) {
    const worst = thin.sort((a, b) => a.ratio - b.ratio).slice(0, 5);
    for (const u of worst) {
      console.log(`    unit ${u.id}: ratio ${u.ratio.toFixed(2)}x`);
    }
  }
}

if (warnings) {
  console.error(`\naudit-explanation-depth: ${warnings} work(s) with thin explanations.`);
  if (fail) process.exit(1);
} else {
  console.log("\naudit-explanation-depth: all works within proportional-depth tolerance.");
}
