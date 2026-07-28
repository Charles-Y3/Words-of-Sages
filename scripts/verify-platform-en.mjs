import fs from 'fs';
import path from 'path';

const dir = path.resolve('src/data/platformSutra');
let totalWords = 0;
const failing = [];

for (const f of ['platformSutra1', 'platformSutra2', 'platformSutra3']) {
  const c = fs.readFileSync(path.join(dir, `${f}.js`), 'utf8');
  const units = (c.match(/id:\s*\d+/g) || []).length;
  const bad = (c.match(/English follows the Chinese/g) || []).length;
  const zhInEn = (c.match(/en: `[^`]*[\u4e00-\u9fff]{4,}/g) || []).length;
  console.log(`${f}: units=${units} placeholders=${bad} chineseInEn=${zhInEn}`);

  const re = /text:\s*\{\s*\n\s*zh:\s*`[\s\S]*?`,\s*\n\s*en:\s*`([\s\S]*?)`/g;
  let m;
  while ((m = re.exec(c)) !== null) {
    const words = m[1]
      .replace(/[\u4e00-\u9fff]/g, ' ')
      .split(/\s+/)
      .filter(Boolean).length;
    totalWords += words;
    if (/[\u4e00-\u9fff]{4,}/.test(m[1])) {
      failing.push(`${f} en block with Chinese (${words} words)`);
    }
  }
}

console.log('totalEnglishWords=' + totalWords);
const c1 = fs.readFileSync(path.join(dir, 'platformSutra1.js'), 'utf8');
console.log('zhSample intact:', c1.includes('時，大師至寶林'));
const totalUnits = ['platformSutra1', 'platformSutra2', 'platformSutra3'].reduce(
  (s, f) => s + (fs.readFileSync(path.join(dir, `${f}.js`), 'utf8').match(/id:\s*\d+/g) || []).length,
  0
);
console.log('totalUnits=' + totalUnits);
if (failing.length) console.log('FAILING:', failing);
else console.log('All units pass verification.');
