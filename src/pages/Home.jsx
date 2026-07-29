import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";
import { getWork } from "../data/works";
import useProgress from "../hooks/useProgress";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { passageRef, readerHref } from "../utils/unitLabel";
import {
  getDeferredInstallPrompt,
  installGuideKind,
  isStandaloneDisplay,
  promptPwaInstall,
  subscribePwaInstall
} from "../utils/pwaInstall";
import { getOfflineReady, subscribeOfflineReady } from "../utils/offlineReady";
import AppShell from "../components/AppShell";
import Button from "../components/Button";
import AppLogo from "../components/AppLogo";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const { language, setLanguage, theme, setTheme } = useSettings();
  useDocumentTitle(language === "zh" ? "聖賢之言" : "Words of Sages");
  const { getContinue } = useProgress();
  const cont = getContinue();
  const continueCandidate = cont ? getWork(cont.workId) : null;
  const continueWork =
    continueCandidate?.status === "available" ? continueCandidate : null;
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef(null);
  const [canInstallPrompt, setCanInstallPrompt] = useState(
    () => getDeferredInstallPrompt() !== null
  );
  const [appInstalled, setAppInstalled] = useState(() =>
    typeof window !== "undefined" ? isStandaloneDisplay() : false
  );
  const [offlineReady, setOfflineReady] = useState(() => getOfflineReady());

  useEffect(() => {
    if (!settingsOpen) return undefined;
    const onDoc = (e) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setSettingsOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setSettingsOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [settingsOpen]);

  useEffect(() => {
    return subscribePwaInstall(() => {
      setCanInstallPrompt(getDeferredInstallPrompt() !== null);
      setAppInstalled(isStandaloneDisplay());
    });
  }, []);

  useEffect(() => subscribeOfflineReady(setOfflineReady), []);

  const installGuide = (() => {
    const kind = installGuideKind();
    if (kind === "ios") {
      return language === "zh"
        ? "在 iPhone 或 iPad：用 Safari 開啟本頁，點「分享」，再選擇「加入主畫面」。之後可從主畫面像 App 一樣開啟。"
        : "On iPhone or iPad: open this page in Safari, tap Share, then “Add to Home Screen”. Open it from your home screen like an app.";
    }
    if (kind === "android") {
      return language === "zh"
        ? "在 Android：打開瀏覽器選單（⋮），再點「安裝應用程式」或「加到主畫面」。Chrome 與 Edge 效果最好。"
        : "On Android: open the browser menu (⋮), then tap “Install app” or “Add to Home screen”. Chrome and Edge work best.";
    }
    return language === "zh"
      ? "在電腦上：打開瀏覽器選單，選擇「安裝應用程式」或「安裝」。Mac 上的 Safari 可用「檔案」→「加入 Dock」。"
      : "On a computer: open your browser menu and choose “Install app” or “Install”. In Safari on Mac, use File → Add to Dock.";
  })();

  async function handleInstallApp() {
    if (appInstalled) return;
    const outcome = await promptPwaInstall();
    if (outcome === "accepted") setAppInstalled(true);
    setCanInstallPrompt(getDeferredInstallPrompt() !== null);
  }

  const introText = {
    zh: "踏入古籍的永恆智慧之旅。以你偏好的語言閱讀、誦讀並思考神聖經典，可分章研讀或通讀全文，每一段皆有清晰的指引與解說。",
    en: "Journey through the timeless wisdom of ancient texts. Read, recite, and reflect on sacred scriptures in your preferred language — study verse by verse or read continuously, with clarity and guidance."
  };

  return (
    <AppShell>
      <div className={styles.topBar}>
        <button
          type="button"
          className={styles.topLink}
          onClick={() => navigate("/search")}
        >
          {language === "zh" ? "搜尋" : "Search"}
        </button>
        <button
          type="button"
          className={styles.topLink}
          onClick={() => navigate("/bookmarks")}
        >
          {language === "zh" ? "收藏與筆記" : "Bookmarks"}
        </button>
        <div className={styles.settingsWrap} ref={settingsRef}>
          <button
            type="button"
            className={styles.topLink}
            aria-expanded={settingsOpen}
            aria-haspopup="dialog"
            onClick={() => setSettingsOpen((v) => !v)}
          >
            {language === "zh" ? "設定" : "Settings"}
          </button>
          {settingsOpen && (
            <div className={styles.settingsPopover} role="dialog" aria-label={language === "zh" ? "設定" : "Settings"}>
              <div className={styles.settingsLabel}>
                {language === "zh" ? "語言" : "Language"}
              </div>
              <div className={styles.settingsRow}>
                <Button
                  variant={language === "zh" ? "gold" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("zh")}
                  aria-pressed={language === "zh"}
                >
                  中文
                </Button>
                <Button
                  variant={language === "en" ? "gold" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("en")}
                  aria-pressed={language === "en"}
                >
                  English
                </Button>
              </div>
              <div className={styles.settingsLabel}>
                {language === "zh" ? "主題" : "Theme"}
              </div>
              <div className={styles.settingsRow}>
                <Button
                  variant={theme === "light" ? "gold" : "ghost"}
                  size="sm"
                  onClick={() => setTheme("light")}
                  aria-pressed={theme === "light"}
                >
                  {language === "zh" ? "日間" : "Light"}
                </Button>
                <Button
                  variant={theme === "sepia" ? "gold" : "ghost"}
                  size="sm"
                  onClick={() => setTheme("sepia")}
                  aria-pressed={theme === "sepia"}
                >
                  {language === "zh" ? "復古" : "Sepia"}
                </Button>
                <Button
                  variant={theme === "dark" ? "gold" : "ghost"}
                  size="sm"
                  onClick={() => setTheme("dark")}
                  aria-pressed={theme === "dark"}
                >
                  {language === "zh" ? "夜間" : "Dark"}
                </Button>
              </div>
              <div className={styles.settingsLabel}>
                {language === "zh" ? "安裝應用" : "Install app"}
              </div>
              <p className={styles.settingsHint}>
                {language === "zh"
                  ? "加到主畫面，離線也能閱讀，介面更專注。"
                  : "Add to your home screen for offline reading and a quieter focus."}
              </p>
              {appInstalled ? (
                <p className={styles.settingsDone}>
                  {language === "zh" ? "已安裝到此裝置" : "Installed on this device"}
                </p>
              ) : canInstallPrompt ? (
                <>
                  <Button variant="primary" size="sm" block onClick={() => void handleInstallApp()}>
                    {language === "zh" ? "安裝應用" : "Install app"}
                  </Button>
                  <p className={styles.settingsHint}>
                    {language === "zh"
                      ? "也可在瀏覽器選單中選擇「安裝」或「加入主畫面」。"
                      : "Or use your browser’s Install / Add to Home Screen option."}
                  </p>
                </>
              ) : (
                <p className={styles.settingsHint}>{installGuide}</p>
              )}
              <div className={styles.settingsLabel}>
                {language === "zh" ? "離線狀態" : "Offline status"}
              </div>
              {offlineReady ? (
                <p className={styles.settingsDone}>
                  {language === "zh" ? "離線可用" : "Ready for offline use"}
                </p>
              ) : (
                <p className={styles.settingsHint}>
                  {language === "zh"
                    ? "請連網開啟一次以完成下載"
                    : "Open once online to finish downloading"}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <header className={styles.hero}>
        <div className={styles.titleRow}>
          <AppLogo size={72} className={styles.heroLogo} />
          <h1 className={styles.title}>
            <span className={language === "zh" ? styles.stackVisible : styles.stackHidden}>聖賢之言</span>
            <span className={language === "en" ? styles.stackVisible : styles.stackHidden}>Words of Sages</span>
          </h1>
          <div className={styles.titleSpacer} aria-hidden="true" />
        </div>
        <p className={styles.subtitle}>
          <span className={language === "en" ? styles.stackVisible : styles.stackHidden}>聖賢之言</span>
          <span className={language === "zh" ? styles.stackVisible : styles.stackHidden}>Words of Sages</span>
        </p>
      </header>

      <div className={styles.rule} />

      <p className={styles.intro}>
        <span className={language === "zh" ? styles.stackVisible : styles.stackHidden}>{introText.zh}</span>
        <span className={language === "en" ? styles.stackVisible : styles.stackHidden}>{introText.en}</span>
      </p>

      {continueWork && (
        <div className={styles.continueCard}>
          <div className={styles.continueText}>
            <div className={styles.continueLabel}>
              <span className={language === "zh" ? styles.stackVisible : styles.stackHidden}>繼續閱讀</span>
              <span className={language === "en" ? styles.stackVisible : styles.stackHidden}>Continue reading</span>
            </div>
            <div className={styles.continueTitle}>
              <span className={language === "zh" ? styles.stackVisible : styles.stackHidden}>
                {continueWork.title.zh} · {passageRef(continueWork, "zh", cont.chapterId, cont.viewMode)}
              </span>
              <span className={language === "en" ? styles.stackVisible : styles.stackHidden}>
                {continueWork.title.en} · {passageRef(continueWork, "en", cont.chapterId, cont.viewMode)}
              </span>
            </div>
          </div>
          <Button
            variant="primary"
            size="sm"
            className={styles.continueBtn}
            onClick={() => navigate(readerHref(cont.workId, cont.chapterId, cont.viewMode))}
          >
            {language === "zh" ? "繼續" : "Continue"}
          </Button>
        </div>
      )}

      <div className={styles.actions}>
        <Button variant="primary" block onClick={() => navigate("/traditions")}>
          {language === "zh" ? "選擇經典" : "Browse the Library"}
        </Button>
      </div>
    </AppShell>
  );
}
