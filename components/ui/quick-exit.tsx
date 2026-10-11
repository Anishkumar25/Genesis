"use client";

import React, { useCallback } from "react";
import { QuickExitIcon } from "./icons";
import { useTranslation } from "@/lib/i18n/use-translation";

interface QuickExitButtonProps {
  variant?: "floating" | "pill" | "banner";
  className?: string;
}

export function QuickExitButton({ variant = "pill", className = "" }: QuickExitButtonProps) {
  const { t } = useTranslation();

  const handleQuickExit = useCallback(() => {
    // 1. Immediately wipe any form inputs / focus
    if (typeof document !== "undefined") {
      const activeElement = document.activeElement as HTMLElement | null;
      activeElement?.blur();
      // Clear document title
      document.title = "Local Weather & Atmospheric Forecast";
    }

    // 2. Clear sensitive sessionStorage or transient caches
    try {
      if (typeof window !== "undefined") {
        window.sessionStorage.clear();
      }
    } catch {
      // Safe fallback
    }

    // 3. Replace history entry so back button doesn't reveal Genesis
    // Neutral weather forecast portal
    window.location.replace("https://www.accuweather.com");
  }, []);

  if (variant === "floating") {
    return (
      <button
        type="button"
        onClick={handleQuickExit}
        title={t("quick_exit_tooltip")}
        aria-label="Quick Exit to weather portal"
        className={`fixed bottom-20 right-4 z-50 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-ink text-canvas-card font-medium text-xs tracking-wide shadow-card border border-ink/20 active:scale-95 transition-transform ${className}`}
        style={{ touchAction: "manipulation" }}
      >
        <span className="w-2 h-2 rounded-full bg-dawn animate-pulse" />
        <QuickExitIcon className="w-3.5 h-3.5 text-dawn" />
        <span>{t("quick_exit")}</span>
      </button>
    );
  }

  if (variant === "banner") {
    return (
      <div className={`bg-canvas-subtle border-b border-border px-3 py-1.5 flex items-center justify-between text-xs text-ink-muted ${className}`}>
        <span className="flex items-center gap-1.5 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-dawn" />
          <span className="truncate">{t("quick_exit_subtext")}</span>
        </span>
        <button
          type="button"
          onClick={handleQuickExit}
          className="ml-2 flex-shrink-0 flex items-center gap-1 px-2.5 py-1 rounded bg-ink text-white font-medium text-[11px] active:scale-95 transition-transform"
          style={{ touchAction: "manipulation" }}
        >
          <QuickExitIcon className="w-3 h-3 text-dawn" />
          <span>{t("quick_exit")}</span>
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleQuickExit}
      title={t("quick_exit_tooltip")}
      aria-label="Quick Exit"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-ink text-white text-xs font-semibold tracking-wide border border-ink active:scale-95 transition-transform ${className}`}
      style={{ touchAction: "manipulation" }}
    >
      <QuickExitIcon className="w-3.5 h-3.5 text-dawn" />
      <span>{t("quick_exit")}</span>
    </button>
  );
}
