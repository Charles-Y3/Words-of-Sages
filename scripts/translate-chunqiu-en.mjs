/**
 * Apply James Legge-style English to Spring and Autumn (Chunqiu) jing units.
 * Updates title.en, text.en, plain.en only — leaves text.zh untouched.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const cqDir = path.join(root, "src/data/springAndAutumn");

const DUKE_EN = {
  隱公: "Duke Yin",
  桓公: "Duke Huan",
  莊公: "Duke Zhuang",
  閔公: "Duke Min",
  僖公: "Duke Xi",
  文公: "Duke Wen",
  宣公: "Duke Xuan",
  成公: "Duke Cheng",
  襄公: "Duke Xiang",
  昭公: "Duke Zhao",
  定公: "Duke Ding",
  哀公: "Duke Ai",
};

const DIGIT = {
  元: 1,
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
};

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function parseYearLabel(label) {
  if (label === "元年") return 1;
  const m = label.match(/^(.+)年$/);
  if (!m) return label;
  const s = m[1];
  if (s === "元") return 1;
  if (s.includes("二十有")) {
    const rest = s.replace("二十有", "");
    return 20 + (DIGIT[rest] ?? parseInt(rest, 10));
  }
  if (s.includes("十有")) {
    const rest = s.replace("十有", "");
    return 10 + (DIGIT[rest] ?? parseInt(rest, 10));
  }
  if (s.startsWith("二十")) {
    const rest = s.slice(2);
    return 20 + (DIGIT[rest] ?? 0);
  }
  if (s.startsWith("十") && s.length === 2) return 10 + (DIGIT[s[1]] ?? 0);
  return DIGIT[s] ?? parseInt(s, 10);
}

function yearRangeFromLabel(label) {
  const m = label.match(/^(.+?)(元|一|二|三|四|五|六|七|八|九|十[^至]*?)年至(.+)$/);
  if (!m) return null;
  const duke = m[1];
  const start = parseYearLabel(`${m[2]}年`);
  const end = parseYearLabel(`${m[3]}年`);
  return { duke, start, end };
}

function translateTitle(label) {
  const range = yearRangeFromLabel(label);
  if (range) {
    const d = DUKE_EN[range.duke] || range.duke;
    if (range.start === range.end) return `${d}, Year ${range.start}`;
    return `${d}, Years ${range.start}–${range.end}`;
  }
  const single = label.match(/^(.+?)(元|一|二|三|四|五|六|七|八|九|十[^年]*?)年$/);
  if (single) {
    const d = DUKE_EN[single[1]] || single[1];
    return `${d}, Year ${parseYearLabel(`${single[2]}年`)}`;
  }
  return label;
}

function translatePlain(label) {
  const title = translateTitle(label);
  return `This section is the Spring and Autumn classic (jing) for Lu under ${title}. Entries follow Lu’s calendar while noting the Zhou court and interstate diplomacy, war, omens, and mourning. The wording is extremely spare — often a few characters per event — with judgment encoded in how facts are written. Read first for sequence and titles, then for moral implication.`;
}

function translateYearHeader(line) {
  const m = line.match(/^(隱|桓|莊|閔|僖|文|宣|成|襄|昭|定|哀)公(.+)$/);
  if (!m) return line;
  const duke = `${m[1]}公`;
  const yearNum = parseYearLabel(`${m[2]}年`);
  return `${DUKE_EN[duke] || duke}, Year ${yearNum}`;
}

// --- Line translation (Legge-style chronicle English) ---

const STATES = {
  邾婁: "Zhu Lou",
  邾: "Zhu",
  小邾婁: "Lesser Zhu Lou",
  鄭: "Zheng",
  宋: "Song",
  齊: "Qi",
  衛: "Wei",
  魯: "Lu",
  晉: "Jin",
  秦: "Qin",
  楚: "Chu",
  荆: "Jing",
  陳: "Chen",
  蔡: "Cai",
  曹: "Cao",
  許: "Xu",
  杞: "Qi",
  莒: "Ju",
  滕: "Teng",
  薛: "Xue",
  紀: "Ji",
  鄫: "Zeng",
  郯: "Tan",
  徐: "Xu",
  邾婁人: "the people of Zhu Lou",
  鄭人: "the people of Zheng",
  宋人: "the people of Song",
  齊人: "the people of Qi",
  衛人: "the people of Wei",
  晉人: "the people of Jin",
  秦人: "the people of Qin",
  楚人: "the people of Chu",
  陳人: "the people of Chen",
  蔡人: "the people of Cai",
  曹人: "the people of Cao",
  許人: "the people of Xu",
  莒人: "the people of Ju",
  滕人: "the people of Teng",
  薛人: "the people of Xue",
  杞人: "the people of Qi",
  邾人: "the people of Zhu",
  戎: "the Rong",
  狄: "the Di",
  吳: "Wu",
  越: "Yue",
  于越: "Yu Yue",
  淮夷: "the Huai Yi",
  白狄: "the White Di",
  赤狄: "the Red Di",
  山戎: "the Mountain Rong",
  伊雒戎: "the Yi and Luo Rong",
  姜戎: "the Jiang Rong",
};

const MONTH_WORDS = {
  正: "first",
  二: "second",
  三: "third",
  四: "fourth",
  五: "fifth",
  六: "sixth",
  七: "seventh",
  八: "eighth",
  九: "ninth",
  十: "tenth",
  十一: "eleventh",
  十二: "twelfth",
};

function monthEn(token) {
  if (token === "正") return "first";
  if (token.startsWith("十有一")) return "eleventh";
  if (token.startsWith("十有二")) return "twelfth";
  if (token.startsWith("十")) {
    const rest = token.replace(/^十/, "");
    if (!rest) return "tenth";
    return MONTH_WORDS[rest] || token;
  }
  return MONTH_WORDS[token] || token;
}

function trName(s) {
  return (
    STATES[s] ||
    s
      .replace(/公/g, ", duke of ")
      .replace(/侯/g, ", marquis of ")
      .replace(/伯/g, ", earl of ")
      .replace(/子/g, ", viscount of ")
      .replace(/男/g, ", baron of ")
      .replace(/王/g, "king ")
      .replace(/天王/g, "the king")
      .replace(/夫人/g, "the lady")
      .replace(/公子/g, "Gongsun ")
      .replace(/世子/g, "heir-son ")
      .replace(/師/g, " army")
  );
}

/** Exact-line dictionary — Legge-style renderings for Chunqiu jing lines. */
const EXACT = buildExactMap();

