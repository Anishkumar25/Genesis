"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DawnSunIcon, GlobeIcon, ChevronDownIcon } from "../ui/icons";
import { QuickExitButton } from "../ui/quick-exit";
import { useTranslation } from "@/lib/i18n/use-translation";
import { SupportedLanguage } from "@/lib/i18n/dictionary";

export function TopHeader() {
  const { lang, setLang, t } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages: { code: SupportedLanguage; label: string }[] = [
    { code: "en", label: "English" },
    { code: "te", label: "తెలుగు" },
    { code: "hi", label: "हिंदी" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-canvas/95 backdrop-blur-md border-b border-border transition-colors">
      {/* Discreet Sample Prototype Ribbon */}
      <div className="bg-canvas-subtle/80 border-b border-border/60 px-3 py-1 flex items-center justify-between text-[11px] text-ink-muted">
        <span className="flex items-center gap-1.5 font-medium tracking-wider uppercase text-[10px] text-dawn-dark">
          <span className="w-1.5 h-1.5 rounded-full bg-dawn inline-block" />
          {t("sample_badge")}
        </span>
        <span className="text-ink-muted/80 text-[10px] hidden xs:inline">
          Offline-ready sample data
        </span>
      </div>

      {/* Main Header Bar */}
      <div className="px-4 py-2.5 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group active:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-dawn-light border border-dawn/30 flex items-center justify-center text-dawn">
            <DawnSunIcon className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold tracking-tight text-ink leading-tight">
              Genesis
            </span>
            <span className="text-[10px] text-ink-muted tracking-wide uppercase font-medium">
              Daily Wellbeing & Rights
            </span>
          </div>
        </Link>

        {/* Actions: Language Selector & Quick Exit */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 px-2 py-1.5 rounded-md border border-border bg-canvas-card text-ink text-xs font-medium active:scale-95 transition-transform"
              aria-label="Change Language"
            >
              <GlobeIcon className="w-3.5 h-3.5 text-ink-muted" />
              <span className="uppercase font-semibold tracking-wide text-[11px]">{lang}</span>
              <ChevronDownIcon className="w-3 h-3 text-ink-muted" />
            </button>

            {langMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangMenuOpen(false)}
                />
                <div className="absolute right-0 mt-1.5 w-32 rounded-lg bg-canvas-card border border-border shadow-card py-1 z-50 text-xs">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-canvas-subtle transition-colors ${
                        lang === l.code ? "font-semibold text-dawn-dark bg-dawn-light/40" : "text-ink"
                      }`}
                    >
                      <span>{l.label}</span>
                      {lang === l.code && <span className="w-1.5 h-1.5 rounded-full bg-dawn" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Quick Exit Button (Always Accessible at Top Right) */}
          <QuickExitButton variant="pill" />
        </div>
      </div>
    </header>
  );
}
