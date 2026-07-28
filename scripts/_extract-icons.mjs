import fs from "node:fs";

const raw = fs.readFileSync(
  "C:/Users/charl/.claude/projects/C--Users-charl-Documents-Projects-words-of-sages/b05b9871-d28c-40ad-a23a-b8b3cbaa0d8b/tool-results/mcp-Claude_Browser-javascript_tool-1785147245144.txt",
  "utf-8"
);
const data = JSON.parse(raw);
const obj = JSON.parse(data[0].text);

for (const [key, dataUrl] of Object.entries(obj)) {
  const b64 = dataUrl.split(",")[1];
  const buf = Buffer.from(b64, "base64");
  const out = `C:/Users/charl/Documents/Projects/words-of-sages/public/icons/${key}.png`;
  fs.writeFileSync(out, buf);
  console.log(key, buf.length, "bytes ->", out);
}