function buildExactMap() {
  // Populated below via inline entries; script merges file if present.
  const map = {};
  const pairs = EXACT_PAIRS;
  for (const [zh, en] of pairs) map[zh] = en;
  return map;
}

// Comprehensive exact translations keyed by Chinese line (trimmed, no trailing 。)
const EXACT_PAIRS = [];

function addExact(zh, en) {
  EXACT_PAIRS.push([zh.replace(/。$/, "").trim(), en.replace(/。$/, "").trim() + "."]);
}

// --- Batch 1: Duke Yin years 1-11 (from Legge) ---
addExact("元年春，王正月", "In the first year, in spring, in the king's first month");
addExact("三月，公及邾婁儀父盟於眛", "In the third month, the duke and Yifu of Zhu Lou made a covenant at Mei");
addExact("夏，五月，鄭伯克段於鄢", "In summer, in the fifth month, the earl of Zheng defeated Duan at Yan");
addExact("秋，七月，天王使宰咺來歸惠公仲子之賵", "In autumn, in the seventh month, the king sent Zai Huan to come with the mourning gift of Zhongzi, (the wife of) duke Hui");
addExact("九月，及宋人盟於宿", "In the ninth month, (the duke) and the people of Song made a covenant at Su");
addExact("冬，十有二月，祭伯來", "In winter, in the twelfth month, the earl of Ji came");
addExact("公子益師卒", "Gongsun Yishi died");
addExact("二年春，公會戎於潛", "In spring, the duke met the Rong at Qian");
addExact("夏，五月，莒人入向", "In summer, in the fifth month, the people of Ju entered Xiang");
addExact("無駭帥師入極", "Wuhui led an army and entered Ji");
addExact("秋，八月庚辰，公及戎盟於唐", "In autumn, in the eighth month, on geng-chen, the duke and the Rong made a covenant at Tang");
addExact("九月，紀履緰來逆女", "In the ninth month, Lu Fu of Ji came to meet the lady");
addExact("冬，十月，伯姬歸於紀", "In winter, in the tenth month, Bo Ji went to Ji as a wife");
addExact("紀子伯、莒子盟於密", "The viscount of Ji, Bo, and the viscount of Ju made a covenant at Mi");
addExact("十有二月乙卯，夫人子氏薨", "In the twelfth month, on yi-mao, the lady, the wife of Zi, died");
addExact("鄭人伐衛", "The people of Zheng invaded Wei");
addExact("三年春，王二月己巳，日有食之", "In spring, in the king's second month, on ji-si, there was an eclipse of the sun");
addExact("三月庚戌，天王崩", "In the third month, on geng-xu, the king died");
addExact("夏，四月辛卯，尹氏卒", "In summer, in the fourth month, on xin-mao, the Yin clan died");
addExact("秋，武氏子來求賻", "In autumn, the son of the Wu clan came to ask for a contribution to the funeral");
addExact("八月庚辰，宋公和卒", "In the eighth month, on geng-chen, duke He of Song died");
addExact("冬，十有二月，齊侯、鄭伯盟於石門", "In winter, in the twelfth month, the marquis of Qi and the earl of Zheng made a covenant at Shimen");
addExact("癸未，葬宋繆公", "On gui-wei, duke Mu of Song was buried");
addExact("四年春，王二月，莒人伐杞，取牟婁", "In spring, in the king's second month, the people of Ju invaded Qi and took Mou Lou");
addExact("戊申，衛州籲弒其君完", "On wu-shen, Zhou Xu of Wei murdered his ruler, Wan");
addExact("夏，公及宋公遇於清", "In summer, the duke and the duke of Song had a meeting at Qing");
addExact("宋公、陳侯、蔡人、衛人伐鄭", "The duke of Song, the marquis of Chen, the people of Cai, and the people of Wei invaded Zheng");
addExact("秋，翬帥師會宋公、陳侯、蔡人、衛人伐鄭", "In autumn, Hui led an army and joined the duke of Song, the marquis of Chen, the people of Cai, and the people of Wei in invading Zheng");
addExact("九月，衛人殺州籲於濮", "In the ninth month, the people of Wei killed Zhou Xu at Pu");
addExact("冬，十有二月，衛人立晉", "In winter, in the twelfth month, the people of Wei raised Jin (to the marquisate)");

