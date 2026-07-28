import React, { useEffect, useMemo, useRef } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { getWork } from "../data/works";
import { useSettings, FONT_SCALES } from "../context/SettingsContext";
import useSpeech from "../hooks/useSpeech";
import useSwipe from "../hooks/useSwipe";
import useProgress from "../hooks/useProgress";
import useBookmarks from "../hooks/useBookmarks";
import useNotes from "../hooks/useNotes";
import { sanitizeHtml } from "../utils/sanitize";
import { unitWord, unitProgress, unitName } from "../utils/unitLabel";
import AppShell from "../components/AppShell";
import Button from "../components/Button";
import ChapterDrawer from "../components/ChapterDrawer";
import HeaderHomeLink from "../components/HeaderHomeLink";
import styles from "../components/Reader.module.css";

export default function Reader() {
  const { workId, chapterId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { language, fontStep, incrementFontStep, decrementFontStep } = useSettings();
  const { markRead, getEntry } = useProgress();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { notes, getNote, hasNote, setNote } = useNotes();
  const speech = useSpeech(language);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [noteOpen, setNoteOpen] = React.useState(false);
  const continuousRefs = useRef(new Map());

  const viewMode = searchParams.get("view") === "continuous" ? "continuous" : "study";
  const setViewMode = (mode) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (mode === "continuous") next.set("view", "continuous");
        else next.delete("view");
        return next;
      },
      { replace: true }
    );
  };

  const work = getWork(workId);
  const chapterNum = parseInt(chapterId, 10);
  const chapter =
    work && work.status === "available" ? work.chapters.find((c) => c.id === chapterNum) : null;
  const valid = Boolean(work && work.status === "available" && chapter);

  const total = work?.chapters.length ?? 0;
  const libraryPath = work ? `/library/${work.tradition}` : "/traditions";
  const unit = work ? unitWord(work, language) : "";

  const speechModeLabel = {
    once: { zh: "讀一次", en: "Once" },
    loop: { zh: `本${unit}循環`, en: "Loop" },
    continuous: { zh: "連續朗讀", en: "Continuous" }
  };

  const readerPath = (id, mode = viewMode) => {
    const base = `/reader/${workId}/${id}`;
    return mode === "continuous" ? `${base}?view=continuous` : base;
  };

  const goToChapter = (id, mode = viewMode) => {
    if (!work) return;
    let n = id;
    if (n < 1) n = total;
    if (n > total) n = 1;
    navigate(readerPath(n, mode));
  };
  const goPrev = () => goToChapter(chapterNum - 1);
  const goNext = () => goToChapter(chapterNum + 1);
  const goRandom = () => goToChapter(Math.floor(Math.random() * total) + 1);

  const advanceForSpeech = () => {
    if (chapterNum + 1 > total) return false;
    navigate(readerPath(chapterNum + 1));
    return true;
  };

  const swipeHandlers = useSwipe(
    viewMode === "study" ? { onSwipeLeft: goNext, onSwipeRight: goPrev } : {}
  );

  useEffect(() => {
    if (!valid) {
      const t = setTimeout(() => navigate(libraryPath, { replace: true }), 1200);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [valid, navigate, libraryPath]);

  useEffect(() => {
    if (chapter) markRead(workId, chapter.id, viewMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workId, chapter?.id, viewMode]);

  useEffect(() => {
    if (work && chapter) {
      document.title = `${work.title[language]} · ${unitName(work, language, chapter.id)} — Words of Sages`;
    }
  }, [work, chapter, language]);

  useEffect(() => {
    setNoteOpen(false);
  }, [workId, chapterId]);

  useEffect(() => {
    const onKey = (e) => {
      if (drawerOpen || noteOpen || viewMode === "continuous") return;
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "/") {
        e.preventDefault();
        navigate("/search");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterNum, total, drawerOpen, noteOpen, viewMode]);

  useEffect(() => {
    if (!speech.isSpeaking || !chapter) return;
    const advance = viewMode === "continuous" || speech.mode === "continuous";
    if (advance) {
      speech.speak(chapter.text[language], { onEnd: advanceForSpeech });
    } else if (speech.mode === "loop") {
      speech.speak(chapter.text[language]);
    } else {
      speech.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterId]);

  useEffect(() => {
    if (speech.isSpeaking && chapter) {
      const advance = viewMode === "continuous" || speech.mode === "continuous";
      speech.speak(chapter.text[language], advance ? { onEnd: advanceForSpeech } : undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    if (viewMode !== "continuous" || !chapter) return;
    const el = continuousRefs.current.get(chapter.id);
    el?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [viewMode, chapter?.id]);

  const [activePanel, setActivePanel] = React.useState("text");
  const [speechMenuOpen, setSpeechMenuOpen] = React.useState(false);
  const [fontMenuOpen, setFontMenuOpen] = React.useState(false);
  const [headerHidden, setHeaderHidden] = React.useState(false);
  const speechControlsRef = React.useRef(null);
  const fontControlsRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const lastScrollTop = React.useRef(0);

  useEffect(() => {
    if (!speechMenuOpen) return undefined;
    const onDocClick = (e) => {
      if (speechControlsRef.current && !speechControlsRef.current.contains(e.target)) {
        setSpeechMenuOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setSpeechMenuOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [speechMenuOpen]);

  useEffect(() => {
    if (!fontMenuOpen) return undefined;
    const onDocClick = (e) => {
      if (fontControlsRef.current && !fontControlsRef.current.contains(e.target)) {
        setFontMenuOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setFontMenuOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [fontMenuOpen]);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return undefined;
    lastScrollTop.current = el.scrollTop;
    const onScroll = () => {
      const top = el.scrollTop;
      const delta = top - lastScrollTop.current;
      if (top < 24) {
        setHeaderHidden(false);
      } else if (delta > 8) {
        setHeaderHidden(true);
        setFontMenuOpen(false);
        setSpeechMenuOpen(false);
      } else if (delta < -8) {
        setHeaderHidden(false);
      }
      lastScrollTop.current = top;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [workId, chapter?.id, viewMode]);

  const readIds = useMemo(() => new Set(getEntry(workId).read), [getEntry, workId]);
  const notedIds = useMemo(() => {
    return new Set(
      notes.filter((n) => n.workId === workId && n.text.trim()).map((n) => n.chapterId)
    );
  }, [notes, workId]);

  const applicationHtml = chapter ? sanitizeHtml(chapter.application[language]) : "";
  const starred = chapter ? isBookmarked(workId, chapter.id) : false;
  const noteText = chapter ? getNote(workId, chapter.id) : "";
  const notePresent = chapter ? hasNote(workId, chapter.id) : false;

  const textLines = useMemo(() => {
    if (!chapter) return [];
    const parts = chapter.text[language].split("\n");
    let pos = 0;
    return parts.map((line) => {
      const start = pos;
      const end = start + line.length;
      pos = end + 1;
      return { line, start, end };
    });
  }, [chapter, language]);

  const activeLineIndex = useMemo(() => {
    if (!speech.isSpeaking || activePanel !== "text" || speech.boundaryIndex == null) return -1;
    const idx = speech.boundaryIndex;
    return textLines.findIndex((l) => idx >= l.start && idx <= l.end);
  }, [speech.isSpeaking, speech.boundaryIndex, activePanel, textLines]);

  const togglePlay = () => {
    if (!chapter) return;
    if (speech.isSpeaking) {
      speech.stop();
    } else {
      const advance = viewMode === "continuous" || speech.mode === "continuous";
      speech.speak(chapter.text[language], advance ? { onEnd: advanceForSpeech } : undefined);
    }
  };

  if (!valid) {
    return (
      <AppShell>
        <div className={styles.notFound}>
          <h2>{language === "zh" ? `找不到這一${unit || "章"}` : "Passage not found"}</h2>
          <p>
            {language === "zh"
              ? "即將返回經典選單…"
              : "Returning to the library…"}
          </p>
          <Button variant="primary" onClick={() => navigate(libraryPath, { replace: true })}>
            {language === "zh" ? "返回選單" : "Back to library"}
          </Button>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell
      compactHeader
      compactBody
      headerHidden={headerHidden}
      bodyRef={bodyRef}
      header={
        <div className={styles.headerTop}>
          <div className={styles.headerRowMain}>
            <HeaderHomeLink language={language} size={32} />
            <h2 className={styles.workTitle} title={work.title[language]}>
              {work.title[language]}
            </h2>
          </div>

          <div className={styles.headerRowMeta}>
            <div className={styles.headerMetaLeft}>
              <div
                className={styles.modeToggle}
                role="tablist"
                aria-label={language === "zh" ? "閱讀模式" : "Reading mode"}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={viewMode === "study"}
                  className={`${styles.modeBtn} ${viewMode === "study" ? styles.modeBtnActive : ""}`}
                  onClick={() => setViewMode("study")}
                >
                  {language === "zh" ? "研讀" : "Study"}
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={viewMode === "continuous"}
                  className={`${styles.modeBtn} ${viewMode === "continuous" ? styles.modeBtnActive : ""}`}
                  onClick={() => setViewMode("continuous")}
                >
                  {language === "zh" ? "通讀" : "Full"}
                </button>
              </div>
            </div>
            <div className={styles.chapterLabel}>
              {unitProgress(work, language, chapter.id, total)}
            </div>
            <div className={styles.headerActions}>
              <Button
                variant="ghost"
                size="sm"
                icon
                className={notePresent || noteOpen ? styles.noteActive : ""}
                aria-pressed={noteOpen}
                aria-label={language === "zh" ? "筆記" : "Notes"}
                onClick={() => setNoteOpen((v) => !v)}
              >
                ✎
              </Button>
              <Button
                variant="ghost"
                size="sm"
                icon
                className={starred ? styles.starActive : ""}
                aria-pressed={starred}
                aria-label={
                  language === "zh" ? `收藏此${unit}` : `Bookmark this ${unitWord(work, "en").toLowerCase()}`
                }
                onClick={() => toggleBookmark(workId, chapter.id, viewMode)}
              >
                {starred ? "★" : "☆"}
              </Button>
              <div className={styles.fontSettings} ref={fontControlsRef}>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label={language === "zh" ? "字體大小" : "Font size"}
                  aria-expanded={fontMenuOpen}
                  onClick={() => setFontMenuOpen((v) => !v)}
                >
                  Aa
                </Button>
                {fontMenuOpen && (
                  <div className={styles.popoverDown} role="menu">
                    <Button
                      variant="ghost"
                      size="sm"
                      block
                      disabled={fontStep === 0}
                      onClick={decrementFontStep}
                    >
                      A−
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      block
                      disabled={fontStep === FONT_SCALES.length - 1}
                      onClick={incrementFontStep}
                    >
                      A+
                    </Button>
                  </div>
                )}
              </div>
              <Button
                variant="ghost"
                icon
                size="sm"
                aria-label={language === "zh" ? "開啟目錄" : "Open table of contents"}
                onClick={() => setDrawerOpen(true)}
              >
                ☰
              </Button>
            </div>
          </div>
        </div>
      }
      footer={
        <div className={styles.footerRow}>
          <Button
            variant="ghost"
            size="sm"
            className={styles.navEdge}
            onClick={goPrev}
            aria-label={language === "zh" ? `上一${unit}` : `Previous ${unitWord(work, "en").toLowerCase()}`}
          >
            ◀
          </Button>

          <div className={styles.footerMiddle}>
            {speech.supported ? (
              <Button
                variant="primary"
                size="sm"
                className={styles.equalButton}
                onClick={togglePlay}
              >
                {speech.isSpeaking
                  ? language === "zh"
                    ? "停止"
                    : "Stop"
                  : language === "zh"
                  ? "朗讀"
                  : "Read aloud"}
              </Button>
            ) : (
              <span className={`${styles.notice} ${styles.equalButton}`}>
                {language === "zh" ? "不支援朗讀" : "Speech unsupported"}
              </span>
            )}

            {speech.supported && (
              <div className={styles.speechSettings} ref={speechControlsRef}>
                <Button
                  variant="ghost"
                  size="sm"
                  icon
                  aria-label={language === "zh" ? "朗讀設定" : "Speech settings"}
                  aria-expanded={speechMenuOpen}
                  onClick={() => setSpeechMenuOpen((v) => !v)}
                >
                  ⋯
                </Button>
                {speechMenuOpen && (
                  <div className={styles.popover}>
                    <span className={styles.popoverLabel}>
                      {language === "zh" ? "朗讀模式" : "Playback mode"}
                    </span>
                    <Button variant="ghost" size="sm" block onClick={speech.cycleMode}>
                      {speechModeLabel[speech.mode][language]}
                    </Button>
                    <span className={styles.popoverLabel}>{language === "zh" ? "語速" : "Speed"}</span>
                    <Button variant="ghost" size="sm" block onClick={speech.cycleRate}>
                      {speech.rate}x
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className={styles.navEdge}
            onClick={goNext}
            aria-label={language === "zh" ? `下一${unit}` : `Next ${unitWord(work, "en").toLowerCase()}`}
          >
            ▶
          </Button>
        </div>
      }
    >
      <div {...swipeHandlers}>
        {work.attribution && (
          <details className={styles.attribution}>
            <summary>{language === "zh" ? "出處" : "Source"}</summary>
            <p>{work.attribution[language]}</p>
          </details>
        )}

        {noteOpen && (
          <div className={styles.notePanel}>
            <div className={styles.noteHead}>
              <span className={styles.noteLabel}>
                {language === "zh" ? "我的筆記" : "My note"}
              </span>
              <Button variant="ghost" size="sm" onClick={() => setNoteOpen(false)}>
                {language === "zh" ? "收起" : "Close"}
              </Button>
            </div>
            <textarea
              className={styles.noteInput}
              value={noteText}
              onChange={(e) => setNote(workId, chapter.id, e.target.value, viewMode)}
              rows={4}
              placeholder={
                language === "zh"
                  ? "寫下你對這一段的感想…"
                  : "Write your reflection on this passage…"
              }
              aria-label={language === "zh" ? "筆記內容" : "Note text"}
            />
          </div>
        )}

        {viewMode === "study" && (
          <>
            <div className={styles.contentTabs} role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activePanel === "text"}
                className={`${styles.tab} ${activePanel === "text" ? styles.tabActive : ""}`}
                onClick={() => setActivePanel("text")}
              >
                {language === "zh" ? "原文" : "Original"}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activePanel === "plain"}
                className={`${styles.tab} ${activePanel === "plain" ? styles.tabActive : ""}`}
                onClick={() => setActivePanel("plain")}
              >
                {language === "zh" ? "淺白解釋" : "Explanation"}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activePanel === "application"}
                className={`${styles.tab} ${activePanel === "application" ? styles.tabActive : ""}`}
                onClick={() => setActivePanel("application")}
              >
                {language === "zh" ? "應用" : "Application"}
              </button>
            </div>

            {activePanel === "text" && (
              <div
                className={`${styles.contentBox} ${styles.contentText}`}
                lang={language === "zh" ? "zh-Hant" : "en"}
              >
                {textLines.map((l, i) => (
                  <div key={i} className={i === activeLineIndex ? styles.verseLineActive : styles.verseLine}>
                    {l.line || " "}
                  </div>
                ))}
              </div>
            )}

            {activePanel === "plain" && (
              <div
                className={`${styles.contentBox} ${styles.contentText}`}
                lang={language === "zh" ? "zh-Hant" : "en"}
              >
                {chapter.plain[language]}
              </div>
            )}

            {activePanel === "application" && (
              <div
                className={`${styles.contentBox} ${styles.contentText}`}
                lang={language === "zh" ? "zh-Hant" : "en"}
                dangerouslySetInnerHTML={{ __html: applicationHtml }}
              />
            )}
          </>
        )}

        {viewMode === "continuous" && (
          <div
            className={`${styles.contentBox} ${styles.continuousList}`}
            lang={language === "zh" ? "zh-Hant" : "en"}
          >
            {work.chapters.map((ch) => {
              const active = ch.id === chapter.id;
              return (
                <section
                  key={ch.id}
                  id={`unit-${ch.id}`}
                  ref={(el) => {
                    if (el) continuousRefs.current.set(ch.id, el);
                    else continuousRefs.current.delete(ch.id);
                  }}
                  className={`${styles.continuousUnit} ${active ? styles.continuousUnitActive : ""}`}
                >
                  <div className={styles.continuousHead}>
                    <button
                      type="button"
                      className={styles.continuousNum}
                      onClick={() => goToChapter(ch.id, "continuous")}
                      aria-current={active ? "true" : undefined}
                    >
                      {ch.id}
                    </button>
                    <button
                      type="button"
                      className={styles.continuousStudy}
                      onClick={() => goToChapter(ch.id, "study")}
                    >
                      {language === "zh" ? "研讀" : "Study"}
                    </button>
                  </div>
                  <div className={styles.continuousText}>{ch.text[language]}</div>
                </section>
              );
            })}
          </div>
        )}
      </div>

      {drawerOpen && (
        <ChapterDrawer
          work={work}
          language={language}
          currentId={chapter.id}
          readIds={readIds}
          notedIds={notedIds}
          onSelect={(id) => {
            setDrawerOpen(false);
            goToChapter(id);
          }}
          onClose={() => setDrawerOpen(false)}
          onRandom={() => {
            setDrawerOpen(false);
            goRandom();
          }}
        />
      )}
    </AppShell>
  );
}
