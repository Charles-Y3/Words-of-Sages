import React, { useEffect, useRef } from "react";
import styles from "./ChapterDrawer.module.css";
import { unitWord } from "../utils/unitLabel";

function firstLine(text, max = 28) {
  if (!text) return "";
  const line = text.split("\n")[0].trim();
  return line.length > max ? line.slice(0, max) + "…" : line;
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
          <span aria-hidden="true">🎲</span>
          {language === "zh" ? `隨機${unit}` : `Random ${unitWord(work, "en")}`}
        </button>
        <div className={styles.list}>
          {work.chapters.map((ch) => {
            const active = ch.id === currentId;
            return (
              <button
                key={ch.id}
                ref={active ? itemRef : null}
                className={`${styles.item} ${active ? styles.itemActive : ""}`}
                onClick={() => onSelect(ch.id)}
                aria-current={active ? "true" : undefined}
              >
                <span className={styles.itemNum}>{ch.label ?? ch.id}</span>
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
          })}
        </div>
      </div>
    </div>
  );
}