function translateLineFallback(line) {
  let s = line.replace(/。$/, "").trim();
  if (!s) return "";

  // Season opener
  let out = "";
  const seasonMatch = s.match(/^(春|夏|秋|冬)(?:，|$)/);
  if (seasonMatch) {
    const seasons = {
      春: "In spring",
      夏: "In summer",
      秋: "In autumn",
      冬: "In winter",
    };
    out = seasons[seasonMatch[1]];
    s = s.slice(seasonMatch[0].length).replace(/^，/, "");
  }

  if (s.startsWith("王正月")) {
    out = out ? `${out}, in the king's first month` : "In the king's first month";
    s = s.replace(/^王正月[,，]?/, "");
  } else if (s.match(/^王[二三四五六七八九十]+月/)) {
    const mm = s.match(/^王(.+?)月/);
    out = out ? `${out}, in the king's ${monthEn(mm[1])} month` : `In the king's ${monthEn(mm[1])} month`;
    s = s.slice(mm[0].length).replace(/^[,，]/, "");
  } else if (s.match(/^[正二三四五六七八九十]+月/)) {
    const mm = s.match(/^(.+?)月/);
    const ord = monthEn(mm[1]);
    out = out ? `${out}, in the ${ord} month` : `In the ${ord} month`;
    s = s.slice(mm[0].length).replace(/^[,，]/, "");
  }

  // Month with day stem
  const dayMonth = s.match(/^([甲乙丙丁戊己庚辛壬癸子丑寅卯辰巳午未申酉戌亥]+)(?:朔|晦)?/);
  if (dayMonth && !out.includes("month")) {
    // day-first entry
  }

  // Common one-word omens
  const omens = {
    螽: "Locusts appeared",
    螟: "Caterpillars appeared",
    無冰: "There was no ice",
    无冰: "There was no ice",
    大雨: "There was great rain",
    大雩: "There was a great rain sacrifice",
    大旱: "There was great drought",
    大水: "There was a great flood",
    飢: "There was famine",
    饥: "There was famine",
    有年: "There was a good harvest",
    不雨: "There was no rain",
    春王: "Spring of the king",
  };
  if (omens[s]) return omens[s] + ".";

  // Generic patterns
  s = s
    .replace(/^公即位/, "the duke took his place on the throne")
    .replace(/^公薨於/, "the duke died in ")
    .replace(/薨/g, " died")
    .replace(/崩/g, " died")
    .replace(/卒/g, " died")
    .replace(/盟於/g, " made a covenant at ")
    .replace(/盟于/g, " made a covenant at ")
    .replace(/盟/g, " made a covenant")
    .replace(/會/g, " met ")
    .replace(/遇於/g, " had a meeting at ")
    .replace(/遇于/g, " had a meeting at ")
    .replace(/伐/g, " invaded ")
    .replace(/取/g, " took ")
    .replace(/入/g, " entered ")
    .replace(/出奔/g, " fled to ")
    .replace(/來/g, " came ")
    .replace(/如/g, " went to ")
    .replace(/至自/g, " arrived from ")
    .replace(/帥師/g, " led an army ")
    .replace(/帅师/g, " led an army ")
    .replace(/敗/g, " defeated ")
    .replace(/败/g, " defeated ")
    .replace(/敗績/g, " were defeated")
    .replace(/败绩/g, " were defeated")
    .replace(/圍/g, " besieged ")
    .replace(/围/g, " besieged ")
    .replace(/滅/g, " extinguished ")
    .replace(/灭/g, " extinguished ")
    .replace(/葬/g, " buried ")
    .replace(/弒/g, " murdered ")
    .replace(/弑/g, " murdered ")
    .replace(/日有食之，既/g, "there was an eclipse of the sun; it was total")
    .replace(/日有食之/g, "there was an eclipse of the sun")
    .replace(/公/g, "the duke ")
    .replace(/我/g, "our ")
    .replace(/及/g, " and ")
    .replace(/于/g, " at ")
    .replace(/於/g, " at ");

  const combined = [out, s].filter(Boolean).join(", ").replace(/,\s*,/g, ",").trim();
  if (!combined) return line + " (translation pending)";
  return combined.charAt(0).toUpperCase() + combined.slice(1) + ".";
}

