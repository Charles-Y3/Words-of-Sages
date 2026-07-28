import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";
import { search, groupResults, makeSnippet } from "../utils/search";
import { unitName } from "../utils/unitLabel";
import useDocumentTitle from "../hooks/useDocumentTitle";
import AppShell from "../components/AppShell";
import HeaderHomeLink from "../components/HeaderHomeLink";
import styles from "./Search.module.css";

function highlight(snippet, query) {
  const idx = snippet.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return snippet;
  return (
    <>
      {snippet.slice(0, idx)}
      <mark>{snippet.slice(idx, idx + query.length)}</mark>
      {snippet.slice(idx + query.length)}
    </>
  );
}

export default function Search() {
  const navigate = useNavigate();
  const { language } = useSettings();
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  useDocumentTitle(language === "zh" ? "搜尋" : "Search");

  const results = useMemo(() => {
    const raw = search(query);
    return groupResults(raw, language);
  }, [query, language]);

  return (
    <AppShell
      header={
        <div className={styles.headerTop}>
          <HeaderHomeLink language={language} />
          <h2 className={styles.headerTitle}>{language === "zh" ? "搜尋" : "Search"}</h2>
          <div style={{ width: "2.4em" }} />
        </div>
      }
    >
      <div className={styles.inputWrap}>
        <input
          ref={inputRef}
          autoFocus
          className={styles.input}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={language === "zh" ? "搜尋原文、解釋或應用…" : "Search text, explanation, or application…"}
          aria-label={language === "zh" ? "搜尋" : "Search"}
        />
      </div>

      {query.trim() && (
        <p className={styles.count}>
          {language === "zh" ? `找到 ${results.length} 個結果` : `${results.length} results`}
        </p>
      )}

      {query.trim() && results.length === 0 && (
        <p className={styles.empty}>{language === "zh" ? "沒有找到相關內容" : "No matches found"}</p>
      )}

      <div className={styles.results}>
        {results.map((r) => (
          <button
            key={`${r.workId}:${r.chapterId}`}
            className={styles.result}
            onClick={() => navigate(`/reader/${r.workId}/${r.chapterId}`)}
          >
            <div className={styles.resultHead}>
              <span>
                {r.workTitle[language]} · {unitName({ unitLabel: r.unitLabel }, language, r.chapterId)}
              </span>
            </div>
            <div className={styles.resultSnippet} lang={r.lang === "zh" ? "zh-Hant" : "en"}>
              {highlight(makeSnippet(r.content, query), query)}
            </div>
          </button>
        ))}
      </div>
    </AppShell>
  );
}
