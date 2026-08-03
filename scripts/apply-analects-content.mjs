/**
 * Apply unit content overlays by id from scripts/tmp/analects-content.json
 * onto src/data/analects/*.js
 *
 * Overlay: {
 *   "1": {
 *     textEn?, plainZh?, plainEn?, applicationZh?, applicationEn?
 *   }
 * }
 *
 * Run: node scripts/apply-analects-content.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const overlayPath = path.join(__dirname, "tmp/analects-content.json");
const dir = path.join(__dirname, "../src/data/analects");

const overlay = JSON.parse(fs.readFileSync(overlayPath, "utf8"));

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function replaceField(block, field, locale, value) {
  const re = new RegExp(`(${field}:\\s*\\{[\\s\\S]*?${locale}:\\s*)\`[\\s\\S]*?\``);
  if (!re.test(block)) return { block, ok: false };
  return { block: block.replace(re, `$1\`${esc(value)}\``), ok: true };
}

const files = fs
  .readdirSync(dir)
  .filter((f) => /^analects\d/.test(f) && f.endsWith(".js"));

let unitsPatched = 0;
let fieldsPatched = 0;

for (const file of files) {
  const full = path.join(dir, file);
  let src = fs.readFileSync(full, "utf8");
  const unitRe = /(\{\s*id:\s*)(\d+)(,\s*[\s\S]*?\n\s*\})(?=,\n\s*\{|\n\];)/g;

  src = src.replace(unitRe, (fullMatch, pre, idStr, rest) => {
    const id = idStr;
    const o = overlay[id] || overlay[Number(id)];
    if (!o) return fullMatch;
    let block = pre + idStr + rest;
    let changed = false;

    const pairs = [
      ["text", "en", o.textEn],
      ["plain", "zh", o.plainZh],
      ["plain", "en", o.plainEn],
      ["application", "zh", o.applicationZh],
      ["application", "en", o.applicationEn]
    ];
    for (const [field, locale, value] of pairs) {
      if (value == null) continue;
      const r = replaceField(block, field, locale, value);
      if (r.ok) {
        block = r.block;
        fieldsPatched++;
        changed = true;
      } else {
        console.warn(`${file} id ${id}: could not patch ${field}.${locale}`);
      }
    }
    if (changed) unitsPatched++;
    return block;
  });

  fs.writeFileSync(full, src, "utf8");
}

console.log(`Patched ${fieldsPatched} fields across ${unitsPatched} units.`);
