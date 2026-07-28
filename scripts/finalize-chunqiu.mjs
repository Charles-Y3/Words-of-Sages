/** Rebuild springAndAutumn*.js with full structure and Legge-style English. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  esc,
  translateTitle,
  translatePlain,
  translateZhText,
} from "./chunqiu-en-lib.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const cqDir = path.join(root, "src/data/springAndAutumn");

const APPLICATION = {
  zh: `讀編年簡筆，練習「先弄清事實，再下判斷」；勿在未辨名分前急於褒貶。\n<br /><b>建議：把本段中一件會盟或征伐，用一句話寫出「何人、何處、何故」。</b>`,
  en: `Reading spare chronicle lines, practice establishing facts before judgment — do not praise or blame before names and roles are clear.\n<br /><b>Suggestion: For one alliance or campaign in this section, write one sentence: who, where, and why.</b>`,
};

function plainZh(label) {
  const dukes = "隱公|桓公|莊公|閔公|僖公|文公|宣公|成公|襄公|昭公|定公|哀公";
  const range = label.match(new RegExp(`^(${dukes})(.+)年至(.+)$`));
  if (range) {
    const d = range[1];
    const a = range[2];
    const b = range[3];
    return `本段為魯${d}時期（${a}至${b}）的《春秋》經文。經文以魯國紀年，兼記周王室與列國朝聘、會盟、征伐、災異與喪葬。文辭極簡，往往一事數字，寓褒貶於書法之中。讀者宜先掌握時序與人物名分，再思其義理。`;
  }
  return `本段為魯${label}的《春秋》經文。經文以魯國紀年，兼記周王室與列國朝聘、會盟、征伐、災異與喪葬。文辭極簡，往往一事數字，寓褒貶於書法之中。讀者宜先掌握時序與人物名分，再思其義理。`;
}

function extractUnits(src) {
  const units = [];
  const re = /\{\s*id:\s*(\d+),\s*label:\s*"([^"]+)",\s*title:\s*\{\s*zh:\s*"([^"]+)",\s*en:\s*"([^"]*)"\s*\},\s*text:\s*\{\s*zh:\s*`([\s\S]*?)`,\s*en:\s*`([\s\S]*?)`\s*\}/g;
  let m;
  while ((m = re.exec(src))) {
    units.push({
      id: +m[1],
      label: m[2],
      titleZh: m[3],
      textZh: m[5],
      textEn: m[6],
    });
  }
  return units;
}

function renderUnit(u) {
  const keepEn = [1, 2, 3].includes(u.id) && u.textEn && !/[\u4e00-\u9fff]/.test(u.textEn);
  const textEn = keepEn ? u.textEn.trim() : translateZhText(u.textZh);
  const titleEn = translateTitle(u.label);
  return `  {
    id: ${u.id},
    label: "${u.label}",
    title: { zh: "${u.titleZh}", en: "${titleEn}" },
    text: {
      zh: \`${esc(u.textZh.trim())}\`,
      en: \`${esc(textEn)}\`
    },
    plain: {
      zh: \`${esc(plainZh(u.label))}\`,
      en: \`${esc(translatePlain(u.label))}\`
    },
    application: {
      zh: \`${esc(APPLICATION.zh)}\`,
      en: \`${esc(APPLICATION.en)}\`
    }
  }`;
}

for (const n of [1, 2, 3, 4]) {
  const fp = path.join(cqDir, `springAndAutumn${n}.js`);
  const src = fs.readFileSync(fp, "utf8");
  const units = extractUnits(src);
  if (!units.length) {
    console.error("no units in", fp);
    process.exit(1);
  }
  const body = units.map(renderUnit).join(",\n");
  const out = `const springAndAutumn${n} = [\n${body}\n];\n\nexport default springAndAutumn${n};\n`;
  fs.writeFileSync(fp, out, "utf8");
  console.log(`springAndAutumn${n}.js: ${units.length} units`);
}

console.log("done");
