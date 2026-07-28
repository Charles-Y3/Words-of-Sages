// scripts/_split-diamond.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const divisions = JSON.parse(
  fs.readFileSync(path.join(__dirname, "_diamond-units.json"), "utf8")
);

const cjk = (s) => (s.match(/[\u4e00-\u9fff]/g) || []).length;
const LIMIT = 250;

function splitLong(text) {
  if (cjk(text) <= LIMIT) return [text];
  const mid = Math.floor(text.length / 2);
  const window = text.slice(Math.max(0, mid - 80), mid + 80);
  let rel = window.lastIndexOf("。」");
  if (rel < 0) rel = window.lastIndexOf("。");
  if (rel < 0) rel = 80;
  const cut = Math.max(0, mid - 80) + rel + (window.slice(rel).startsWith("。」") ? 2 : 1);
  const left = text.slice(0, cut);
  const right = text.slice(cut);
  return [...splitLong(left), ...splitLong(right)].filter((p) => cjk(p) > 0);
}

const units = [];
for (const d of divisions) {
  const parts = splitLong(d.textZh);
  parts.forEach((textZh, i) => {
    const part = parts.length > 1 ? i + 1 : null;
    units.push({
      division: d.id,
      part,
      label: part ? `${d.id}-${part}` : String(d.id),
      title: d.title,
      gloss: d.gloss,
      textZh
    });
  });
}

console.log("units", units.length);
units.forEach((u) => console.log(u.label, cjk(u.textZh), u.title));
console.log("total", units.reduce((s, u) => s + cjk(u.textZh), 0));

fs.writeFileSync(path.join(__dirname, "_diamond-split.json"), JSON.stringify(units, null, 2));
