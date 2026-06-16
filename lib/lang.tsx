"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "he" | "en";

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
  t: (he: string, en: string) => string;
}

const LangContext = createContext<LangContextValue>({
  lang: "he",
  toggle: () => {},
  t: (he) => he,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("he");

  useEffect(() => {
    const stored = localStorage.getItem("mapat-lang") as Lang | null;
    if (stored) setLang(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("mapat-lang", lang);
    document.documentElement.setAttribute("dir", lang === "he" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const toggle = () => setLang((l) => (l === "he" ? "en" : "he"));
  const t = (he: string, en: string) => (lang === "he" ? he : en);

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
