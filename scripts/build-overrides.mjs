/** Build chunqiu-en-overrides.json from improved translator for all unique line parts. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { translatePart, splitParts } from "./chunqiu-en-lib.mjs";

const cqDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../src/data/springAndAutumn");
const lines = new Set();

for (const n of [1, 2, 3, 4]) {
  const src = fs.readFileSync(path.join(cqDir, `springAndAutumn${n}.js`), "utf8");
  const re = /text: \{\s*zh: `([\s\S]*?)`,\s*en:/g;
  let m;
  while ((m = re.exec(src))) {
    for (const line of m[1].split("\n")) {
      const t = line.trim();
      if (!t || /^(隱|桓|莊|閔|僖|文|宣|成|襄|昭|定|哀)公/.test(t)) continue;
      for (const p of splitParts(t)) lines.add(p);
    }
  }
}

const out = {};
for (const l of lines) out[l] = translatePart(l);
fs.writeFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "chunqiu-en-overrides.json"),
  JSON.stringify(out, null, 2)
);
console.log("wrote", Object.keys(out).length, "overrides");
