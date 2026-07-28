// scripts/audit-length.mjs
// Reports CJK character counts in text.zh vs reference targets.
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const worksPath = path.join(__dirname, "../src/data/works.js");
const { default: works } = await import("file://" + worksPath.replace(/\\/g, "/"));

const TARGETS = {
  "diamond-sutra": { name: "Diamond Sutra", chars: 5200, tolerance: 0.08 },
  "great-learning": { name: "Great Learning", chars: 1750, tolerance: 0.12 },
  "doctrine-of-mean": { name: "Doctrine of the Mean", chars: 3560, tolerance: 0.08 },
  "taishang-ganying": { name: "Treatise on Response and Retribution", chars: 1270, tolerance: 0.08 },
  "yinfu-jing": { name: "Yinfu Jing", chars: 440, tolerance: 0.1 },
  "qingjing-jing": { name: "Qingjing Jing", chars: 390, tolerance: 0.1 }
};

function cjkCount(s) {
  return (String(s).replace(/<[^>]+>/g, "").match(/[\u4e00-\u9fff]/g) || []).length;
}

let warnings = 0;
console.log("Work".padEnd(28), "Units", "CJK".padStart(7), "Target".padStart(7), "Coverage");
console.log("-".repeat(70));

for (const w of works) {
  const t = TARGETS[w.id];
  if (!t || w.status !== "available") continue;
  const total = w.chapters.reduce((s, ch) => s + cjkCount(ch.text?.zh), 0);
  const pct = (total / t.chars) * 100;
  const low = pct < (1 - t.tolerance) * 100;
  if (low) warnings++;
  const flag = low ? " ⚠ LOW" : " OK";
  console.log(
    w.id.padEnd(28),
    String(w.chapters.length).padStart(5),
    String(total).padStart(7),
    String(t.chars).padStart(7),
    `${pct.toFixed(1)}%${flag}`
  );
}

if (warnings) {
  console.error(`\naudit-length: ${warnings} work(s) under target.`);
  process.exit(1);
}
console.log("\naudit-length: all targeted works within tolerance.");
