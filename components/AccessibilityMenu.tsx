"use client";

import { useState, useEffect } from "react";

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [fontScale, setFontScale] = useState(0);
  const [highContrast, setHighContrast] = useState(false);
  const [stopMotion, setStopMotion] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${100 + fontScale * 10}%`;
  }, [fontScale]);

  useEffect(() => {
    document.body.classList.toggle("a11y-contrast", highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.body.classList.toggle("a11y-stop-motion", stopMotion);
  }, [stopMotion]);

  useEffect(() => {
    document.body.classList.toggle("a11y-highlight-links", highlightLinks);
  }, [highlightLinks]);

  const reset = () => {
    setFontScale(0);
    setHighContrast(false);
    setStopMotion(false);
    setHighlightLinks(false);
  };

  return (
    <>
      {/* כפתור פתיחה */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="תפריט נגישות"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 1000,
          backgroundColor: "#2A1A0E",
          borderRadius: "50%",
          width: "52px",
          height: "52px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          color: "white",
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="4" r="2" />
          <path d="M19 8h-5v13a1 1 0 01-2 0v-6h-1v6a1 1 0 01-2 0V8H5a1 1 0 010-2h14a1 1 0 010 2z" />
        </svg>
      </button>

      {/* פאנל */}
      {open && (
        <div
          role="dialog"
          aria-label="אפשרויות נגישות"
          style={{
            position: "fixed",
            bottom: "88px",
            right: "24px",
            zIndex: 1000,
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
            padding: "20px",
            width: "260px",
            direction: "rtl",
          }}
        >
          <p style={{ fontWeight: 600, marginBottom: "14px", color: "#2A1A0E" }}>נגישות</p>

          <button onClick={() => setFontScale((s) => Math.min(s + 1, 4))} style={btnStyle}>
            הגדל טקסט ＋
          </button>
          <button onClick={() => setFontScale((s) => Math.max(s - 1, 0))} style={btnStyle}>
            הקטן טקסט －
          </button>
          <button onClick={() => setHighContrast((v) => !v)} style={{ ...btnStyle, background: highContrast ? "#2A1A0E" : "#F0EBE1", color: highContrast ? "white" : "#2A1A0E" }}>
            ניגודיות גבוהה
          </button>
          <button onClick={() => setHighlightLinks((v) => !v)} style={{ ...btnStyle, background: highlightLinks ? "#2A1A0E" : "#F0EBE1", color: highlightLinks ? "white" : "#2A1A0E" }}>
            הדגשת קישורים
          </button>
          <button onClick={() => setStopMotion((v) => !v)} style={{ ...btnStyle, background: stopMotion ? "#2A1A0E" : "#F0EBE1", color: stopMotion ? "white" : "#2A1A0E" }}>
            עצירת אנימציות
          </button>
          <button onClick={reset} style={{ ...btnStyle, background: "transparent", color: "#8B7D72", border: "1px solid #E2D9CE" }}>
            איפוס
          </button>
        </div>
      )}
    </>
  );
}

const btnStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  textAlign: "right",
  padding: "10px 14px",
  marginBottom: "8px",
  borderRadius: "8px",
  background: "#F0EBE1",
  color: "#2A1A0E",
  fontSize: "14px",
  cursor: "pointer",
};
