import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";
import { getWork } from "../data/works";
import useBookmarks from "../hooks/useBookmarks";
import useNotes from "../hooks/useNotes";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { passageRef, readerHref } from "../utils/unitLabel";
import AppShell from "../components/AppShell";
import Button from "../components/Button";
import HeaderHomeLink from "../components/HeaderHomeLink";
import ConfirmDialog from "../components/ConfirmDialog";
import styles from "./Search.module.css";

export default function Bookmarks() {
  const navigate = useNavigate();
  const { language } = useSettings();
  useDocumentTitle(language === "zh" ? "收藏與筆記" : "Bookmarks and Notes");
  const { bookmarks, removeBookmark } = useBookmarks();
  const { notes, removeNote } = useNotes();
  const [tab, setTab] = useState("bookmarks");
  const [pending, setPending] = useState(null);

  const groupedBookmarks = useMemo(() => {
    const byWork = new Map();
    for (const b of bookmarks) {
      const work = getWork(b.workId);
      if (!work || work.status !== "available") continue;
      const chapter = work.chapters.find((c) => c.id === b.chapterId);
      if (!chapter) continue;
      if (!byWork.has(work.id)) byWork.set(work.id, { work, items: [] });
      byWork.get(work.id).items.push({
        chapter,
        viewMode: b.viewMode === "continuous" ? "continuous" : "study",
        addedAt: b.addedAt
      });
    }
    for (const group of byWork.values()) {
      group.items.sort((a, b) => a.chapter.id - b.chapter.id);
    }
    return Array.from(byWork.values());
  }, [bookmarks]);

  const groupedNotes = useMemo(() => {
    const byWork = new Map();
    for (const n of notes) {
      if (!n.text?.trim()) continue;
      const work = getWork(n.workId);
      if (!work || work.status !== "available") continue;
      const chapter = work.chapters.find((c) => c.id === n.chapterId);
      if (!chapter) continue;
      if (!byWork.has(work.id)) byWork.set(work.id, { work, items: [] });
      byWork.get(work.id).items.push({
        chapter,
        text: n.text,
        viewMode: n.viewMode === "continuous" ? "continuous" : "study",
        updatedAt: n.updatedAt
      });
    }
    for (const group of byWork.values()) {
      group.items.sort((a, b) => a.chapter.id - b.chapter.id);
    }
    return Array.from(byWork.values());
  }, [notes]);

  const bookmarkCount = bookmarks.length;
  const noteCount = notes.filter((n) => n.text?.trim()).length;

  const confirmPending = () => {
    if (!pending) return;
    if (pending.type === "bookmark") removeBookmark(pending.workId, pending.chapterId);
    else removeNote(pending.workId, pending.chapterId);
    setPending(null);
  };

  return (
    <AppShell
      header={
        <div className={styles.headerTop}>
          <HeaderHomeLink language={language} />
          <h2 className={styles.headerTitle}>
            {language === "zh" ? "收藏與筆記" : "Bookmarks and Notes"}
          </h2>
          <div style={{ width: "2.4em" }} />
        </div>
      }
    >
      <div className={styles.pageTabs} role="tablist" aria-label={language === "zh" ? "收藏與筆記" : "Bookmarks and Notes"}>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "bookmarks"}
          className={`${styles.pageTab} ${tab === "bookmarks" ? styles.pageTabActive : ""}`}
          onClick={() => setTab("bookmarks")}
        >
          {language === "zh" ? `收藏 (${bookmarkCount})` : `Bookmarks (${bookmarkCount})`}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "notes"}
          className={`${styles.pageTab} ${tab === "notes" ? styles.pageTabActive : ""}`}
          onClick={() => setTab("notes")}
        >
          {language === "zh" ? `筆記 (${noteCount})` : `Notes (${noteCount})`}
        </button>
      </div>

      {tab === "bookmarks" && (
        <>
          {groupedBookmarks.length === 0 ? (
            <p className={styles.empty}>
              {language === "zh" ? "尚無收藏" : "No bookmarks yet"}
            </p>
          ) : (
            groupedBookmarks.map(({ work, items }) => (
              <div key={work.id} className={styles.group}>
                <h3 className={styles.groupTitle}>{work.title[language]}</h3>
                <div className={styles.results}>
                  {items.map(({ chapter, viewMode }) => (
                    <div key={chapter.id} className={styles.resultRow}>
                      <button
                        className={styles.resultLink}
                        onClick={() => navigate(readerHref(work.id, chapter.id, viewMode))}
                      >
                        <div className={styles.resultHead}>
                          {passageRef(work, language, chapter.id, viewMode)}
                        </div>
                        <div className={styles.resultSnippet} lang={language === "zh" ? "zh-Hant" : "en"}>
                          {chapter.text[language].split("\n")[0].slice(0, 60)}
                        </div>
                      </button>
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-label={language === "zh" ? "移除收藏" : "Remove bookmark"}
                        onClick={() =>
                          setPending({ type: "bookmark", workId: work.id, chapterId: chapter.id })
                        }
                      >
                        {language === "zh" ? "移除" : "Remove"}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </>
      )}

      {tab === "notes" && (
        <>
          {groupedNotes.length === 0 ? (
            <p className={styles.empty}>
              {language === "zh" ? "尚無筆記" : "No notes yet"}
            </p>
          ) : (
            groupedNotes.map(({ work, items }) => (
              <div key={work.id} className={styles.group}>
                <h3 className={styles.groupTitle}>{work.title[language]}</h3>
                <div className={styles.results}>
                  {items.map(({ chapter, text, viewMode }) => (
                    <div key={chapter.id} className={styles.resultRow}>
                      <button
                        className={styles.resultLink}
                        onClick={() => navigate(readerHref(work.id, chapter.id, viewMode))}
                      >
                        <div className={styles.resultHead}>
                          {passageRef(work, language, chapter.id, viewMode)}
                        </div>
                        <div className={styles.resultSnippet} lang={language === "zh" ? "zh-Hant" : "en"}>
                          {text.length > 120 ? `${text.slice(0, 120)}…` : text}
                        </div>
                      </button>
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-label={language === "zh" ? "刪除筆記" : "Delete note"}
                        onClick={() =>
                          setPending({ type: "note", workId: work.id, chapterId: chapter.id })
                        }
                      >
                        {language === "zh" ? "刪除" : "Delete"}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </>
      )}

      <ConfirmDialog
        open={Boolean(pending)}
        title={
          pending?.type === "note"
            ? language === "zh"
              ? "刪除筆記？"
              : "Delete note?"
            : language === "zh"
              ? "移除收藏？"
              : "Remove bookmark?"
        }
        message={
          pending?.type === "note"
            ? language === "zh"
              ? "這則筆記將被永久刪除，無法復原。"
              : "This note will be permanently deleted."
            : language === "zh"
              ? "確定要移除此收藏嗎？"
              : "Are you sure you want to remove this bookmark?"
        }
        confirmLabel={
          pending?.type === "note"
            ? language === "zh"
              ? "刪除"
              : "Delete"
            : language === "zh"
              ? "移除"
              : "Remove"
        }
        cancelLabel={language === "zh" ? "取消" : "Cancel"}
        onConfirm={confirmPending}
        onCancel={() => setPending(null)}
      />
    </AppShell>
  );
}
