// scripts/_extract-zhongyong.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rawPath =
  "C:/Users/charl/.cursor/projects/c-Users-charl-Documents-Projects-words-of-sages/agent-tools/44fff545-223e-4203-b916-2f5daf57732f.txt";
const raw = fs.readFileSync(rawPath, "utf8");

let t = raw.replace(/〈[^〉]*〉/g, "");
const start = t.indexOf("天命之謂性");
t = t.slice(start);

const delimiters = [...t.matchAll(/右第([一二三四五六七八九十百]+)章/g)];
const numMap = {
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9,
  十: 10,
  十一: 11,
  十二: 12,
  十三: 13,
  十四: 14,
  十五: 15,
  十六: 16,
  十七: 17,
  十八: 18,
  十九: 19,
  二十: 20,
  二十一: 21,
  二十二: 22,
  二十三: 23,
  二十四: 24,
  二十五: 25,
  二十六: 26,
  二十七: 27,
  二十八: 28,
  二十九: 29,
  三十: 30,
  三十一: 31,
  三十二: 32,
  三十三: 33
};

function clean(s) {
  return s
    .replace(/\r/g, "")
    .replace(/\n+/g, "")
    .replace(/\|[^\n]*/g, "")
    .replace(/\s+/g, "")
    .replace(/[A-Za-z0-9.[\](){}<>/=+*#_|\\-]/g, "")
    .replace(/○/g, "")
    .trim();
}

/** Drop Zhu Xi prose that sits between chapter marker and next classical line. */
function stripLeadingNotes(s) {
  const markers =
    /(?:天命之謂性|仲尼曰|子曰|君子之道|君子素其位|哀公問政|自誠明|唯天下至誠|其次致曲|至誠之道|誠者自成|故至誠無息|大哉聖人之道|王天下有三重|《詩》曰「衣錦)/;
  const m = s.match(markers);
  if (!m) return s;
  return s.slice(m.index);
}

/** Drop trailing Zhu Xi note after classical text ends. */
function stripTrailingNotes(s) {
  return s
    .replace(/子思述所傳[\s\S]*$/, "")
    .replace(/子思之言[\s\S]*$/, "")
    .replace(/子思承上章[\s\S]*$/, "")
    .replace(/子思所引[\s\S]*$/, "")
    .replace(/子思因前章[\s\S]*$/, "")
    .replace(/此下十章[\s\S]*$/, "")
    .replace(/其下八章[\s\S]*$/, "")
    .replace(/其下十章[\s\S]*$/, "")
    .replace(/蓋此篇大旨[\s\S]*$/, "")
    .replace(/此引孔子[\s\S]*$/, "")
    .replace(/此前三章[\s\S]*$/, "")
    .replace(/此由庸行[\s\S]*$/, "")
    .replace(/自此以下[\s\S]*$/, "")
    .replace(/此章承上章[\s\S]*$/, "")
    .replace(/亦承上章[\s\S]*$/, "")
    .replace(/承上章大知[\s\S]*$/, "")
    .replace(/變和言庸者[\s\S]*$/, "");
}

const chapters = new Array(33).fill("");

// Text before first 右第一章 is chapter 1
if (delimiters.length) {
  const firstEnd = delimiters[0].index;
  chapters[0] = stripTrailingNotes(clean(t.slice(0, firstEnd)));
}

for (let i = 0; i < delimiters.length; i++) {
  const n = numMap[delimiters[i][1]];
  if (!n || n > 33) continue;
  const contentStart = delimiters[i].index + delimiters[i][0].length;
  const contentEnd = i + 1 < delimiters.length ? delimiters[i + 1].index : t.length;
  // Content AFTER "右第N章" is Zhu Xi's note for chapter N, then chapter N+1 text
  // So classical chapter N is BEFORE the marker "右第N章"
  // We already handled ch1; for marker 右第N章, the text before it ending this segment
  // was already assigned when we processed previous...

  // Actually: classical chapter k sits between 右第(k-1)章 and 右第k章
  // After 右第(k-1)章 comes note for k-1, then classical k, then 右第k章
  if (n < 33) {
    const block = clean(t.slice(contentStart, contentEnd));
    const classical = stripTrailingNotes(stripLeadingNotes(block));
    chapters[n] = classical; // next chapter index n (0-based: chapter n+1)
  }
}

const cjk = (s) => (s.match(/[\u4e00-\u9fff]/g) || []).length;
console.log("filled", chapters.filter(Boolean).length);
chapters.forEach((c, i) => {
  console.log(`${i + 1}: ${cjk(c)} — ${(c || "(empty)").slice(0, 40)}…`);
});
console.log(
  "total CJK",
  chapters.reduce((s, c) => s + cjk(c), 0)
);

fs.writeFileSync(
  path.join(__dirname, "_zhongyong-raw.json"),
  JSON.stringify(chapters, null, 2),
  "utf8"
);
