import React from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";
import useDocumentTitle from "../hooks/useDocumentTitle";
import AppShell from "../components/AppShell";
import Button from "../components/Button";

export default function NotFound() {
  const navigate = useNavigate();
  const { language } = useSettings();
  useDocumentTitle(language === "zh" ? "找不到頁面" : "Page not found");

  return (
    <AppShell>
      <div style={{ textAlign: "center", padding: "var(--space-7) var(--space-4)" }}>
        <h2>{language === "zh" ? "找不到頁面" : "Page not found"}</h2>
        <p style={{ color: "var(--color-ink-soft)", margin: "var(--space-3) 0 var(--space-5)" }}>
          {language === "zh" ? "您要尋找的頁面不存在。" : "The page you're looking for doesn't exist."}
        </p>
        <Button variant="primary" onClick={() => navigate("/")}>
          {language === "zh" ? "返回首頁" : "Back home"}
        </Button>
      </div>
    </AppShell>
  );
}
