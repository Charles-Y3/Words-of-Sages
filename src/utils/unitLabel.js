// src/utils/unitLabel.js

const DEFAULT_LABEL = { zh: "章", en: "Chapter" };

export function getUnitLabel(work) {
  return work?.unitLabel || DEFAULT_LABEL;
}

/** Singular unit word for the work, e.g. 章 / Chapter / Verse */
export function unitWord(work, language, { plural = false } = {}) {
  const label = getUnitLabel(work);
  if (language === "zh") return label.zh;
  if (!plural) return label.en;
  const en = label.en;
  if (en.endsWith("s")) return en;
  return `${en}s`;
}

/** Display id for a unit — uses chapter.label when present (e.g. "30-1"). */
export function unitDisplayId(work, id) {
  const chapter = work?.chapters?.find((c) => c.id === id);
  return chapter?.label ?? id;
}

/** "第 3 章" / "Chapter 3" — or "第 30-1 章" when labeled */
export function unitName(work, language, id) {
  const word = unitWord(work, language);
  const display = unitDisplayId(work, id);
  return language === "zh" ? `第 ${display} ${word}` : `${word} ${display}`;
}

/**
 * Label for a saved passage. In continuous (Full) mode, show 通讀 / Full
 * instead of the unit number — bookmarks/notes/continue should reflect how
 * the reader was studying.
 */
export function passageRef(work, language, id, viewMode) {
  if (viewMode === "continuous") {
    return language === "zh" ? "通讀" : "Full";
  }
  return unitName(work, language, id);
}

/** Reader path including optional continuous view query and note-open flag. */
export function readerHref(workId, chapterId, viewMode, { openNote = false } = {}) {
  const base = `/reader/${workId}/${chapterId}`;
  const params = new URLSearchParams();
  if (viewMode === "continuous") params.set("view", "continuous");
  if (openNote) params.set("note", "1");
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

/** "第 3 章 · 共 81 章" / "Chapter 3 of 81" */
export function unitProgress(work, language, id, total) {
  const word = unitWord(work, language);
  const display = unitDisplayId(work, id);
  if (language === "zh") return `第 ${display} ${word} · 共 ${total} ${word}`;
  return `${word} ${display} of ${total}`;
}

/** Short meta count: "81 章" / "81 chapters" */
export function unitCountLabel(work, language, count) {
  const word = unitWord(work, language, { plural: true });
  return language === "zh" ? `${count} ${word}` : `${count} ${word.toLowerCase()}`;
}
