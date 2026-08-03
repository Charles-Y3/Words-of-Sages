import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { esc, cnYear, translatePart, splitParts } from "./chunqiu-en-lib.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const cqDir = path.join(root, "src/data/springAndAutumn");

const DUKE_EN = {
  隱公: "Duke Yin", 桓公: "Duke Huan", 莊公: "Duke Zhuang", 閔公: "Duke Min",
  僖公: "Duke Xi", 文公: "Duke Wen", 宣公: "Duke Xuan", 成公: "Duke Cheng",
  襄公: "Duke Xiang", 昭公: "Duke Zhao", 定公: "Duke Ding", 哀公: "Duke Ai",
};

function titleEn(label) {
  const dukes = Object.keys(DUKE_EN).join("|");
  const range = label.match(new RegExp(`^(${dukes})(.+)年至(.+)$`));
  if (range) {
    const d = DUKE_EN[range[1]];
    const a = cnYear(range[2].endsWith("年") ? range[2] : range[2] + "年");
    const b = cnYear(range[3].endsWith("年") ? range[3] : range[3] + "年");
    return `${d}, Years ${a}–${b}`;
  }
  const single = label.match(new RegExp(`^(${dukes})(.+?)年$`));
  if (single) return `${DUKE_EN[single[1]]}, Year ${cnYear(single[2])}`;
  return label;
}

function plainEn(label) {
  return `This section is the Spring and Autumn classic (jing) for Lu under ${titleEn(label)}. Entries follow Lu’s calendar while noting the Zhou court and interstate diplomacy, war, omens, and mourning. The wording is extremely spare — often a few characters per event — with judgment encoded in how facts are written. Read first for sequence and titles, then for moral implication.`;
}

function yearHeader(line) {
  const m = line.match(/^(隱|桓|莊|閔|僖|文|宣|成|襄|昭|定|哀)公(.+)$/);
  if (!m) return line;
  const num = cnYear(m[2].endsWith("年") ? m[2] : m[2] + "年");
  return `${DUKE_EN[`${m[1]}公`]}, Year ${num}`;
}

const overridePath = path.join(path.dirname(fileURLToPath(import.meta.url)), "chunqiu-en-overrides.json");
const OVERRIDES = fs.existsSync(overridePath)
  ? JSON.parse(fs.readFileSync(overridePath, "utf8"))
  : {};

function translateLine(line) {
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
          return /^(隱|桓|莊|閔|僖|文|宣|成|襄|昭|定|哀)公/.test(t) ? yearHeader(t) : translateLine(t);
        })
        .join("\n")
    )
    .join("\n\n");
}

function extractUnits(src) {
  const units = [];
  let pos = 0;
  while (true) {
    const idIdx = src.indexOf("id:", pos);
    if (idIdx < 0) break;
    const slice = src.slice(idIdx);
    const idM = slice.match(/id: (\d+)/);
    const labelM = slice.match(/label: "([^"]+)"/);
    const zhM = slice.match(/text: \{\s*zh: `([\s\S]*?)`,\s*en:/);
    if (!idM || !labelM || !zhM) break;
    units.push({ id: +idM[1], label: labelM[1], textZh: zhM[1] });
    const nextId = src.indexOf("\n  {", idIdx + 4);
    pos = nextId > 0 ? nextId : src.length;
    if (nextId < 0) break;
  }
  return units;
}

function rebuildFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  for (const u of extractUnits(src)) {
    const escLabel = u.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    src = src.replace(
      new RegExp(
        `(id: ${u.id},\\s*label: "${escLabel}"[\\s\\S]*?title: \\{ zh: "${escLabel}", en: )"[^"]*"`,
        "m"
      ),
      `$1"${titleEn(u.label)}"`
    );
    src = src.replace(
      new RegExp(`(id: ${u.id},[\\s\\S]*?text: \\{\\s*zh: \`[\\s\\S]*?\`,\\s*en: \`)[\\s\\S]*?(\`\\s*\\})`, "m"),
      `$1${esc(translateZh(u.textZh))}$2`
    );
    src = src.replace(
      new RegExp(`(id: ${u.id},[\\s\\S]*?plain: \\{\\s*zh: \`[\\s\\S]*?\`,\\s*en: \`)[\\s\\S]*?(\`\\s*\\})`, "m"),
      `$1${esc(plainEn(u.label))}$2`
    );
  }
  fs.writeFileSync(filePath, src, "utf8");
}

let total = 0;
for (const n of [1, 2, 3, 4]) {
  rebuildFile(path.join(cqDir, `springAndAutumn${n}.js`));
  const units = extractUnits(fs.readFileSync(path.join(cqDir, `springAndAutumn${n}.js`), "utf8"));
  total += units.length;
  console.log("rebuilt springAndAutumn" + n + ".js");
}
console.log("units", total, "overrides", Object.keys(OVERRIDES).length);
