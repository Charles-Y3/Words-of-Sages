// src/utils/unitLabel.js
import {
  resolveChapterStructure,
  structureSegmentCount,
  structureWord
} from "./structure.js";

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

/**
 * Display id for a unit — uses chapter.label when present (e.g. "30-1").
 * Some works (e.g. Spring and Autumn) use a descriptive Chinese phrase as
 * the label itself (label === title.zh) rather than a neutral number; for
 * those, switch to title.en in English so the label doesn't mix languages.
 */
export function unitDisplayId(work, id, language) {
  const chapter = work?.chapters?.find((c) => c.id === id);
  if (!chapter) return id;
  const isDescriptiveLabel = chapter.title && chapter.label === chapter.title.zh;
  if (isDescriptiveLabel && language && language !== "zh" && chapter.title[language]) {
    return chapter.title[language];
  }
  return chapter.label ?? id;
}

/** "第 3 章" / "Chapter 3" — or structure-aware name when subdivided */
export function unitName(work, language, id) {
  const chapter = work?.chapters?.find((c) => c.id === id);
  const structured = resolveChapterStructure(work, chapter);

  // Analects / Spring: prefer the existing label (學而 1.1, duke span)
  if (work?.id === "analects" || work?.id === "spring-and-autumn") {
    return unitDisplayId(work, id, language);
  }

  if (structured?.title) {
    const partTitle = structured.title[language] || structured.title.zh;
    const segTotal = structureSegmentCount(work, structured.id);
    if (structured.segment != null && segTotal > 1) {
      const word = unitWord(work, language);
      return language === "zh"
        ? `${partTitle} · 第 ${structured.segment} ${word}`
        : `${partTitle} · ${word} ${structured.segment}`;
    }
    return partTitle;
  }

  const word = unitWord(work, language);
  const display = unitDisplayId(work, id, language);
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

/**
 * Reader header progress.
 * Subdivided: "機緣品 · 第 3/7 節" / "Encounters · Section 3 of 7"
 * Otherwise: "第 3 章 · 共 81 章" / "Chapter 3 of 81"
 */
export function unitProgress(work, language, id, total) {
  const chapter = work?.chapters?.find((c) => c.id === id);
  const structured = resolveChapterStructure(work, chapter);
  const word = unitWord(work, language);

  // Book/duke hierarchies keep the native label; count is still by reading unit.
  if (work?.id === "analects" || work?.id === "spring-and-autumn") {
    const display = unitDisplayId(work, id, language);
    if (language === "zh") return `${display} · 共 ${total} ${word}`;
    return `${display} · ${total} ${unitWord(work, language, { plural: true }).toLowerCase()}`;
  }

  if (structured?.title) {
    const partTitle = structured.title[language] || structured.title.zh;
    const segTotal = structureSegmentCount(work, structured.id);

    if (structured.segment != null && segTotal > 1) {
      if (language === "zh") {
        return `${partTitle} · 第 ${structured.segment}/${segTotal} ${word}`;
      }
      return `${partTitle} · ${word} ${structured.segment} of ${segTotal}`;
    }

    const sWord = structureWord(work, language);
    const sCount = work.structureCount;
    if (language === "zh") {
      return `${partTitle} · 共 ${sCount} ${sWord}`;
    }
    return `${partTitle} · ${sCount} ${structureWord(work, language, { plural: true }).toLowerCase()}`;
  }

  const display = unitDisplayId(work, id, language);
  if (language === "zh") return `第 ${display} ${word} · 共 ${total} ${word}`;
  return `${word} ${display} of ${total}`;
}

/**
 * Library meta count.
 * With classical structure: "10 品 · 30 節" / "10 chapters · 30 sections"
 * Otherwise: "81 章" / "81 chapters"
 */
export function unitCountLabel(work, language, count) {
  const unitCount = count ?? work?.chapters?.length ?? 0;
  const unitPlural = unitWord(work, language, { plural: true });

  if (work?.structureCount && work?.structureLabel) {
    const sWord = structureWord(work, language, { plural: true });
    // Coming-soon drafts may not match the classical total yet — show structure only.
    if (work.status === "coming-soon") {
      return language === "zh"
        ? `${work.structureCount} ${work.structureLabel.zh}`
        : `${work.structureCount} ${sWord.toLowerCase()}`;
    }
    if (language === "zh") {
      return `${work.structureCount} ${work.structureLabel.zh} · ${unitCount} ${unitPlural}`;
    }
    return `${work.structureCount} ${sWord.toLowerCase()} · ${unitCount} ${unitPlural.toLowerCase()}`;
  }

  return language === "zh"
    ? `${unitCount} ${unitPlural}`
    : `${unitCount} ${unitPlural.toLowerCase()}`;
}
