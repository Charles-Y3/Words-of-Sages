import {
  SPEECH_CONTEXT_RULES,
  SPEECH_PHRASE_RULES
} from "../data/speechPronunciation.js";
import { getWorkSpeechLexicon } from "../data/speech/works/index.js";

function sortPhrases(rules) {
  return [...(rules || [])]
    .filter((r) => r.from && r.to && r.from !== r.to)
    .sort((a, b) => b.from.length - a.from.length);
}

function applyPhrases(text, phrases) {
  let out = text;
  for (const { from, to } of phrases) {
    if (out.includes(from)) out = out.split(from).join(to);
  }
  return out;
}

function applyContexts(text, contexts) {
  let out = text;
  for (const { re, to } of contexts || []) {
    out = out.replace(re, to);
  }
  return out;
}

/**
 * Prepare text for speechSynthesis. Display / chapter.text must stay unchanged.
 *
 * @param {string} text display Chinese (or English)
 * @param {"zh"|"en"} language
 * @param {{ workId?: string, speechZh?: string }} [options]
 * @returns {{ speechText: string, changed: boolean }}
 */
export function prepareSpeechText(text, language, options = {}) {
  if (!text || language !== "zh") {
    return { speechText: text || "", changed: false };
  }

  const { workId, speechZh } = options;
  if (speechZh && String(speechZh).trim()) {
    const override = String(speechZh);
    return { speechText: override, changed: override !== text };
  }

  let out = text;
  const workLex = getWorkSpeechLexicon(workId);
  if (workLex) {
    out = applyPhrases(out, sortPhrases(workLex.phrases));
    out = applyContexts(out, workLex.contexts);
  }

  out = applyPhrases(out, sortPhrases(SPEECH_PHRASE_RULES));
  out = applyContexts(out, SPEECH_CONTEXT_RULES);

  return { speechText: out, changed: out !== text };
}
