/** Generate translation overrides for all unique Chunqiu parts. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { splitParts, translatePart } from "./chunqiu-en-lib.mjs";

const cqDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../src/data/springAndAutumn");
const overrides = {};
const bad = [];

for (const n of [1, 2, 3, 4]) {
  const s = fs.readFileSync(path.join(cqDir, `springAndAutumn${n}.js`), "utf8");
  const re = /text: \{\s*zh: `([\s\S]*?)`,\s*en:/g;
  let m;
  while ((m = re.exec(s))) {
    for (const line of m[1].split("\n")) {
      const t = line.trim();
      if (!t || /^(隱|桓|莊|閔|僖|文|宣|成|襄|昭|定|哀)公/.test(t)) continue;
      for (const p of splitParts(t)) {
        if (!overrides[p]) {
          const en = translatePart(p).replace(/\.$/, "");
          overrides[p] = en;
          if (/[àáâãäåèéêëìíîïòóôõöùúûüǎǐǒǔǖǘǚǜ]/i.test(en)) bad.push([p, en]);
        }
      }
    }
  }
}

fs.writeFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "chunqiu-en-overrides.json"),
  JSON.stringify(overrides, null, 2)
);
console.log("overrides", Object.keys(overrides).length, "with tone marks", bad.length);
if (bad.length) console.log("samples:", bad.slice(0, 5));
