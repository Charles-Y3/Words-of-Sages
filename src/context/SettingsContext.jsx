import React, { createContext, useContext, useEffect, useMemo, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { wosKey } from "../utils/storage";

const SettingsContext = createContext(null);

export const FONT_SCALES = [1, 1.15, 1.3, 1.5];

function getDefaultSettings() {
  const prefersDark =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;
  return {
    language: "zh",
    theme: prefersDark ? "dark" : "light",
    fontStep: 0,
    languageChosen: false
  };
}

function normalizeSettings(stored, defaults) {
  if (!stored || typeof stored !== "object") return { ...defaults };
  return {
    ...defaults,
    ...stored,
    // Existing installs (pre–language gate) skip the prompt.
    languageChosen: Object.prototype.hasOwnProperty.call(stored, "languageChosen")
      ? Boolean(stored.languageChosen)
      : true
  };
}

export function SettingsProvider({ children }) {
  const defaults = useMemo(getDefaultSettings, []);
  const [rawSettings, setRawSettings] = useLocalStorage(wosKey("settings"), defaults);
  const settings = useMemo(
    () => normalizeSettings(rawSettings, defaults),
    [rawSettings, defaults]
  );

  const setSettings = useCallback(
    (updater) => {
      setRawSettings((prev) => {
        const base = normalizeSettings(prev, defaults);
        return typeof updater === "function" ? updater(base) : updater;
      });
    },
    [defaults, setRawSettings]
  );

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", settings.theme);
    root.style.setProperty("--font-scale", FONT_SCALES[settings.fontStep] ?? 1);
    root.setAttribute("lang", settings.language === "zh" ? "zh-Hant" : "en");
  }, [settings.theme, settings.fontStep, settings.language]);

  // Persist normalized languageChosen for older installs so the gate does not return.
  useEffect(() => {
    if (
      rawSettings &&
      typeof rawSettings === "object" &&
      !Object.prototype.hasOwnProperty.call(rawSettings, "languageChosen")
    ) {
      setRawSettings((prev) => ({ ...prev, languageChosen: true }));
    }
  }, [rawSettings, setRawSettings]);

  const value = useMemo(
    () => ({
      language: settings.language,
      theme: settings.theme,
      fontStep: settings.fontStep,
      languageChosen: Boolean(settings.languageChosen),
      fontScaleSteps: FONT_SCALES.length,
      setLanguage: (language) => setSettings((s) => ({ ...s, language })),
      chooseLanguage: (language) =>
        setSettings((s) => ({ ...s, language, languageChosen: true })),
      toggleLanguage: () =>
        setSettings((s) => ({ ...s, language: s.language === "zh" ? "en" : "zh" })),
      setTheme: (theme) => setSettings((s) => ({ ...s, theme })),
      setFontStep: (step) =>
        setSettings((s) => ({
          ...s,
          fontStep: Math.max(0, Math.min(FONT_SCALES.length - 1, step))
        })),
      incrementFontStep: () =>
        setSettings((s) => ({
          ...s,
          fontStep: Math.min(FONT_SCALES.length - 1, s.fontStep + 1)
        })),
      decrementFontStep: () =>
        setSettings((s) => ({ ...s, fontStep: Math.max(0, s.fontStep - 1) }))
    }),
    [settings, setSettings]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within a SettingsProvider");
  return ctx;
}
