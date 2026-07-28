import React from "react";
import styles from "./AppShell.module.css";

export default function AppShell({
  header,
  footer,
  children,
  bodyRef,
  className = "",
  compactHeader = false,
  headerHidden = false,
  compactBody = false
}) {
  return (
    <div className={styles.shell}>
      <div className={`${styles.frame} ${className}`}>
        {header && (
          <header
            className={[
              styles.header,
              compactHeader ? styles.headerCompact : "",
              headerHidden ? styles.headerHidden : ""
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {header}
          </header>
        )}
        <main
          className={[styles.body, compactBody ? styles.bodyCompact : ""].filter(Boolean).join(" ")}
          ref={bodyRef}
        >
          {children}
        </main>
        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </div>
  );
}
