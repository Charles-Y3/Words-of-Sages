import { useCallback, useEffect, useRef, useState } from "react";

export const SPEECH_MODES = ["once", "loop", "continuous"];
export const SPEECH_RATES = [0.75, 1, 1.25, 1.5];

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
  const voicesRef = useRef([]);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    rateRef.current = rate;
  }, [rate]);

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
    setIsSpeaking(false);
    setBoundaryIndex(null);
  }, [supported]);

  const speak = useCallback(
    (text, { onEnd } = {}) => {
      if (!supported || !text) return;
      window.speechSynthesis.cancel();
      setBoundaryIndex(null);

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
        if (currentMode === "loop") {
          speak(text, { onEnd });
          return;
        }
        // Caller-supplied onEnd (e.g. advance to next unit) wins for both
        // speech "continuous" mode and continuous reading view.
        if (onEnd) {
          const hasNext = onEnd();
          if (hasNext) return;
        }
        setIsSpeaking(false);
        setBoundaryIndex(null);
      };
      utter.onerror = () => {
        setIsSpeaking(false);
        setBoundaryIndex(null);
      };

      setIsSpeaking(true);
      window.speechSynthesis.speak(utter);
    },
    [supported, language]
  );

  const cycleMode = useCallback(() => {
    setMode((m) => SPEECH_MODES[(SPEECH_MODES.indexOf(m) + 1) % SPEECH_MODES.length]);
  }, []);

  const cycleRate = useCallback(() => {
    setRate((r) => {
      const idx = SPEECH_RATES.indexOf(r);
      return SPEECH_RATES[(idx + 1) % SPEECH_RATES.length];
    });
  }, []);

  return { supported, isSpeaking, mode, setMode, cycleMode, rate, cycleRate, speak, stop, boundaryIndex };
}
