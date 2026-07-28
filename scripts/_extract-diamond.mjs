// scripts/_extract-diamond.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rawPath =
  "C:/Users/charl/.cursor/projects/c-Users-charl-Documents-Projects-words-of-sages/agent-tools/418bc76f-f479-4cc1-b3ee-491dba5073bc.txt";
const raw = fs.readFileSync(rawPath, "utf8");

const start = raw.indexOf("#### 法會因由分第一");
const end = raw.indexOf("## 參見");
let t = raw.slice(start, end > 0 ? end : undefined);

const titles = [];
const re = /####\s*([^\n『]+)『([^』]+)』/g;
let m;
while ((m = re.exec(t))) {
  titles.push({ heading: m[1].trim(), gloss: m[2].trim(), index: m.index });
}

const divisions = [];
for (let i = 0; i < titles.length; i++) {
  const from = titles[i].index + t.slice(titles[i].index).indexOf("\n") + 1;
  const to = i + 1 < titles.length ? titles[i + 1].index : t.length;
  let body = t
    .slice(from, to)
    .replace(/\r/g, "")
    .replace(/\n+/g, "")
    .replace(/\s+/g, "")
    .replace(/[A-Za-z0-9.[\](){}<>/=+*#_|\\-]/g, "")
    .trim();
  // normalize punctuation spacing already removed
  const cjk = (body.match(/[\u4e00-\u9fff]/g) || []).length;
  divisions.push({
    id: i + 1,
    title: titles[i].heading,
    gloss: titles[i].gloss,
    textZh: body,
    chars: cjk
  });
}

console.log("divisions", divisions.length);
divisions.forEach((d) => console.log(d.id, d.chars, d.title, d.textZh.slice(0, 24) + "…"));
console.log(
  "total",
  divisions.reduce((s, d) => s + d.chars, 0)
);

fs.writeFileSync(
  path.join(__dirname, "_diamond-units.json"),
  JSON.stringify(divisions, null, 2),
  "utf8"
);
