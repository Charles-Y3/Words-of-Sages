/** Extract unique zh lines for manual/exact EN mapping. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

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
      for (const part of splitParts(t)) lines.add(part);
    }
  }
}

function splitParts(line) {
  const out = [];
  let buf = "";
  for (const seg of line.split(/(?=[夏春秋冬]，)/)) {
    const s = (buf + seg).trim().replace(/。$/, "");
    if (!s) continue;
    if (/^[夏春秋冬]，/.test(seg) && buf) {
      out.push(buf.replace(/。$/, ""));
      buf = seg;
    } else {
      buf = s;
    }
  }
  if (buf) out.push(buf.replace(/。$/, ""));
  return out.length ? out : [line.replace(/。$/, "")];
}

const arr = [...lines].sort();
fs.writeFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "tmp/chunqiu-lines.txt"),
  arr.map((l, i) => `${i + 1}\t${l}`).join("\n")
);
console.log("unique parts", arr.length);
