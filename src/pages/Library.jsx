import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";
import { getWorksByTradition } from "../data/works";
import useProgress from "../hooks/useProgress";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { unitCountLabel, unitWord } from "../utils/unitLabel";
import AppShell from "../components/AppShell";
import Button from "../components/Button";
import HeaderHomeLink from "../components/HeaderHomeLink";
import styles from "./Library.module.css";

const TRADITION_LABELS = {
  confucian: { zh: "儒家經典", en: "Confucian Texts" },
  buddhist: { zh: "釋家經典", en: "Buddhist Texts" },
  taoist: { zh: "道家經典", en: "Taoist Texts" }
};

export default function Library() {
  const navigate = useNavigate();
  const { tradition } = useParams();
  const { language } = useSettings();
  const { getEntry } = useProgress();

  const valid = Boolean(TRADITION_LABELS[tradition]);
  const label = valid ? TRADITION_LABELS[tradition] : null;
  useDocumentTitle(label ? label[language] : language === "zh" ? "選擇經典" : "Library");

  useEffect(() => {
    if (!valid) navigate("/traditions", { replace: true });
  }, [valid, navigate]);

  const filteredWorks = valid ? getWorksByTradition(tradition) : [];

  const startReading = (work) => {
    const entry = getEntry(work.id);
    const chapterId = entry.last || 1;
    navigate(`/reader/${work.id}/${chapterId}`);
  };

  const randomChapter = (work) => {
    const chapterId = Math.floor(Math.random() * work.chapters.length) + 1;
    navigate(`/reader/${work.id}/${chapterId}`);
  };

  if (!valid) return null;

  return (
    <AppShell
      header={
        <div className={styles.headerTop}>
          <HeaderHomeLink language={language} />
          <h2 className={styles.headerTitle}>{label[language]}</h2>
          <div style={{ width: "2.4em" }} />
        </div>
      }
    >
      <div className={styles.list}>
        {filteredWorks.map((work) => {
          const available = work.status === "available";
          const chapterCount = work.chapters?.length || work.chapterCount || 0;
          const entry = available ? getEntry(work.id) : { read: [] };
          const progressPct = available && chapterCount
            ? Math.round((entry.read.length / chapterCount) * 100)
            : 0;
          const unitPlural = unitWord(work, language, { plural: true });

          return (
            <div key={work.id} className={`${styles.card} ${!available ? styles.cardComing : ""}`}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{work.title[language]}</h3>
                <span className={styles.cardMeta}>
                  {unitCountLabel(work, language, chapterCount)}
                </span>
              </div>
              <div className={styles.cardAuthor}>
                {work.author[language]} · {work.era[language]}
              </div>
              <p className={styles.cardDesc}>{work.description[language]}</p>
              {work.attribution && (
                <p className={styles.cardAttribution}>
                  <span className={styles.cardAttributionLabel}>
                    {language === "zh" ? "出處" : "Source"}
                  </span>
                  {work.attribution[language]}
                </p>
              )}

              {available ? (
                <>
                  {entry.read.length > 0 && (
                    <>
                      <div className={styles.progressTrack}>
                        <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
                      </div>
                      <div className={styles.progressLabel}>
                        {language === "zh"
                          ? `已讀 ${entry.read.length} / ${chapterCount} ${unitPlural}`
                          : `${entry.read.length} / ${chapterCount} read`}
                      </div>
                    </>
                  )}
                  <div className={styles.cardActions}>
                    <Button variant="primary" size="sm" onClick={() => startReading(work)}>
                      {language === "zh" ? "開始閱讀" : "Start Reading"}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => randomChapter(work)}>
                      {language === "zh" ? `隨機${unitWord(work, "zh")}` : `Random ${unitWord(work, "en")}`}
                    </Button>
                  </div>
                </>
              ) : (
                <span className={styles.comingBadge}>
                  {language === "zh" ? "即將推出" : "Coming soon"}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
