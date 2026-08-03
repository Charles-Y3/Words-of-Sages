/**
 * Build full Analects modules from Wikisource Traditional wikitext dump.
 * Source: scripts/tmp/analects-wikisource.json (論語 二十篇)
 *
 * Prefer received readings over Wikisource critical variants where noted.
 * Writes src/data/analects/analectsNN-*.js + index.js
 *
 * Run: node scripts/build-analects.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcJson = path.join(__dirname, "tmp/analects-wikisource.json");
const outDir = path.join(root, "src/data/analects");

const BOOKS = [
  { zh: "學而", en: "Xue Er", num: 1, file: "analects01-xueEr" },
  { zh: "為政", en: "Wei Zheng", num: 2, file: "analects02-weiZheng" },
  { zh: "八佾", en: "Ba Yi", num: 3, file: "analects03-baYi" },
  { zh: "里仁", en: "Li Ren", num: 4, file: "analects04-liRen" },
  { zh: "公冶長", en: "Gongye Chang", num: 5, file: "analects05-gongyeChang" },
  { zh: "雍也", en: "Yong Ye", num: 6, file: "analects06-yongYe" },
  { zh: "述而", en: "Shu Er", num: 7, file: "analects07-shuEr" },
  { zh: "泰伯", en: "Tai Bo", num: 8, file: "analects08-taiBo" },
  { zh: "子罕", en: "Zi Han", num: 9, file: "analects09-ziHan" },
  { zh: "鄉黨", en: "Xiang Dang", num: 10, file: "analects10-xiangDang" },
  { zh: "先進", en: "Xian Jin", num: 11, file: "analects11-xianJin" },
  { zh: "顏淵", en: "Yan Yuan", num: 12, file: "analects12-yanYuan" },
  { zh: "子路", en: "Zi Lu", num: 13, file: "analects13-ziLu" },
  { zh: "憲問", en: "Xian Wen", num: 14, file: "analects14-xianWen" },
  { zh: "衛靈公", en: "Wei Ling Gong", num: 15, file: "analects15-weiLingGong" },
  { zh: "季氏", en: "Ji Shi", num: 16, file: "analects16-jiShi" },
  { zh: "陽貨", en: "Yang Huo", num: 17, file: "analects17-yangHuo" },
  { zh: "微子", en: "Wei Zi", num: 18, file: "analects18-weiZi" },
  { zh: "子張", en: "Zi Zhang", num: 19, file: "analects19-ziZhang" },
  { zh: "堯曰", en: "Yao Yue", num: 20, file: "analects20-yaoYue" }
];

const CN_NUM = {
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
  三十三: 33,
  三十四: 34,
  三十五: 35,
  三十六: 36,
  三十七: 37,
  三十八: 38,
  三十九: 39,
  四十: 40,
  四十一: 41,
  四十二: 42,
  四十三: 43,
  四十四: 44,
  四十五: 45,
  // Wikisource sometimes uses 二一 for 21
  二一: 21,
  二二: 22,
  二三: 23,
  二四: 24,
  二五: 25,
  二六: 26,
  二七: 27,
  二八: 28,
  二九: 29,
  三一: 31,
  三二: 32,
  三三: 33,
  三四: 34,
  三五: 35,
  三六: 36,
  三七: 37,
  三八: 38,
  三九: 39,
  四一: 41,
  四二: 42,
  四三: 43,
  四四: 44
};

function cnToInt(s) {
  if (CN_NUM[s] != null) return CN_NUM[s];
  const digits = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
  if (s === "十") return 10;
  if (s.startsWith("十")) return 10 + (digits[s.slice(1)] || 0);
  if (s.endsWith("十") && s.length === 2) return (digits[s[0]] || 0) * 10;
  const withTen = s.match(/^([一二三四五六七八九])十([一二三四五六七八九])?$/);
  if (withTen) return (digits[withTen[1]] || 0) * 10 + (withTen[2] ? digits[withTen[2]] : 0);
  // Wikisource abbreviated teens/decades: 二一=21, 四五=45
  const abbr = s.match(/^([一二三四五六七八九])([一二三四五六七八九])$/);
  if (abbr) return (digits[abbr[1]] || 0) * 10 + (digits[abbr[2]] || 0);
  throw new Error(`Unknown Chinese numeral: ${s}`);
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function cleanWiki(raw) {
  let s = raw;
  // Prefer first (main) reading in {{另|a|b}} / {{另2|a|b}}
  s = s.replace(/\{\{另2?\|([^|{}]+)\|[^}]*\}\}/g, "$1");
  // Language switches: -{zh-hant:X; zh-hans:Y}- or -{zh:X;zh-hant:Y;zh-hans:Z}-
  s = s.replace(/-\{[^{}]*zh-hant:([^;{}]+)[^{}]*\}-/g, "$1");
  s = s.replace(/-\{([^;{}]+)\}-/g, "$1");
  // Refs and small notes
  s = s.replace(/<ref[^>]*>[\s\S]*?<\/ref>/gi, "");
  s = s.replace(/<ref[^>]*\/>/gi, "");
  s = s.replace(/<small>[\s\S]*?<\/small>/gi, "");
  // Wiki links [[a|b]] → b, [[a]] → a
  s = s.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2");
  s = s.replace(/\[\[([^\]]+)\]\]/g, "$1");
  // Bold/italic
  s = s.replace(/'{2,}/g, "");
  // HTML tags
  s = s.replace(/<[^>]+>/g, "");
  // Category / leftover templates
  s = s.replace(/\{\{[^}]*\}\}/g, "");
  // Normalize variants toward app TW received forms
  s = s
    .replace(/爲/g, "為")
    .replace(/衞/g, "衛")
    .replace(/眞/g, "真")
    .replace(/飮/g, "飲")
    .replace(/擧/g, "舉")
    .replace(/敎/g, "教")
    .replace(/淸/g, "清")
    .replace(/麪/g, "麵")
    .replace(/吿/g, "告")
    .replace(/羣/g, "群")
    .replace(/衆/g, "眾")
    .replace(/敺/g, "驅")
    .replace(/鬪/g, "鬥")
    .replace(/屛/g, "屏")
    .replace(/厤/g, "曆")
    .replace(/于/g, "於")
    .replace(/ /g, "")
    .replace(/\u00a0/g, "")
    .replace(/[ \t]+/g, "")
    .replace(/\n+/g, "");
  // Strip trailing editorial notes that leaked
  s = s.replace(/一說該章[\s\S]*$/, "");
  s = s.replace(/部分版本[\s\S]*$/, "");
  return s.trim();
}

/** Prefer common received (朱熹集注 / 何晏集解) wording over Wikisource critical text. */
function preferReceived(bookNum, zhangNum, text) {
  let t = text;
  // 里仁 14: 傳世本作「求為可知也」
  if (bookNum === 4 && zhangNum === 14) {
    t = t.replace("未為可知也", "求為可知也");
  }
  // 述而 6: 傳世本作「據於德」
  if (bookNum === 7 && zhangNum === 6) {
    t = t.replace("狎於德", "據於德");
  }
  return t;
}

