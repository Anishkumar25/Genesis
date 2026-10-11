"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { DICTIONARY, SupportedLanguage, Translations } from "./dictionary";

interface TranslationContextType {
  lang: SupportedLanguage;
  setLang: (lang: SupportedLanguage) => void;
  t: (key: keyof Translations) => string;
}

const TranslationContext = createContext<TranslationContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => DICTIONARY.en[key] || "",
});

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<SupportedLanguage>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("genesis_lang") as SupportedLanguage;
      if (stored && (stored === "en" || stored === "te" || stored === "hi")) {
        setLangState(stored);
      }
    } catch {
      // LocalStorage access safe fallback
    }
  }, []);

  const setLang = (newLang: SupportedLanguage) => {
    setLangState(newLang);
    try {
      localStorage.setItem("genesis_lang", newLang);
    } catch {
      // Safe fallback
    }
  };

  const t = (key: keyof Translations): string => {
    const dict = DICTIONARY[lang] || DICTIONARY.en;
    return dict[key] || DICTIONARY.en[key] || "";
  };

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
