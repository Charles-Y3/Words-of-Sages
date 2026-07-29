import { useCallback, useEffect, useRef, useState } from "react";
import { prepareSpeechText } from "../utils/prepareSpeechText";

export const SPEECH_MODES = ["once", "loop", "continuous"];
export const SPEECH_RATES = [0.5, 0.75, 1, 1.25, 1.5];

/** @typedef {"unsupported" | "no-zh-voice" | "no-en-voice" | "error"} SpeechIssue */

function hasLangVoice(voices, prefix) {
  return voices.some((v) => v.lang && v.lang.toLowerCase().startsWith(prefix));
}

function pickVoice(voices, language) {
  const preferred = language === "zh" ? ["zh-TW", "zh-HK", "zh-CN"] : ["en-US", "en-GB"];
  for (const tag of preferred) {
    const match = voices.find((v) => v.lang && v.lang.toLowerCase() === tag.toLowerCase());
    if (match) return match;
  }
  const prefix = language === "zh" ? "zh" : "en";
  return voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(prefix)) || null;
}

// Wraps the Web Speech API with mode-aware playback (once / loop / continuous)
// and cleans up properly on unmount and route change — the original Reader
// implementation left speechSynthesis running after navigating away.
export default function useSpeech(language) {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [mode, setMode] = useState("once");
  const [rate, setRate] = useState(1);
  const [boundaryIndex, setBoundaryIndex] = useState(null);
  const [zhVoiceAvailable, setZhVoiceAvailable] = useState(false);
  const [enVoiceAvailable, setEnVoiceAvailable] = useState(false);
  const [speechIssue, setSpeechIssue] = useState(/** @type {SpeechIssue | null} */ (null));

  const modeRef = useRef(mode);
  const rateRef = useRef(rate);
  const languageRef = useRef(language);
  const isSpeakingRef = useRef(false);
  const voicesRef = useRef([]);
  const lastArgsRef = useRef({
    displayText: "",
    speechText: "",
    trackHighlight: true,
    onEnd: undefined,
    advance: false
  });
  const speakRef = useRef(null);

  languageRef.current = language;

  useEffect(() => {
    if (!supported) {
      setZhVoiceAvailable(false);
      setEnVoiceAvailable(false);
      return undefined;
    }
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      voicesRef.current = voices;
      setZhVoiceAvailable(hasLangVoice(voices, "zh"));
      setEnVoiceAvailable(hasLangVoice(voices, "en"));
    };
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, [supported]);

  useEffect(() => {
    if (!supported) return undefined;
    return () => window.speechSynthesis.cancel();
  }, [supported]);

  const clearSpeechIssue = useCallback(() => setSpeechIssue(null), []);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    isSpeakingRef.current = false;
    setIsSpeaking(false);
    setBoundaryIndex(null);
    lastArgsRef.current = {
      displayText: "",
      speechText: "",
      trackHighlight: true,
      onEnd: undefined,
      advance: false
    };
  }, [supported]);

  const speak = useCallback(
    (text, { onEnd, advance = Boolean(onEnd) } = {}) => {
      if (!supported) {
        setSpeechIssue("unsupported");
        return;
      }
      if (!text) return;

      const lang = languageRef.current;
      const voices = voicesRef.current.length
        ? voicesRef.current
        : window.speechSynthesis.getVoices();
      voicesRef.current = voices;

      const hasVoice =
        lang === "zh" ? hasLangVoice(voices, "zh") : hasLangVoice(voices, "en");
      if (!hasVoice) {
        setSpeechIssue(lang === "zh" ? "no-zh-voice" : "no-en-voice");
        isSpeakingRef.current = false;
        setIsSpeaking(false);
        setBoundaryIndex(null);
        return;
      }

      const { speechText, changed } = prepareSpeechText(text, lang);
      const trackHighlight = !changed;

      window.speechSynthesis.cancel();
      setBoundaryIndex(null);
      setSpeechIssue(null);

      lastArgsRef.current = {
        displayText: text,
        speechText,
        trackHighlight,
        onEnd,
        advance
      };

      const utter = new SpeechSynthesisUtterance(speechText);
      utter.lang = lang === "zh" ? "zh-TW" : "en-US";
      utter.rate = rateRef.current;
      const voice = pickVoice(voices, lang);
      if (voice) utter.voice = voice;

      utter.onboundary = (event) => {
        if (!trackHighlight) return;
        setBoundaryIndex(event.charIndex);
      };

      utter.onend = () => {
        const currentMode = modeRef.current;
        const args = lastArgsRef.current;
        if (currentMode === "loop") {
          speakRef.current?.(args.displayText, {
            onEnd: args.onEnd,
            advance: args.advance
          });
          return;
        }
        if (args.advance && args.onEnd) {
          const hasNext = args.onEnd();
          if (hasNext) return;
        }
        isSpeakingRef.current = false;
        setIsSpeaking(false);
        setBoundaryIndex(null);
      };
      utter.onerror = (event) => {
        // cancel() when restarting for a new rate/mode fires "interrupted"/"canceled"
        if (event.error === "interrupted" || event.error === "canceled") return;
        isSpeakingRef.current = false;
        setIsSpeaking(false);
        setBoundaryIndex(null);
        setSpeechIssue("error");
      };

      isSpeakingRef.current = true;
      setIsSpeaking(true);
      window.speechSynthesis.speak(utter);
    },
    [supported]
  );

  speakRef.current = speak;

  const cycleMode = useCallback(() => {
    setMode((m) => {
      const next = SPEECH_MODES[(SPEECH_MODES.indexOf(m) + 1) % SPEECH_MODES.length];
      modeRef.current = next;
      return next;
    });
  }, []);

  const cycleRate = useCallback(() => {
    setRate((r) => {
      const idx = SPEECH_RATES.indexOf(r);
      const next = SPEECH_RATES[(idx < 0 ? 0 : idx + 1) % SPEECH_RATES.length];
      rateRef.current = next;
      return next;
    });
  }, []);

  return {
    supported,
    isSpeaking,
    mode,
    setMode,
    cycleMode,
    rate,
    cycleRate,
    speak,
    stop,
    boundaryIndex,
    zhVoiceAvailable,
    enVoiceAvailable,
    speechIssue,
    clearSpeechIssue
  };
}
