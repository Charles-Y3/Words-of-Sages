import { useCallback, useEffect, useRef, useState } from "react";

export const SPEECH_MODES = ["once", "loop", "continuous"];
export const SPEECH_RATES = [0.5, 0.75, 1, 1.25, 1.5];

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

  const modeRef = useRef(mode);
  const rateRef = useRef(rate);
  const isSpeakingRef = useRef(false);
  const voicesRef = useRef([]);
  const lastArgsRef = useRef({ text: "", onEnd: undefined, advance: false });
  const speakRef = useRef(null);

  useEffect(() => {
    if (!supported) return;
    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, [supported]);

  useEffect(() => {
    if (!supported) return undefined;
    return () => window.speechSynthesis.cancel();
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    isSpeakingRef.current = false;
    setIsSpeaking(false);
    setBoundaryIndex(null);
    lastArgsRef.current = { text: "", onEnd: undefined, advance: false };
  }, [supported]);

  const speak = useCallback(
    (text, { onEnd, advance = Boolean(onEnd) } = {}) => {
      if (!supported || !text) return;
      window.speechSynthesis.cancel();
      setBoundaryIndex(null);

      lastArgsRef.current = { text, onEnd, advance };

      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = language === "zh" ? "zh-TW" : "en-US";
      utter.rate = rateRef.current;
      const voice = pickVoice(voicesRef.current, language);
      if (voice) utter.voice = voice;

      utter.onboundary = (event) => {
        setBoundaryIndex(event.charIndex);
      };

      utter.onend = () => {
        const currentMode = modeRef.current;
        const args = lastArgsRef.current;
        if (currentMode === "loop") {
          speakRef.current?.(args.text, { onEnd: args.onEnd, advance: args.advance });
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
      };

      isSpeakingRef.current = true;
      setIsSpeaking(true);
      window.speechSynthesis.speak(utter);
    },
    [supported, language]
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
    boundaryIndex
  };
}