function extractChapters(wikitext, bookNum) {
  const marker =
    /<div id="[一二三四五六七八九十]+之[一二三四五六七八九十百]+"[^>]*>'''([一二三四五六七八九十]+)之([一二三四五六七八九十百]+)'''<\/div>/g;
  const hits = [...wikitext.matchAll(marker)];
  if (!hits.length) {
    // fallback: bold-only markers
    const alt = [...wikitext.matchAll(/'''([一二三四五六七八九十]+)之([一二三四五六七八九十百]+)'''/g)];
    if (!alt.length) throw new Error(`No chapter markers in book ${bookNum}`);
    return splitByMatches(wikitext, alt, bookNum);
  }
  return splitByMatches(wikitext, hits, bookNum);
}

function splitByMatches(wikitext, hits, bookNum) {
  const chapters = [];
  for (let i = 0; i < hits.length; i++) {
    const bookCn = hits[i][1];
    const zhangCn = hits[i][2];
    const zhangNum = cnToInt(zhangCn);
    const start = hits[i].index + hits[i][0].length;
    const end = i + 1 < hits.length ? hits[i + 1].index : wikitext.length;
    let chunk = wikitext.slice(start, end);
    // Cut off onlyinclude close / spoken / 校勘記
    chunk = chunk.split("</onlyinclude>")[0];
    chunk = chunk.split("===校勘記===")[0];
    chunk = chunk.split("===注疏本===")[0];
    chunk = chunk.split('<div id="section_Spoken')[0];
    chunk = chunk.split("{{先秦作品}}")[0];
    chunk = chunk.split("{{PD-old}}")[0];
    chunk = chunk.split("----")[0];
    let text = cleanWiki(chunk);
    text = preferReceived(bookNum, zhangNum, text);
    if (!text) throw new Error(`Empty chapter ${bookNum}.${zhangNum}`);
    chapters.push({ zhangNum, bookCn, zhangCn, text });
  }
  // Sanity: sequential zhang numbers
  chapters.forEach((ch, i) => {
    if (ch.zhangNum !== i + 1) {
      console.warn(`  warn book ${bookNum}: expected zhang ${i + 1}, got ${ch.zhangNum}`);
    }
  });
  return chapters;
}

