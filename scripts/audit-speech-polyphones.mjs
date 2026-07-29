/**
 * Audit classical 破音字 coverage for speech preparation.
 * Usage: node scripts/audit-speech-polyphones.mjs [--tradition=confucian] [--fail]
 *
 * Exit 1 with --fail if any available work in scope has uncovered high-priority hits
 * without unit speech.zh covering that character occurrence.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { prepareSpeechText } from "../src/utils/prepareSpeechText.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const worksPath = path.join(__dirname, "../src/data/works.js");
const { default: works } = await import("file://" + worksPath.replace(/\\/g, "/"));

const args = process.argv.slice(2);
const traditionArg = args.find((a) => a.startsWith("--tradition="));
const tradition = traditionArg ? traditionArg.split("=")[1] : null;
const shouldFail = args.includes("--fail");

/** High-priority polyphones often misread by TTS in classical Chinese. */
const CANDIDATES = [..."惡為與長樂行傳興分數從重朝省參著說女弟夫鄉見少易親般載"].join("");

function contextsFor(text, ch) {
  const hits = [];
  for (let i = 0; i < text.length; i++) {
    if (!CANDIDATES.includes(text[i])) continue;
    hits.push({
      char: text[i],
      index: i,
      ctx: text.slice(Math.max(0, i - 3), Math.min(text.length, i + 4)).replace(/\s+/g, "")
    });
  }
  return hits;
}

const scoped = works.filter((w) => {
  if (w.status !== "available") return false;
  if (tradition && w.tradition !== tradition) return false;
  return true;
});

let uncoveredTotal = 0;

for (const work of scoped) {
  console.log(`\n=== ${work.id} (${work.chapters.length} units) ===`);
  let workUncovered = 0;
  for (const ch of work.chapters) {
    const zh = ch.text?.zh || "";
    const prepared = prepareSpeechText(zh, "zh", {
      workId: work.id,
      speechZh: ch.speech?.zh
    });
    const hits = contextsFor(zh);
    if (!hits.length) continue;

    // A hit is "covered" if speech text differs at that index OR speech.zh exists
    // and the character was substituted somewhere in a matching context window.
    // Practical check: for each hit, if prepared speech at same index differs, covered;
    // if lengths differ (override), treat whole unit as covered when speech.zh set.
    const hasOverride = Boolean(ch.speech?.zh?.trim());
    const uncovered = [];
    if (hasOverride) {
      // still list residual candidate chars that remain identical in both strings
      // when same length; if different length, assume author handled readings.
      if (prepared.speechText.length === zh.length) {
        for (const h of hits) {
          if (prepared.speechText[h.index] === zh[h.index]) {
            // may be OK (default reading correct) — only flag high-risk pairs
            const risky =
              (h.char === "惡" && /惡其|所惡|好惡|羞惡/.test(h.ctx)) ||
              (h.char === "與" && /與能|選賢與/.test(h.ctx)) ||
              (h.char === "長" && /所長|長幼|長者|長子|長民/.test(h.ctx)) ||
              (h.char === "分" && /有分|名分|職分|本分/.test(h.ctx)) ||
              (h.char === "為" && /為己|為人[子君臣父]/.test(h.ctx)) ||
              (h.char === "樂" && /禮樂|於樂|音樂|雅樂/.test(h.ctx)) ||
              (h.char === "說" && /說乎|不亦說/.test(h.ctx)) ||
              (h.char === "親" && /親民/.test(h.ctx));
            if (risky) uncovered.push(h);
          }
        }
      }
    } else {
      for (const h of hits) {
        const risky =
          (h.char === "惡" && /惡其|所惡|好惡|羞惡|貨惡|力惡|人之所惡|天之所惡/.test(h.ctx)) ||
          (h.char === "與" && /與能|選賢與/.test(h.ctx)) ||
          (h.char === "長" && /所長|長幼|長者|長子|長民|長養|人所長/.test(h.ctx)) ||
          (h.char === "分" && /有分|名分|職分|本分|安分/.test(h.ctx)) ||
          (h.char === "為" && /為己|為人[子君臣父]|為汝|為人說/.test(h.ctx)) ||
          (h.char === "樂" && /禮樂|於樂|音樂|雅樂|樂正|善於樂|樂殺人|樂欲|天樂|鼓樂/.test(h.ctx)) ||
          (h.char === "說" && /說乎|不亦說/.test(h.ctx)) ||
          (h.char === "親" && /在親民|親民/.test(h.ctx)) ||
          (h.char === "省" && /三省|自省|內省/.test(h.ctx)) ||
          (h.char === "弟" && /孝弟|興弟/.test(h.ctx)) ||
          (h.char === "著" && /執著|無著|著衣|著相|貪著|不著/.test(h.ctx)) ||
          (h.char === "般" && /般若/.test(h.ctx)) ||
          (h.char === "載" && /載營/.test(h.ctx));
        if (!risky) continue;
        const same =
          prepared.speechText.length === zh.length &&
          prepared.speechText[h.index] === zh[h.index];
        const stillInSpeech = prepared.speechText.includes(h.ctx) && same;
        // covered if char changed at index or context phrase was rewritten away
        const changedAt =
          prepared.speechText.length === zh.length &&
          prepared.speechText[h.index] !== zh[h.index];
        const phraseGone = !prepared.speechText.includes(zh.slice(h.index, h.index + 2));
        if (!changedAt && !phraseGone && stillInSpeech) uncovered.push(h);
        else if (!changedAt && prepared.speechText === zh) uncovered.push(h);
        else if (!changedAt) {
          // double-check: if original digram still present identically nearby
          const dig = zh.slice(Math.max(0, h.index - 1), h.index + 2);
          if (prepared.speechText.includes(dig) && dig.includes(h.char)) {
            // weak signal — only if exact same index when lengths match
            if (same) uncovered.push(h);
          }
        }
      }
    }

    if (uncovered.length) {
      workUncovered += uncovered.length;
      console.log(
        `  unit ${ch.id}: ${uncovered.map((u) => `${u.char}@${u.ctx}`).join(", ")}` +
          (hasOverride ? " (override present)" : "")
      );
    }
  }
  if (workUncovered === 0) console.log("  OK — no high-priority uncovered hits");
  else {
    console.log(`  UNCOVERED: ${workUncovered}`);
    uncoveredTotal += workUncovered;
  }
}

console.log(`\nTotal high-priority uncovered: ${uncoveredTotal}`);
if (shouldFail && uncoveredTotal > 0) process.exit(1);
