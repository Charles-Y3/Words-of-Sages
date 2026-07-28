import React from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";
import works from "../data/works";
import useDocumentTitle from "../hooks/useDocumentTitle";
import AppShell from "../components/AppShell";
import TraditionEmblem from "../components/TraditionEmblem";
import HeaderHomeLink from "../components/HeaderHomeLink";
import styles from "./Traditions.module.css";

const TRADITIONS = [
  {
    id: "confucian",
    char: "儒",
    accent: "#a8793c",
    name: { zh: "儒家", en: "Confucianism" },
    desc: {
      zh: "修身、齊家、治國、平天下的入世智慧。",
      en: "Wisdom for self-cultivation and a well-ordered society."
    }
  },
  {
    id: "buddhist",
    char: "釋",
    accent: "#a8362a",
    name: { zh: "釋家", en: "Buddhism" },
    desc: {
      zh: "覺悟解脫、慈悲智慧的出世修行。",
      en: "Awakening, compassion, and the path beyond suffering."
    }
  },
  {
    id: "taoist",
    char: "道",
    accent: "#2c5c4a",
    name: { zh: "道家", en: "Taoism" },
    desc: {
      zh: "道法自然、清靜無為的處世哲學。",
      en: "Harmony with nature and the way of effortless action."
    }
  }
];

export default function Traditions() {
  const navigate = useNavigate();
  const { language } = useSettings();
  useDocumentTitle(language === "zh" ? "聖賢之門" : "Gateway of Sages");

  return (
    <AppShell
      header={
        <div className={styles.headerTop}>
          <HeaderHomeLink language={language} />
          <h2 className={styles.headerTitle}>{language === "zh" ? "聖賢之門" : "Gateway of Sages"}</h2>
          <div style={{ width: "2.4em" }} />
        </div>
      }
    >
      <p className={styles.intro}>
        {language === "zh"
          ? "儒、釋、道——三家思想，各有其道。"
          : "Confucianism, Buddhism, and Taoism — three paths of wisdom."}
      </p>

      <div className={styles.list}>
        {TRADITIONS.map((t) => {
          const count = works.filter((w) => w.tradition === t.id).length;
          return (
            <button
              key={t.id}
              className={styles.card}
              style={{ "--tradition-accent": t.accent }}
              onClick={() => navigate(`/library/${t.id}`)}
            >
              <TraditionEmblem tradition={t.id} char={t.char} size={72} />
              <div className={styles.cardBody}>
                <div className={styles.cardName}>{t.name[language]}</div>
                <div className={styles.cardSubname}>{language === "zh" ? t.name.en : t.name.zh}</div>
                <p className={styles.cardDesc}>{t.desc[language]}</p>
                <div className={styles.cardMeta}>
                  {language === "zh" ? `${count} 部經典` : `${count} works`}
                </div>
              </div>
              <span className={styles.chevron} aria-hidden="true">
                ▶
              </span>
            </button>
          );
        })}
      </div>
    </AppShell>
  );
}
