import works from "../data/works";

let index = null;

function buildIndex() {
  const entries = [];
  for (const work of works) {
    if (work.status !== "available") continue;
    for (const ch of work.chapters) {
      for (const field of ["text", "plain", "application"]) {
        for (const lang of ["zh", "en"]) {
          entries.push({
            workId: work.id,
            workTitle: work.title,
            unitLabel: work.unitLabel,
            chapterId: ch.id,
            field,
            lang,
            content: ch[field][lang]
          });
        }
      }
    }
  }
  return entries;
}

function getIndex() {
  if (!index) index = buildIndex();
  return index;
}

const FIELD_RANK = { text: 0, plain: 1, application: 2 };

export function search(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getIndex().filter((entry) => entry.content.toLowerCase().includes(q));
}

// Collapses per-field/lang matches into one result per chapter, preferring a
// snippet in the currently active language and the original text field.
export function groupResults(rawResults, activeLang, limit = 40) {
  const byChapter = new Map();
  for (const r of rawResults) {
    const key = `${r.workId}:${r.chapterId}`;
    if (!byChapter.has(key)) byChapter.set(key, []);
    byChapter.get(key).push(r);
  }
  const grouped = Array.from(byChapter.entries()).map(([, matches]) => {
    const best = [...matches].sort((a, b) => {
      if (a.lang !== b.lang) return a.lang === activeLang ? -1 : 1;
      return FIELD_RANK[a.field] - FIELD_RANK[b.field];
    })[0];
    return { ...best, matchCount: matches.length };
  });
  return grouped.slice(0, limit);
}

export function makeSnippet(content, query, context = 36) {
  const idx = content.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return content.slice(0, context * 2);
  const start = Math.max(0, idx - context);
  const end = Math.min(content.length, idx + query.length + context);
  let snippet = content.slice(start, end).replace(/\s+/g, " ").trim();
  if (start > 0) snippet = "…" + snippet;
  if (end < content.length) snippet = snippet + "…";
  return snippet;
}
