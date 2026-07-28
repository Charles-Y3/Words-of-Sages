import React from "react";
import styles from "./AppShell.module.css";

export default function AppShell({ header, footer, children, bodyRef, className = "" }) {
  return (
    <div className={styles.shell}>
      <div className={`${styles.frame} ${className}`}>
        {header && <header className={styles.header}>{header}</header>}
        <main className={styles.body} ref={bodyRef}>
          {children}
        </main>
        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </div>
  );
}
