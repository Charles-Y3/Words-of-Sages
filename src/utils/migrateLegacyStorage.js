import { wosKey, writeJSON } from "./storage";

// Maps the old ad-hoc localStorage workId scheme (from before works.js was
// restructured into an array) onto the current work ids.
const LEGACY_WORK_ID_MAP = {
  "tao-te-ching-1": "tao-te-ching",
  "great-learning": "great-learning",
  analects: "analects",
  "doctrine-of-mean": "doctrine-of-mean",
  mencius: "mencius"
};

export function migrateLegacyStorage() {
  const flagKey = wosKey("migrated");
  if (localStorage.getItem(flagKey)) return;

  const settingsKey = wosKey("settings");
  if (!localStorage.getItem(settingsKey)) {
    const legacyLang = localStorage.getItem("language");
    if (legacyLang === "zh" || legacyLang === "en") {
      writeJSON(settingsKey, { language: legacyLang, theme: "light", fontStep: 0 });
    }
  }

  const progressKey = wosKey("progress");
  if (!localStorage.getItem(progressKey)) {
    const progress = {};
    let now = 1;
    for (const [legacyId, newId] of Object.entries(LEGACY_WORK_ID_MAP)) {
      const raw = localStorage.getItem(`last-${legacyId}`);
      if (!raw) continue;
      const chapterId = parseInt(raw, 10);
      if (Number.isNaN(chapterId)) continue;
      progress[newId] = { read: [chapterId], last: chapterId, updatedAt: now++ };
    }
    if (Object.keys(progress).length > 0) writeJSON(progressKey, progress);
  }

  localStorage.setItem(flagKey, "1");
}
