import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";
import { getWork } from "../data/works";
import useProgress from "../hooks/useProgress";
import useBookmarks from "../hooks/useBookmarks";
import useNotes from "../hooks/useNotes";
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
import { isValidBackup, applyBackup, readBackupFile } from "../utils/backup";
import {
  isFolderBackupSupported,
  isFolderBackupEnabled,
  getFolderName,
  enableFolderBackup,
  disableFolderBackup,
  exportSmart
} from "../utils/folderBackup";
import { shouldShowBackupReminder, snoozeBackupReminder } from "../utils/backupReminder";
import AppShell from "../components/AppShell";
import Button from "../components/Button";
import AppLogo from "../components/AppLogo";
import ConfirmDialog from "../components/ConfirmDialog";
import styles from "./Home.module.css";
import pkg from "../../package.json";

const RECENT_LIMIT = 3;

export default function Home() {
  const navigate = useNavigate();
  const { language, setLanguage, theme, setTheme } = useSettings();
  useDocumentTitle(language === "zh" ? "聖賢之言" : "Words of Sages");
  const { getRecentContinues } = useProgress();
  const recentContinues = getRecentContinues(RECENT_LIMIT)
    .map((cont) => ({ cont, work: getWork(cont.workId) }))
    .filter(({ work }) => work?.status === "available");
  const { bookmarks } = useBookmarks();
  const { notes } = useNotes();
  const hasBackupData = bookmarks.length > 0 || notes.some((n) => n.text?.trim());
  const [showBackupReminder, setShowBackupReminder] = useState(false);
  useEffect(() => {
    setShowBackupReminder(shouldShowBackupReminder(hasBackupData));
  }, [hasBackupData]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const settingsRef = useRef(null);
  const fileInputRef = useRef(null);
  const mainRef = useRef(null);
  const continueListRef = useRef(null);
  const [visibleContinueCount, setVisibleContinueCount] = useState(recentContinues.length);
  const [canInstallPrompt, setCanInstallPrompt] = useState(
    () => getDeferredInstallPrompt() !== null
  );
  const [appInstalled, setAppInstalled] = useState(() =>
    typeof window !== "undefined" ? isStandaloneDisplay() : false
  );
  const [offlineReady, setOfflineReady] = useState(() => getOfflineReady());
  const [importError, setImportError] = useState(null);
  const [pendingImport, setPendingImport] = useState(null);
  const [folderEnabled, setFolderEnabled] = useState(() => isFolderBackupEnabled());
  const [folderName, setFolderName] = useState(() => getFolderName());
  const [folderBusy, setFolderBusy] = useState(false);
  const [folderError, setFolderError] = useState(null);

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

  // Try showing the full recent list whenever there's reason to re-check
  // (data changes, language changes, resize/rotation) — the measurement
  // effect below then computes, in one pass, how many actually fit.
  const maxContinueCount = recentContinues.length;
  useEffect(() => {
    setVisibleContinueCount(maxContinueCount);
    const onResize = () => setVisibleContinueCount(maxContinueCount);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [maxContinueCount, language]);

  // Runs only right after a reset (visibleContinueCount === maxContinueCount,
  // i.e. everything is showing). Measures the overflow once, measures one
  // card's real height plus the list's gap (not an average — averaging
  // undercounts the gap that's actually recovered per card removed), and
  // solves directly for how many to drop. A single calculation, not an
  // iterative shrink loop, so it can't oscillate. Waits for web fonts so the
  // measurement isn't taken against fallback-font metrics. Always leaves at
  // least 1 card showing if there's any reading history — a short scroll
  // beats hiding "continue reading" entirely.
  useLayoutEffect(() => {
    if (visibleContinueCount !== maxContinueCount || maxContinueCount === 0) return;
    const mainEl = mainRef.current;
    const listEl = continueListRef.current;
    if (!mainEl || !listEl || !listEl.firstElementChild) return;

    const fit = () => {
      const overflow = mainEl.scrollHeight - mainEl.clientHeight;
      if (overflow <= 1) return;
      const cardHeight = listEl.firstElementChild.getBoundingClientRect().height;
      const gap = parseFloat(getComputedStyle(listEl).gap) || 0;
      const perCard = cardHeight + gap;
      if (!perCard) return;
      const maxRemovable = maxContinueCount - 1;
      const toRemove = Math.min(maxRemovable, Math.ceil(overflow / perCard));
      if (toRemove > 0) setVisibleContinueCount(maxContinueCount - toRemove);
    };

    if (document.fonts && document.fonts.status !== "loaded") {
      document.fonts.ready.then(fit);
    } else {
      fit();
    }
  }, [visibleContinueCount, maxContinueCount]);

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

  function handleImportClick() {
    setImportError(null);
    fileInputRef.current?.click();
  }

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      const parsed = await readBackupFile(file);
      if (!isValidBackup(parsed)) {
        setImportError(
          language === "zh"
            ? "無法讀取備份檔案，請確認檔案格式正確。"
            : "Couldn’t read that backup file — please check it’s a valid export."
        );
        return;
      }
      setImportError(null);
      setPendingImport(parsed);
    } catch {
      setImportError(
        language === "zh"
          ? "無法讀取備份檔案，請確認檔案格式正確。"
          : "Couldn’t read that backup file — please check it’s a valid export."
      );
    }
  }

  function confirmImport() {
    if (!pendingImport) return;
    applyBackup(pendingImport);
    setPendingImport(null);
    window.location.reload();
  }

  async function handleEnableFolderBackup() {
    setFolderError(null);
    setFolderBusy(true);
    try {
      const name = await enableFolderBackup();
      setFolderName(name);
      setFolderEnabled(true);
    } catch (err) {
      if (err?.name !== "AbortError") {
        setFolderError(
          language === "zh" ? "無法存取該資料夾，請再試一次。" : "Couldn’t access that folder — please try again."
        );
      }
    } finally {
      setFolderBusy(false);
    }
  }

  async function handleDisableFolderBackup() {
    await disableFolderBackup();
    setFolderEnabled(false);
    setFolderName("");
  }

  // Delegates the actual "what should Export do" decision to exportSmart()
  // (shared with the write-triggered nudge's Export button, so the two
  // can't drift apart) — this just reflects the outcome into local UI state.
  async function handleExportClick() {
    setFolderError(null);
    setFolderBusy(true);
    try {
      const result = await exportSmart();
      if (result.mode === "folder") {
        setFolderEnabled(true);
        setFolderName(result.folderName);
      }
      if (result.error) {
        setFolderError(
          language === "zh"
            ? "資料夾存取已失效，改為下載檔案。"
            : "Folder access is no longer available — downloading a file instead."
        );
      }
    } finally {
      setFolderBusy(false);
    }
  }

  const introText = {
    zh: "踏入古籍的永恆智慧之旅。以中文或英文閱讀、誦讀並思考神聖經典，可分章研讀或通讀全文，每一段皆有清晰的指引與解說。",
    en: "Journey through the timeless wisdom of ancient texts. Read, recite, and reflect on sacred scriptures in Chinese or English — study verse by verse or read continuously, with clarity and guidance."
  };

  return (
    <AppShell bodyRef={mainRef}>
      <div className={styles.page}>
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
              <button
                type="button"
                className={styles.moreToggle}
                aria-expanded={moreOpen}
                onClick={() => setMoreOpen((v) => !v)}
              >
                {language === "zh" ? "更多設定" : "More settings"}
                <span aria-hidden="true">{moreOpen ? "▴" : "▾"}</span>
              </button>

              {moreOpen && (
                <>
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

                  <div className={styles.settingsLabel}>
                    {language === "zh" ? "備份與還原" : "Backup & Restore"}
                  </div>
                  <p className={styles.settingsHint}>
                    {language === "zh"
                      ? "匯出收藏、筆記與進度，或還原之前的備份檔案。"
                      : "Export your bookmarks, notes, and progress, or restore from a previous backup."}
                  </p>
                  <div className={styles.settingsRow}>
                    <Button variant="ghost" size="sm" onClick={() => void handleExportClick()} disabled={folderBusy}>
                      {language === "zh" ? "匯出" : "Export"}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleImportClick}>
                      {language === "zh" ? "匯入" : "Import"}
                    </Button>
                  </div>
                  {importError && <p className={styles.settingsError}>{importError}</p>}

                  {isFolderBackupSupported() && (
                    <>
                      <div className={styles.settingsLabel}>
                        {language === "zh" ? "自動儲存到資料夾" : "Auto-save to folder"}
                      </div>
                      {folderEnabled ? (
                        <>
                          <p className={styles.settingsDone}>
                            {language === "zh"
                              ? `已啟用 — 儲存到「${folderName}」`
                              : `Enabled — saving to “${folderName}”`}
                          </p>
                          <p className={styles.settingsHint}>
                            {language === "zh"
                              ? "每次寫筆記或匯出時，會覆寫該資料夾中的同一個檔案，不會產生多個副本。"
                              : "Writing a note or exporting overwrites the same file in that folder — no duplicate copies."}
                          </p>
                          <Button variant="ghost" size="sm" onClick={() => void handleDisableFolderBackup()}>
                            {language === "zh" ? "停用" : "Disable"}
                          </Button>
                        </>
                      ) : (
                        <>
                          <p className={styles.settingsHint}>
                            {language === "zh"
                              ? "選擇一個裝置上的資料夾，之後筆記與匯出會自動覆寫儲存到那裡。"
                              : "Pick a folder on this device — notes and exports will auto-save there, overwriting the same file."}
                          </p>
                          <Button variant="ghost" size="sm" onClick={() => void handleEnableFolderBackup()} disabled={folderBusy}>
                            {language === "zh" ? "選擇資料夾" : "Choose folder"}
                          </Button>
                        </>
                      )}
                      {folderError && <p className={styles.settingsError}>{folderError}</p>}
                    </>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="application/json"
                    className={styles.hiddenFileInput}
                    onChange={(e) => void handleFileChange(e)}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {showBackupReminder && (
        <div className={styles.backupBanner}>
          <p className={styles.backupBannerText}>
            {language === "zh"
              ? "您已有一段時間沒有備份收藏與筆記了，資料仍只存在此裝置上。"
              : "It's been a while since you backed up your bookmarks and notes — they still only live on this device."}
          </p>
          <div className={styles.backupBannerActions}>
            <Button
              variant="gold"
              size="sm"
              onClick={() => {
                void handleExportClick();
                setShowBackupReminder(false);
              }}
            >
              {language === "zh" ? "立即備份" : "Back up now"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                snoozeBackupReminder();
                setShowBackupReminder(false);
              }}
            >
              {language === "zh" ? "稍後提醒" : "Remind me later"}
            </Button>
          </div>
        </div>
      )}

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

      {visibleContinueCount > 0 && (
        <div className={styles.continueSection}>
          <div className={styles.continueSectionLabel}>
            <span className={language === "zh" ? styles.stackVisible : styles.stackHidden}>繼續閱讀</span>
            <span className={language === "en" ? styles.stackVisible : styles.stackHidden}>Continue reading</span>
          </div>
          <div className={styles.continueList} ref={continueListRef}>
            {recentContinues.slice(0, visibleContinueCount).map(({ cont, work }) => (
              <div key={work.id} className={styles.continueCard}>
                <div className={styles.continueText}>
                  <div className={styles.continueTitle}>
                    <span className={language === "zh" ? styles.stackVisible : styles.stackHidden}>
                      {work.title.zh} · {passageRef(work, "zh", cont.chapterId, cont.viewMode)}
                    </span>
                    <span className={language === "en" ? styles.stackVisible : styles.stackHidden}>
                      {work.title.en} · {passageRef(work, "en", cont.chapterId, cont.viewMode)}
                    </span>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  className={styles.continueBtn}
                  onClick={() => navigate(readerHref(work.id, cont.chapterId, cont.viewMode))}
                >
                  {language === "zh" ? "繼續" : "Continue"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.actions}>
        <Button variant="primary" block onClick={() => navigate("/traditions")}>
          {language === "zh" ? "選擇經典" : "Browse the Library"}
        </Button>
      </div>

      <div className={styles.footerBlock}>
        <p className={styles.disclaimer}>
          {language === "zh"
            ? "本應用的原文校對、翻譯與解釋部分由工具輔助整理，僅供學習參考，內容可能存在疏漏或錯誤，請以原典及權威版本為準。"
            : "Original texts, translations, and explanations here are aided by tools and provided for study reference only. Content may contain errors — please consult original texts and authoritative editions for accuracy."}
        </p>
        <p className={styles.footerNote}>
          {language === "zh" ? `版本 v${pkg.version}` : `Version v${pkg.version}`}
        </p>
      </div>
      </div>

      <ConfirmDialog
        open={Boolean(pendingImport)}
        title={language === "zh" ? "還原備份？" : "Restore backup?"}
        message={
          language === "zh"
            ? "這將覆蓋目前裝置上的收藏、筆記、進度與設定，且無法復原。"
            : "This will overwrite your current bookmarks, notes, progress, and settings on this device. This cannot be undone."
        }
        confirmLabel={language === "zh" ? "還原" : "Restore"}
        cancelLabel={language === "zh" ? "取消" : "Cancel"}
        onConfirm={confirmImport}
        onCancel={() => setPendingImport(null)}
      />
    </AppShell>
  );
}
