// Classical structure (品/分/篇/公) vs flat reading units.
// Derives hierarchy from work.structure* + chapter labels when units
// are not yet annotated with structureId / structureTitle / segment.

const DUKE_RE =
  /^(隱公|桓公|莊公|閔公|僖公|文公|宣公|成公|襄公|昭公|定公|哀公)/;

/** @returns {{ id: string|number, title?: {zh:string,en:string}, segment?: number } | null} */
export function resolveChapterStructure(work, chapter) {
  if (!work?.structureLabel || !chapter) return null;

  if (chapter.structureId != null) {
    const part = findPart(work, chapter.structureId);
    return {
      id: chapter.structureId,
      title: chapter.structureTitle || part?.title || null,
      segment: chapter.segment ?? null
    };
  }

  const label = chapter.label != null ? String(chapter.label) : "";

  // Analects / Mencius: "學而 1.1" / "梁惠王上 1.1"
  const namedBook = label.match(/^(.+?)\s+(\d+)\.(\d+)$/);
  if (
    namedBook &&
    (work.id === "analects" ||
      work.id === "mencius" ||
      work.id === "kongzi-jiayu" ||
      work.id === "zhuangzi-neipian")
  ) {
    const bookNum = Number(namedBook[2]);
    const part = findPart(work, bookNum) || findPartByZh(work, namedBook[1]);
    return {
      id: part?.id ?? bookNum,
      title: part?.title || { zh: namedBook[1], en: namedBook[1] },
      segment: Number(namedBook[3])
    };
  }

  // Spring and Autumn: label starts with duke name
  if (work.id === "spring-and-autumn") {
    const m = label.match(DUKE_RE);
    if (m) {
      const part = findPartByZh(work, m[1]);
      return {
        id: part?.id ?? m[1],
        title: part?.title || { zh: m[1], en: m[1] },
        segment: null
      };
    }
  }

  // Numeric splits: "7-3", "20-1", or whole "4"
  const num = label.match(/^(\d+)(?:-(\d+))?$/);
  if (num) {
    const sid = Number(num[1]);
    const part = findPart(work, sid);
    const title =
      part?.title ||
      stripSegmentTitle(chapter.title) ||
      null;
    return {
      id: sid,
      title,
      segment: num[2] ? Number(num[2]) : null
    };
  }

  return null;
}

function findPart(work, id) {
  const parts = work.structureParts;
  if (!parts) return null;
  return parts.find((p) => String(p.id) === String(id)) || null;
}

function findPartByZh(work, zh) {
  const parts = work.structureParts;
  if (!parts) return null;
  return parts.find((p) => p.title?.zh === zh) || null;
}

/** Drop trailing （1） / (1) / (I) style segment markers from a bilingual title. */
function stripSegmentTitle(title) {
  if (!title?.zh) return title || null;
  const zh = title.zh.replace(/[（(]\s*[0-9一二三四五六七八九十IVXivx]+\s*[）)]\s*$/u, "").trim();
  const en = (title.en || "")
    .replace(/\s*[\(（]\s*(?:[0-9]+|[IVXivx]+)\s*[\)）]\s*$/u, "")
    .replace(/\s+[IVX]+$/u, "")
    .trim();
  if (!zh) return title;
  return { zh, en: en || title.en };
}

/** Count reading units that share the same classical structure id. */
export function structureSegmentCount(work, structureId) {
  if (!work?.chapters || structureId == null) return 0;
  return work.chapters.filter((ch) => {
    const s = resolveChapterStructure(work, ch);
    return s && String(s.id) === String(structureId);
  }).length;
}

/**
 * Group chapters under classical parts for TOC.
 * Returns [{ key, title, chapters }] or null when no structure.
 */
export function groupChaptersByStructure(work, chapters) {
  if (!work?.structureLabel || !chapters?.length) return null;

  const groups = [];
  const indexByKey = new Map();

  for (const ch of chapters) {
    const s = resolveChapterStructure(work, ch);
    const key = s ? String(s.id) : `_unit_${ch.id}`;
    let g = indexByKey.get(key);
    if (!g) {
      g = {
        key,
        title: s?.title || null,
        structureId: s?.id ?? null,
        chapters: []
      };
      indexByKey.set(key, g);
      groups.push(g);
    }
    g.chapters.push(ch);
  }

  // Only treat as grouped TOC when we actually get multiple classical parts
  // or fewer groups than units (i.e. some merging happened).
  if (groups.length === chapters.length && !work.structureParts) return null;
  return groups;
}

export function structureWord(work, language, { plural = false } = {}) {
  const label = work?.structureLabel;
  if (!label) return null;
  if (language === "zh") return label.zh;
  if (!plural) return label.en;
  const en = label.en;
  if (en.endsWith("s")) return en;
  return `${en}s`;
}
