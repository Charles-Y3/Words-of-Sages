// Validates src/data/works.js: each available work must have unique,
// sequential chapter ids and non-empty bilingual text/plain/application fields.
// Run with: node scripts/validate-data.mjs
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const worksPath = path.join(__dirname, "../src/data/works.js");
const { default: works } = await import("file://" + worksPath.replace(/\\/g, "/"));

let errors = 0;
const fields = ["text", "plain", "application"];
const locales = ["zh", "en"];

for (const work of works) {
  // coming-soon may still hold draft chapters (kept for later); validate them
  // when present, but do not require chapters.
  if (work.status === "coming-soon" && work.chapters.length === 0) {
    console.log(`[${work.id}] coming-soon (no chapters yet)`);
    continue;
  }

  if (work.status !== "coming-soon" && work.chapters.length === 0) {
    console.error(`[${work.id}] status "${work.status}" but has no chapters`);
    errors++;
    continue;
  }

  work.chapters.forEach((ch, i) => {
    const expectedId = i + 1;
    if (ch.id !== expectedId) {
      console.error(`[${work.id}] chapter at index ${i} has id ${ch.id}, expected ${expectedId}`);
      errors++;
    }
    fields.forEach((f) => {
      if (!ch[f]) {
        console.error(`[${work.id}] chapter ${ch.id} missing field "${f}"`);
        errors++;
        return;
      }
      locales.forEach((l) => {
        const val = ch[f][l];
        if (!val || !String(val).trim()) {
          console.error(`[${work.id}] chapter ${ch.id} missing/empty ${f}.${l}`);
          errors++;
        }
      });
    });
  });

  const tag = work.status === "coming-soon" ? "coming-soon, content kept" : "OK";
  console.log(`[${work.id}] ${work.chapters.length} chapters ${tag}`);
}

if (errors > 0) {
  console.error(`\nvalidate-data: ${errors} error(s) found.`);
  process.exit(1);
} else {
  console.log(`\nvalidate-data: all good (${works.length} works checked).`);
}
