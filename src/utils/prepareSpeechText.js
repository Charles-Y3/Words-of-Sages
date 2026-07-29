import {
  SPEECH_CONTEXT_RULES,
  SPEECH_PHRASE_RULES
} from "../data/speechPronunciation.js";

const PHRASE_RULES_SORTED = [...SPEECH_PHRASE_RULES]
  .filter((r) => r.from && r.to && r.from !== r.to)
  .sort((a, b) => b.from.length - a.from.length);

/**
 * Prepare text for speechSynthesis. Display / chapter.text must stay unchanged.
 * @param {string} text
 * @param {"zh"|"en"} language
 * @returns {{ speechText: string, changed: boolean }}
 */
export function prepareSpeechText(text, language) {
  if (!text || language !== "zh") {
    return { speechText: text || "", changed: false };
  }

  let out = text;

  for (const { from, to } of PHRASE_RULES_SORTED) {
    if (out.includes(from)) {
      out = out.split(from).join(to);
    }
  }

  for (const { re, to } of SPEECH_CONTEXT_RULES) {
    out = out.replace(re, to);
  }

  return { speechText: out, changed: out !== text };
}