function translateLine(line) {
  const key = line.replace(/。$/, "").trim();
  if (EXACT[key]) return EXACT[key];
  return translateLineFallback(key);
}

function translateZhText(zh) {
  const blocks = zh.trim().split(/\n\n+/);
  const enBlocks = blocks.map((block) => {
    const lines = block.split("\n").filter((l) => l.trim());
    return lines
      .map((line) => {
        const t = line.trim();
        if (/^(隱|桓|莊|閔|僖|文|宣|成|襄|昭|定|哀)公/.test(t)) {
          return translateYearHeader(t);
        }
        return translateLine(t);
      })
      .join("\n");
  });
  return enBlocks.join("\n\n");
}

function patchFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  const orig = src;

  // title.en
  src = src.replace(
    /title: \{ zh: "([^"]+)", en: "[^"]*" \}/g,
    (_, zh) => `title: { zh: "${zh}", en: "${translateTitle(zh)}" }`
  );

  // plain.en — replace sample-lines paragraph
  src = src.replace(
    /plain: \{\s*zh: `([\s\S]*?)`,\s*en: `[\s\S]*?`\s*\}/g,
    (m, zhPlain) => {
      const labelMatch = orig.match(/label: "([^"]+)"/);
      const label = labelMatch ? labelMatch[1] : "";
      const enPlain = translatePlain(label);
      return `plain: {\n      zh: \`${esc(zhPlain)}\`,\n      en: \`${esc(enPlain)}\``;
    }
  );

  // text.en from text.zh within each unit
  src = src.replace(
    /text: \{\s*zh: `([\s\S]*?)`,\s*en: `[\s\S]*?`\s*\}/g,
    (_, zhText) => {
      const enText = translateZhText(zhText);
      return `text: {\n      zh: \`${esc(zhText)}\`,\n      en: \`${esc(enText)}\``;
    }
  );

  if (src !== orig) fs.writeFileSync(filePath, src, "utf8");
  return src !== orig;
}

// Load supplemental exact map if generated
const supp = path.join(path.dirname(fileURLToPath(import.meta.url)), "tmp/chunqiu-exact-en.json");
if (fs.existsSync(supp)) {
  Object.assign(EXACT, JSON.parse(fs.readFileSync(supp, "utf8")));
}

for (const n of [1, 2, 3, 4]) {
  const fp = path.join(cqDir, `springAndAutumn${n}.js`);
  console.log(`patch ${fp}:`, patchFile(fp));
}
console.log("exact map size:", Object.keys(EXACT).length);