function pendingPlain(bookZh, label) {
  return {
    zh: `〈${bookZh}〉${label}。本節原文見上；白話解釋待補。`,
    en: `${label}. Plain explanation pending for this section.`
  };
}

function pendingApplication(label) {
  return {
    zh: `本節應用說明待補。\n<br /><b>建議：先熟讀本節原文，把握其關鍵語句後再實踐。</b>`,
    en: `Application for this section is pending.\n<br /><b>Suggestion: First read this section carefully and note its key line before practicing.</b>`
  };
}

function writeModule(fileBase, varName, units) {
  const body = units
    .map((u) => {
      return `  {
    id: ${u.id},
    label: ${JSON.stringify(u.label)},
    title: { zh: ${JSON.stringify(u.title.zh)}, en: ${JSON.stringify(u.title.en)} },
    text: {
      zh: \`${esc(u.text.zh)}\`,
      en: \`${esc(u.text.en)}\`
    },
    plain: {
      zh: \`${esc(u.plain.zh)}\`,
      en: \`${esc(u.plain.en)}\`
    },
    application: {
      zh: \`${esc(u.application.zh)}\`,
      en: \`${esc(u.application.en)}\`
    }
  }`;
    })
    .join(",\n");
  const content = `// ${fileBase}.js — auto-built from Wikisource 論語; fill EN/plain/application per unit\nconst ${varName} = [\n${body}\n];\n\nexport default ${varName};\n`;
  fs.writeFileSync(path.join(outDir, `${fileBase}.js`), content, "utf8");
}

const raw = JSON.parse(fs.readFileSync(srcJson, "utf8"));
fs.mkdirSync(outDir, { recursive: true });

// Remove old preview files
for (const name of ["analects1.js", "analects2.js"]) {
  const p = path.join(outDir, name);
  if (fs.existsSync(p)) fs.unlinkSync(p);
}

let globalId = 1;
const allUnits = [];
const indexImports = [];

for (const book of BOOKS) {
  const entry = raw[book.zh];
  if (!entry?.wikitext) throw new Error(`Missing wikitext for ${book.zh}`);
  const chapters = extractChapters(entry.wikitext, book.num);
  console.log(`${book.num}. ${book.zh}: ${chapters.length} 章`);
  const units = chapters.map((ch) => {
    const label = `${book.zh} ${book.num}.${ch.zhangNum}`;
    const title = { zh: label, en: `${book.en} ${book.num}.${ch.zhangNum}` };
    const unit = {
      id: globalId++,
      label,
      title,
      text: {
        zh: ch.text,
        en: `[Translation pending for ${label}]`
      },
      plain: pendingPlain(book.zh, label),
      application: pendingApplication(label)
    };
    allUnits.push(unit);
    return unit;
  });
  const varName = book.file.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^analects/, "analects");
  // simpler var: analects01XueEr style
  const safeVar = book.file.replace(/-/g, "_");
  writeModule(book.file, safeVar, units);
  indexImports.push({ file: book.file, varName: safeVar });
}

const indexSrc = `// src/data/analects/index.js
${indexImports.map((i) => `import ${i.varName} from "./${i.file}.js";`).join("\n")}

const analects = [
${indexImports.map((i) => `  ...${i.varName}`).join(",\n")}
];

export default analects;
`;
fs.writeFileSync(path.join(outDir, "index.js"), indexSrc, "utf8");

// Persist clean chapter map for EN/plain pipelines
fs.writeFileSync(
  path.join(__dirname, "tmp/analects-units.json"),
  JSON.stringify(
    allUnits.map((u) => ({ id: u.id, label: u.label, textZh: u.text.zh })),
    null,
    2
  ),
  "utf8"
);

console.log(`\nWritten ${allUnits.length} units across ${BOOKS.length} books.`);
console.log(`Pending EN/plain/application markers remain — fill before promoting to available.`);
