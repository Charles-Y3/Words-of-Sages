import fs from 'fs';
import path from 'path';
import { batch2 } from './platform-en-batch2.mjs';
import { batch3 } from './platform-en-batch3.mjs';

const dir = path.resolve('src/data/platformSutra');

const translations = { ...batch2, ...batch3 };

function replaceEn(file, id, newEn) {
  const filePath = path.join(dir, file);
  const c = fs.readFileSync(filePath, 'utf8');
  const idPattern = new RegExp(
    `(id:\\s*${id},[\\s\\S]*?text:\\s*\\{\\s*\\n\\s*zh:\\s*\`[\\s\\S]*?\`,\\s*\\n\\s*en:\\s*\`)[\\s\\S]*?(\`\\s*\\n\\s*\\},\\s*\\n\\s*plain:)`
  );
  if (!idPattern.test(c)) throw new Error(`Could not find unit ${id} in ${file}`);
  const updated = c.replace(idPattern, `$1${newEn}$2`);
  fs.writeFileSync(filePath, updated);
  console.log(`Updated unit ${id} in ${file}`);
}

const fileMap = {};
for (let id = 1; id <= 30; id++) {
  if (id <= 12) fileMap[id] = 'platformSutra1.js';
  else if (id <= 24) fileMap[id] = 'platformSutra2.js';
  else fileMap[id] = 'platformSutra3.js';
}

for (const [id, en] of Object.entries(translations)) {
  replaceEn(fileMap[Number(id)], Number(id), en);
}

console.log(`Applied ${Object.keys(translations).length} translations.`);
