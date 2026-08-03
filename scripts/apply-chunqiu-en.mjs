/**
 * Generate Legge-style English for every unique Chunqiu jing line, then patch data files.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const cqDir = path.join(root, "src/data/springAndAutumn");

const DUKE_EN = {
  隱公: "Duke Yin", 桓公: "Duke Huan", 莊公: "Duke Zhuang", 閔公: "Duke Min",
  僖公: "Duke Xi", 文公: "Duke Wen", 宣公: "Duke Xuan", 成公: "Duke Cheng",
  襄公: "Duke Xiang", 昭公: "Duke Zhao", 定公: "Duke Ding", 哀公: "Duke Ai",
};

const DIGIT = { 元: 1, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 };

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function parseYearLabel(label) {
  if (label === "元年") return 1;
  const s = label.replace(/年$/, "");
  if (s === "元") return 1;
  if (s.includes("二十有")) return 20 + (DIGIT[s.replace("二十有", "")] || 0);
  if (s.includes("十有")) return 10 + (DIGIT[s.replace("十有", "")] || 0);
  if (s.startsWith("二十")) return 20 + (DIGIT[s.slice(2)] || 0);
  if (s.startsWith("十") && s.length === 2) return 10 + (DIGIT[s[1]] || 0);
  return DIGIT[s] || parseInt(s, 10) || s;
}

function yearRangeFromLabel(label) {
  const m = label.match(/^(.+?)(元|一|二|三|四|五|六|七|八|九|十[^至]*?)年至(.+)$/);
  if (!m) return null;
  return {
    duke: m[1],
    start: parseYearLabel(`${m[2]}年`),
    end: parseYearLabel(`${m[3]}年`),
  };
}

function translateTitle(label) {
  const range = yearRangeFromLabel(label);
  if (range) {
    const d = DUKE_EN[range.duke] || range.duke;
    return range.start === range.end
      ? `${d}, Year ${range.start}`
      : `${d}, Years ${range.start}–${range.end}`;
  }
  const single = label.match(/^(.+?)(元|一|二|三|四|五|六|七|八|九|十[^年]*?)年$/);
  if (single) return `${DUKE_EN[single[1]] || single[1]}, Year ${parseYearLabel(`${single[2]}年`)}`;
  return label;
}

function translatePlain(label) {
  const title = translateTitle(label);
  return `This section is the Spring and Autumn classic (jing) for Lu under ${title}. Entries follow Lu’s calendar while noting the Zhou court and interstate diplomacy, war, omens, and mourning. The wording is extremely spare — often a few characters per event — with judgment encoded in how facts are written. Read first for sequence and titles, then for moral implication.`;
}

function translateYearHeader(line) {
  const m = line.match(/^(隱|桓|莊|閔|僖|文|宣|成|襄|昭|定|哀)公(.+)$/);
  if (!m) return line;
  return `${DUKE_EN[`${m[1]}公`]}, Year ${parseYearLabel(`${m[2]}年`)}`;
}

// --- Chronicle line translator ---

const PEOPLE = {
  邾婁儀父: "Yifu of Zhu Lou", 儀父: "Yifu", 鄭伯: "the earl of Zheng", 宋公: "the duke of Song",
  齊侯: "the marquis of Qi", 衛侯: "the marquis of Wei", 晉侯: "the marquis of Jin", 秦伯: "the earl of Qin",
  楚子: "the viscount of Chu", 陳侯: "the marquis of Chen", 蔡侯: "the marquis of Cai", 曹伯: "the earl of Cao",
  許男: "the baron of Xu", 邾婁子: "the viscount of Zhu Lou", 莒子: "the viscount of Ju", 滕子: "the viscount of Teng",
  薛伯: "the earl of Xue", 杞伯: "the earl of Qi", 天王: "the king", 王: "the king", 公: "the duke",
  夫人: "the lady", 公子: "Gongsun ", 世子: "the heir-son ", 鄭人: "the people of Zheng", 宋人: "the people of Song",
  齊人: "the people of Qi", 衛人: "the people of Wei", 晉人: "the people of Jin", 秦人: "the people of Qin",
  楚人: "the people of Chu", 陳人: "the people of Chen", 蔡人: "the people of Cai", 曹人: "the people of Cao",
  戎: "the Rong", 狄: "the Di", 吳: "Wu", 越: "Yue", 于越: "Yu Yue", 荆: "Jing",
  邾婁人: "the people of Zhu Lou", 小邾婁人: "the people of Lesser Zhu Lou", 邾婁: "Zhu Lou",
  諸侯: "the princes", 師: "the army", 我: "our", 我君: "our ruler", 我小君: "our late lady",
  大閱: "there was a great review", 郊: "there was the border sacrifice", 螽: "Locusts appeared",
  螟: "Caterpillars appeared", 無冰: "There was no ice", 无冰: "There was no ice",
  大雨: "There was great rain", 大雩: "There was a great rain sacrifice", 大旱: "There was great drought",
  大水: "There was a great flood", 飢: "There was famine", 饥: "There was famine", 有年: "There was a good harvest",
  不雨: "There was no rain", 春王: "Spring of the king", 地震: "There was an earthquake",
  "隕霜不殺草，李、梅實": "Frost fell but did not kill the grass; plums and apricots bore fruit",
  西狩獲麟: "On a hunt in the west, a lin was captured",
};

const MONTHS = [
  ["十有二", "twelfth"], ["十一", "eleventh"], ["十有一", "eleventh"], ["十有", "ten"],
  ["十二", "twelfth"], ["十一", "eleventh"], ["十", "tenth"], ["正", "first"],
  ["二", "second"], ["三", "third"], ["四", "fourth"], ["五", "fifth"],
  ["六", "sixth"], ["七", "seventh"], ["八", "eighth"], ["九", "ninth"],
];

function monthPhrase(token) {
  for (const [zh, en] of MONTHS) {
    if (token === zh || token.startsWith(zh)) return en;
  }
  return token;
}

function capitalize(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function translateLine(raw) {
  let line = raw.replace(/。$/, "").trim();
  if (!line) return "";

  // Single-token omens / notes
  if (PEOPLE[line]) return PEOPLE[line] + (PEOPLE[line].endsWith(".") ? "" : ".");

  let prefix = "";
  const seasonM = line.match(/^(春|夏|秋|冬)(?:，|$)/);
  if (seasonM) {
    prefix = { 春: "In spring", 夏: "In summer", 秋: "In autumn", 冬: "In winter" }[seasonM[1]];
    line = line.slice(seasonM[0].length).replace(/^，/, "");
  }

  // 元年春，王正月 style embedded year
  const yearInLine = line.match(/^(元|二|三|四|五|六|七|八|九|十[^，]*?)年(春|夏|秋|冬)?[,，]?/);
  if (yearInLine) {
    const yr = parseYearLabel(`${yearInLine[1]}年`);
    const ord = yr === 1 ? "first" : yr === 2 ? "second" : yr === 3 ? "third" : `the ${yr}th`;
    if (yearInLine[2]) {
      const sn = { 春: "spring", 夏: "summer", 秋: "autumn", 冬: "winter" }[yearInLine[2]];
      prefix = `In the ${ord} year, in ${sn}`;
    } else {
      prefix = prefix || `In the ${ord} year`;
    }
    line = line.slice(yearInLine[0].length).replace(/^，/, "");
  }

  if (line.startsWith("王正月")) {
    prefix = prefix ? `${prefix}, in the king's first month` : "In the king's first month";
    line = line.slice(3).replace(/^[,，]/, "");
  } else {
    const wm = line.match(/^王(.+?)月/);
    if (wm) {
      prefix = prefix
        ? `${prefix}, in the king's ${monthPhrase(wm[1])} month`
        : `In the king's ${monthPhrase(wm[1])} month`;
      line = line.slice(wm[0].length).replace(/^[,，]/, "");
    }
  }

  const mm = line.match(/^(.+?)月/);
  if (mm && !line.startsWith("月") && mm[1].length <= 4) {
    prefix = prefix ? `${prefix}, in the ${monthPhrase(mm[1])} month` : `In the ${monthPhrase(mm[1])} month`;
    line = line.slice(mm[0].length).replace(/^[,，]/, "");
  }

  // Day stem branch at start
  const dayM = line.match(/^([甲乙丙丁戊己庚辛壬癸]{1}[子丑寅卯辰巳午未申酉戌亥]{1})(朔|晦)?[,，]?/);
  if (dayM) {
    prefix = prefix ? `${prefix}, on ${dayM[1]}${dayM[2] ? ` (${dayM[2] === "朔" ? "first day" : "last day"})` : ""}` : `On ${dayM[1]}`;
    line = line.slice(dayM[0].length).replace(/^[,，]/, "");
  }

  // Apply people replacements (longest keys first)
  const peopleKeys = Object.keys(PEOPLE).sort((a, b) => b.length - a.length);
  for (const k of peopleKeys) {
    if (k.length <= 1) continue;
    line = line.split(k).join(`{{${k}}}`);
  }

  line = line
    .replace(/，/g, ", ")
    .replace(/、/g, ", ")
    .replace(/；/g, "; ")
    .replace(/公即位/g, "the duke took his place on the throne")
    .replace(/公薨於/g, "the duke died in ")
    .replace(/公薨/g, "the duke died")
    .replace(/公至自/g, "the duke arrived from ")
    .replace(/公如/g, "the duke went to ")
    .replace(/公及/g, "the duke and ")
    .replace(/公會/g, "the duke met ")
    .replace(/公敗/g, "the duke defeated ")
    .replace(/公侵/g, "the duke made an incursion into ")
    .replace(/公伐/g, "the duke invaded ")
    .replace(/公圍/g, "the duke besieged ")
    .replace(/公狩於/g, "the duke hunted at ")
    .replace(/公觀/g, "the duke viewed ")
    .replace(/我入/g, "we entered ")
    .replace(/我師/g, "our army")
    .replace(/我西鄙/g, "our western border")
    .replace(/我南鄙/g, "our southern border")
    .replace(/我東鄙/g, "our eastern border")
    .replace(/我北鄙/g, "our northern border")
    .replace(/盟於/g, " made a covenant at ")
    .replace(/盟于/g, " made a covenant at ")
    .replace(/盟/g, " made a covenant")
    .replace(/會於/g, " met at ")
    .replace(/會/g, " met ")
    .replace(/遇於/g, " had a meeting at ")
    .replace(/遇于/g, " had a meeting at ")
    .replace(/次於/g, " halted at ")
    .replace(/次于/g, " halted at ")
    .replace(/帥師/g, " led an army ")
    .replace(/帅师/g, " led an army ")
    .replace(/帥師/g, " led an army ")
    .replace(/率師/g, " led an army ")
    .replace(/敗/g, " defeated ")
    .replace(/败/g, " defeated ")
    .replace(/敗績/g, " were defeated")
    .replace(/败绩/g, " were defeated")
    .replace(/圍/g, " besieged ")
    .replace(/围/g, " besieged ")
    .replace(/滅/g, " extinguished ")
    .replace(/灭/g, " extinguished ")
    .replace(/取/g, " took ")
    .replace(/入/g, " entered ")
    .replace(/出奔/g, " fled to ")
    .replace(/來/g, " came ")
    .replace(/来/g, " came ")
    .replace(/如/g, " went to ")
    .replace(/至/g, " arrived ")
    .replace(/歸/g, " returned ")
    .replace(/归/g, " returned ")
    .replace(/葬/g, " buried ")
    .replace(/弒/g, " murdered ")
    .replace(/弑/g, " murdered ")
    .replace(/殺/g, " killed ")
    .replace(/杀/g, " killed ")
    .replace(/執/g, " seized ")
    .replace(/执/g, " seized ")
    .replace(/獲/g, " captured ")
    .replace(/获/g, " captured ")
    .replace(/立/g, " raised ")
    .replace(/納/g, " escorted in ")
    .replace(/纳/g, " escorted in ")
    .replace(/逆/g, " went to meet ")
    .replace(/聘/g, " on a friendly visit ")
    .replace(/朝/g, " on a court visit ")
    .replace(/使/g, " sent ")
    .replace(/來盟/g, " came to make a covenant")
    .replace(/来盟/g, " came to make a covenant")
    .replace(/同盟/g, " made a joint covenant")
    .replace(/日有食之，既/g, "there was an eclipse of the sun; it was total")
    .replace(/日有食之/g, "there was an eclipse of the sun")
    .replace(/日有食/g, "there was an eclipse of the sun")
    .replace(/伐/g, " invaded ")
    .replace(/侵/g, " made an incursion into ")
    .replace(/城/g, " walled ")
    .replace(/築/g, " built ")
    .replace(/筑/g, " built ")
    .replace(/狩/g, " hunted ")
    .replace(/雩/g, " rain sacrifice")
    .replace(/螽/g, "locusts appeared")
    .replace(/螟/g, "caterpillars appeared")
    .replace(/於/g, " at ")
    .replace(/于/g, " at ")
    .replace(/及/g, " and ")
    .replace(/遂/g, " then ")
    .replace(/以/g, " with ")
    .replace(/其君/g, " his ruler ")
    .replace(/其大夫/g, " his minister ")
    .replace(/諸侯/g, "the princes")
    .replace(/師/g, " army")
    .replace(/師/g, " army")
    .replace(/子/g, " viscount ")
    .replace(/伯/g, " earl ")
    .replace(/侯/g, " marquis ")
    .replace(/男/g, " baron ")
    .replace(/{{/g, "").replace(/}}/g, "");

  for (const k of peopleKeys) {
    line = line.replace(new RegExp(k, "g"), PEOPLE[k]);
  }

  line = line.replace(/\s+/g, " ").replace(/,\s*,/g, ",").trim();
  let result = [prefix, line].filter(Boolean).join(", ");
  result = result.replace(/,\s*,/g, ", ").replace(/\s+\./g, ".").trim();
  if (!result.endsWith(".")) result += ".";
  return capitalize(result);
}

function translateZhText(zh) {
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
            : translateLine(t);
        })
        .join("\n")
    )
    .join("\n\n");
}

function extractUnits(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  const units = [];
  const re = /\{\s*id: (\d+),\s*label: "([^"]+)"[\s\S]*?text: \{\s*zh: `([\s\S]*?)`,\s*en: `[\s\S]*?`\s*\}/g;
  let m;
  while ((m = re.exec(src))) units.push({ id: +m[1], label: m[2], zh: m[3] });
  return units;
}

function patchFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");

  src = src.replace(/title: \{ zh: "([^"]+)", en: "[^"]*" \}/g, (_, zh) =>
    `title: { zh: "${zh}", en: "${translateTitle(zh)}" }`
  );

  src = src.replace(/plain: \{\s*zh: `([\s\S]*?)`,\s*en: `[\s\S]*?`\s*\}/g, (_, zhPlain) => {
    const label = (src.match(/label: "([^"]+)"/) || [, ""])[1];
    return `plain: {\n      zh: \`${esc(zhPlain)}\`,\n      en: \`${esc(translatePlain(label))}\``;
  });

  src = src.replace(/text: \{\s*zh: `([\s\S]*?)`,\s*en: `[\s\S]*?`\s*\}/g, (_, zhText) =>
    `text: {\n      zh: \`${esc(zhText)}\`,\n      en: \`${esc(translateZhText(zhText))}\``
  );

  fs.writeFileSync(filePath, src, "utf8");
}

// Generate exact map for review
const allLines = new Set();
for (const n of [1, 2, 3, 4]) {
  for (const u of extractUnits(path.join(cqDir, `springAndAutumn${n}.js`))) {
    for (const line of u.zh.split("\n")) {
      const t = line.trim();
      if (!t || /^(隱|桓|莊|閔|僖|文|宣|成|襄|昭|定|哀)公/.test(t)) continue;
      allLines.add(t.replace(/。$/, ""));
    }
  }
}

const exact = {};
for (const l of allLines) exact[l] = translateLine(l);
fs.writeFileSync(path.join(__dirname, "tmp/chunqiu-exact-en.json"), JSON.stringify(exact, null, 0));

for (const n of [1, 2, 3, 4]) {
  patchFile(path.join(cqDir, `springAndAutumn${n}.js`));
  console.log("patched springAndAutumn" + n + ".js");
}
console.log("lines translated:", allLines.size);
