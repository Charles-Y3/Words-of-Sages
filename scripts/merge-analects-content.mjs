/**
 * Merge book overlay JSON files into scripts/tmp/analects-content.json
 * Usage: node scripts/merge-analects-content.mjs [files...]
 * Default: scripts/tmp/analects-content-*.json (excluding analects-content.json)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tmp = path.join(__dirname, "tmp");
const mainPath = path.join(tmp, "analects-content.json");
const main = fs.existsSync(mainPath) ? JSON.parse(fs.readFileSync(mainPath, "utf8")) : {};

const args = process.argv.slice(2);
const files =
  args.length > 0
    ? args.map((f) => (path.isAbsolute(f) ? f : path.join(process.cwd(), f)))
    : fs
        .readdirSync(tmp)
        .filter((f) => f.startsWith("analects-content-") && f.endsWith(".json"))
        .map((f) => path.join(tmp, f));

let added = 0;
for (const f of files) {
  if (!fs.existsSync(f)) {
    console.warn("missing", f);
    continue;
  }
  const part = JSON.parse(fs.readFileSync(f, "utf8"));
  const keys = Object.keys(part);
  Object.assign(main, part);
  added += keys.length;
  console.log("merged", path.basename(f), keys.length, "keys");
}

fs.writeFileSync(mainPath, JSON.stringify(main, null, 2), "utf8");
console.log("total keys in analects-content.json:", Object.keys(main).length, "(+~", added, "this run)");
