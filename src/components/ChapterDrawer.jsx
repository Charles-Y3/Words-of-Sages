import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ChapterDrawer.module.css";
import { unitWord, unitDisplayId } from "../utils/unitLabel";
import { groupChaptersByStructure } from "../utils/structure";

function firstLine(text, max = 28) {
  if (!text) return "";
  const line = text.split("\n")[0].trim();
  return line.length > max ? line.slice(0, max) + "…" : line;
}

// Filter box only earns its keep on longer works — short scriptures fit on
// one screen without it.
const FILTER_THRESHOLD = 20;

function ChapterItem({
  ch,
  work,
  language,
  currentId,
  readIds,
  notedIds,
  onSelect,
  itemRef,
  compact
}) {
  const active = ch.id === currentId;
  return (
    <button
      ref={active ? itemRef : null}
      className={`${styles.item} ${active ? styles.itemActive : ""} ${compact ? styles.itemNested : ""}`}
      onClick={() => onSelect(ch.id)}
      aria-current={active ? "true" : undefined}
    >
      <span className={styles.itemNum}>{unitDisplayId(work, ch.id, language)}</span>
      <span className={styles.itemSnippet}>{firstLine(ch.text[language])}</span>
      {notedIds.has(ch.id) && (
        <span className={styles.itemNote} aria-label={language === "zh" ? "有筆記" : "has note"}>
          ✎
        </span>
      )}
      {readIds.has(ch.id) && (
        <span className={styles.itemRead} aria-label={language === "zh" ? "已讀" : "read"}>
          ✓
        </span>
      )}
    </button>
  );
}

export default function ChapterDrawer({
  work,
  language,
  currentId,
  readIds,
  notedIds = new Set(),
  onSelect,
  onClose,
  onRandom
}) {
  const closeRef = useRef(null);
  const itemRef = useRef(null);
  const unit = unitWord(work, language);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    itemRef.current?.scrollIntoView({ block: "center" });
  }, []);

  const showFilter = work.chapters.length > FILTER_THRESHOLD;
  const filteredChapters = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return work.chapters;
    return work.chapters.filter((ch) => {
      const label = String(ch.label ?? ch.id).toLowerCase();
      if (label.includes(q)) return true;
      const titleZh = ch.title?.zh?.toLowerCase() || "";
      const titleEn = ch.title?.en?.toLowerCase() || "";
      if (titleZh.includes(q) || titleEn.includes(q)) return true;
      return (ch.text?.[language] || "").toLowerCase().includes(q);
    });
  }, [work.chapters, filter, language]);

  const groups = useMemo(
    () => groupChaptersByStructure(work, filteredChapters),
    [work, filteredChapters]
  );

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label={language === "zh" ? "目錄" : "Table of contents"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.head}>
          <h3 className={styles.title}>{language === "zh" ? "目錄" : "Contents"}</h3>
          <button
            ref={closeRef}
            className={styles.item}
            style={{ padding: "0.3em 0.6em" }}
            onClick={onClose}
            aria-label={language === "zh" ? "關閉目錄" : "Close contents"}
          >
            ✕
          </button>
        </div>
        <button className={styles.randomAction} onClick={onRandom}>
          {language === "zh" ? `隨機${unit}` : `Random ${unitWord(work, "en")}`}
        </button>
        {showFilter && (
          <input
            type="search"
            className={styles.filterInput}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder={language === "zh" ? `篩選${unit}…` : "Filter…"}
            aria-label={language === "zh" ? `篩選${unit}` : "Filter contents"}
          />
        )}
        <div className={styles.list}>
          {filteredChapters.length === 0 ? (
            <p className={styles.empty}>
              {language === "zh" ? "沒有符合的結果" : "No matches"}
            </p>
          ) : groups ? (
            groups.map((group) => {
              const heading =
                group.title?.[language] ||
                group.title?.zh ||
                (group.structureId != null ? String(group.structureId) : "");
              const single = group.chapters.length === 1;
              return (
                <div key={group.key} className={styles.group}>
                  {heading && (
                    <div className={styles.groupHead}>{heading}</div>
                  )}
                  {group.chapters.map((ch) => (
                    <ChapterItem
                      key={ch.id}
                      ch={ch}
                      work={work}
                      language={language}
                      currentId={currentId}
                      readIds={readIds}
                      notedIds={notedIds}
                      onSelect={onSelect}
                      itemRef={itemRef}
                      compact={!single}
                    />
                  ))}
                </div>
              );
            })
          ) : (
            filteredChapters.map((ch) => (
              <ChapterItem
                key={ch.id}
                ch={ch}
                work={work}
                language={language}
                currentId={currentId}
                readIds={readIds}
                notedIds={notedIds}
                onSelect={onSelect}
                itemRef={itemRef}
                compact={false}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
