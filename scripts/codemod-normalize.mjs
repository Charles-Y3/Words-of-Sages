// One-off codemod: normalizes chapter data files in src/data/.
// - unifies chapter/id keys into a single sequential `id` per work
// - strips baked-in source indentation and trailing markdown-break spaces
//   from multi-line template literal fields
// - converts Great Learning from Simplified to Traditional Chinese
// Run with: node scripts/codemod-normalize.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as OpenCC from "opencc-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const toTraditional = OpenCC.Converter({ from: "cn", to: "tw" });

function deindent(str) {
  if (typeof str !== "string") return str;
  return str
    .split("\n")
    .map((line) => line.replace(/^[ \t]+/, "").replace(/[ \t]+$/, ""))
    .join("\n")
    .trim();
}

function cleanLocale(obj, convertZh) {
  let zh = deindent(obj.zh);
  if (convertZh) zh = toTraditional(zh);
  return { zh, en: deindent(obj.en) };
}

function serializeString(str) {
  if (str.includes("\n")) {
    const escaped = str
      .replace(/\\/g, "\\\\")
      .replace(/`/g, "\\`")
      .replace(/\$\{/g, "\\${");
    return "`" + escaped + "`";
  }
  return JSON.stringify(str);
}

function serializeChapter(ch) {
  const i1 = "  ";
  const i2 = "    ";
  const i3 = "      ";
  const block = (name, val) =>
    `${i2}${name}: {\n${i3}zh: ${serializeString(val.zh)},\n${i3}en: ${serializeString(val.en)}\n${i2}}`;
  return `${i1}{\n${i2}id: ${ch.id},\n${block("text", ch.text)},\n${block("plain", ch.plain)},\n${block("application", ch.application)}\n${i1}}`;
}

async function processWork(dir, filePrefix, fileCount, convertZh) {
  let globalId = 1;
  let totalChapters = 0;
  for (let i = 1; i <= fileCount; i++) {
    const file = `${filePrefix}${i}.js`;
    const filePath = path.join(root, "src/data", dir, file);
    const fileUrl = "file://" + filePath.replace(/\\/g, "/") + "?t=" + Date.now();
    const mod = await import(fileUrl);
    const arr = mod.default;
    const varName = file.replace(".js", "");

    const chapters = arr.map((ch) => ({
      id: globalId++,
      text: cleanLocale(ch.text, convertZh),
      plain: cleanLocale(ch.plain, convertZh),
      application: cleanLocale(ch.application, convertZh),
    }));

    const body = chapters.map(serializeChapter).join(",\n");
    const out = `// src/data/${dir}/${file}\nconst ${varName} = [\n${body}\n];\n\nexport default ${varName};\n`;
    fs.writeFileSync(filePath, out, "utf8");
    totalChapters += chapters.length;
    console.log(
      `  ${file}: ${chapters.length} chapters, ids ${chapters[0].id}-${chapters[chapters.length - 1].id}`
    );
  }
  return totalChapters;
}

console.log("Tao Te Ching:");
const taoCount = await processWork("taoTeChing", "taoTeChing", 8, false);

console.log("Great Learning (converting Simplified -> Traditional):");
const glCount = await processWork("greatLearning", "greatLearning", 6, true);

console.log(`\nDone. Tao Te Ching: ${taoCount} chapters. Great Learning: ${glCount} chapters.`);
