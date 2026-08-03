import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  esc,
  translateTitle,
  translatePlain,
  translateYearHeader,
  translatePart,
  splitParts,
} from "./chunqiu-en-lib.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const cqDir = path.join(root, "src/data/springAndAutumn");
const overridePath = path.join(path.dirname(fileURLToPath(import.meta.url)), "chunqiu-en-overrides.json");

let OVERRIDES = {};
if (fs.existsSync(overridePath)) {
  OVERRIDES = JSON.parse(fs.readFileSync(overridePath, "utf8"));
}

function translateLineWithOverrides(line) {
  return splitParts(line)
    .map((p) => OVERRIDES[p] || translatePart(p))
    .join(" ");
}

function translateZh(zh) {
  return zh
    .trim()
    .split(/\n\n+/)
    .map((block) =>
      block
        .split("\n")
        .filter((l) => l.trim())
        .map((l) => {
          const t = l.trim();
          return /^(隱|桓|莊|閔|僖|文|宣|成|襄|昭|定|哀)公/.test(t)
            ? translateYearHeader(t)
            : translateLineWithOverrides(t);
        })
        .join("\n")
    )
    .join("\n\n");
}

function patchFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");

  src = src.replace(
    /(\{\s*id: (\d+),\s*label: "([^"]+)"[\s\S]*?title: \{ zh: "([^"]+)", en: )"[^"]*"( \})/g,
    (_, pre, id, label, zhTitle, post) => `${pre}"${translateTitle(label)}"${post}`
  );

  src = src.replace(
    /(\{\s*id: \d+,\s*label: "([^"]+)"[\s\S]*?plain: \{\s*zh: `)([\s\S]*?)(`,\s*en: `)([\s\S]*?)(`\s*\})/g,
    (_, a, label, zhPlain, mid, _old, end) =>
      `${a}${esc(zhPlain)}${mid}${esc(translatePlain(label))}${end}`
  );

  src = src.replace(
    /(\{\s*id: \d+,\s*label: "[^"]+"[\s\S]*?text: \{\s*zh: `)([\s\S]*?)(`,\s*en: `)([\s\S]*?)(`\s*\},)/g,
    (_, a, zhText, mid, _old, end) => `${a}${esc(zhText)}${mid}${esc(translateZh(zhText))}${end}`
  );

  fs.writeFileSync(filePath, src, "utf8");
}

for (const n of [1, 2, 3, 4]) {
  patchFile(path.join(cqDir, `springAndAutumn${n}.js`));
  console.log("patched springAndAutumn" + n + ".js");
}

let bad = 0;
for (const n of [1, 2, 3, 4]) {
  const src = fs.readFileSync(path.join(cqDir, `springAndAutumn${n}.js`), "utf8");
  for (const m of src.matchAll(/text: \{[\s\S]*?en: `([\s\S]*?)`/g)) {
    if (/[\u4e00-\u9fff]/.test(m[1])) bad++;
  }
}
console.log("text.en blocks with remaining CJK:", bad);
