// scripts/_split-zhongyong.mjs
// Fixes + splits long Zhu Xi chapters into labeled reading units.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const chapters = JSON.parse(fs.readFileSync(path.join(__dirname, "_zhongyong-raw.json"), "utf8"));

const cjk = (s) => (s.match(/[\u4e00-\u9fff]/g) || []).length;

// Fixes
chapters[9] = "子路問強。" + chapters[9].replace(/^子路問強。/, "");
chapters[29] = chapters[29].replace(/^[。．]+/, "");
chapters[30] = chapters[30].replace(/^[。．]+/, "");

function splitAt(text, markers) {
  const parts = [];
  let rest = text;
  for (const m of markers) {
    const i = rest.indexOf(m);
    if (i <= 0) continue;
    parts.push(rest.slice(0, i));
    rest = rest.slice(i);
  }
  if (rest) parts.push(rest);
  return parts.filter((p) => cjk(p) > 0);
}

const units = [];

function pushChapter(n, text, part) {
  const label = part ? `${n}-${part}` : String(n);
  units.push({ chapter: n, part: part || null, label, textZh: text });
}

for (let i = 0; i < 33; i++) {
  const n = i + 1;
  let text = chapters[i];

  if (n === 20) {
    // Natural breaks in the long 哀公問政 chapter
    const parts = splitAt(text, [
      "天下之達道五",
      "凡為天下國家有九經，曰",
      "凡事豫則立"
    ]);
    // If split failed oddly, fall back to length chunks
    if (parts.length >= 3) {
      parts.forEach((p, idx) => pushChapter(20, p, idx + 1));
    } else {
      pushChapter(20, text, null);
    }
  } else if (n === 26) {
    const parts = splitAt(text, ["天地之道，可一言而盡也"]);
    if (parts.length === 2) {
      pushChapter(26, parts[0], 1);
      pushChapter(26, parts[1], 2);
    } else {
      pushChapter(26, text, null);
    }
  } else if (n === 33) {
    const parts = splitAt(text, ["《詩》云：「潛雖伏矣"]);
    // also try variant without 云
    const parts2 =
      parts.length === 2
        ? parts
        : splitAt(text, ["詩云：「潛雖伏矣", "《詩》云：「潛雖伏矣"]);
    if (parts2.length >= 2) {
      pushChapter(33, parts2[0], 1);
      pushChapter(33, parts2.slice(1).join(""), 2);
    } else {
      pushChapter(33, text, null);
    }
  } else if (cjk(text) > 220) {
    // Generic midpoint split at a sentence boundary near half
    const mid = Math.floor(text.length / 2);
    let cut = text.indexOf("。", mid);
    if (cut < 0) cut = text.indexOf("！", mid);
    if (cut < 0) cut = mid;
    pushChapter(n, text.slice(0, cut + 1), 1);
    pushChapter(n, text.slice(cut + 1), 2);
  } else {
    pushChapter(n, text, null);
  }
}

console.log("units", units.length);
units.forEach((u) => console.log(u.label, cjk(u.textZh), u.textZh.slice(0, 28) + "…"));
console.log("total CJK", units.reduce((s, u) => s + cjk(u.textZh), 0));

fs.writeFileSync(path.join(__dirname, "_zhongyong-units.json"), JSON.stringify(units, null, 2));
