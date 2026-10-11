"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n/use-translation";
import {
  ScaleLegalIcon,
  SearchIcon,
  CoinsGrowthIcon,
  ShieldCheckIcon,
  PhoneCallIcon,
  ArrowRightIcon,
  DawnSunIcon,
  InfoIcon,
} from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const { t } = useTranslation();

  const emergencyHelplines = [
    { title: "National Women Helpline", number: "181", desc: "Toll-free 24/7 emergency response" },
    { title: "National Police Emergency", number: "112", desc: "Immediate police & safety dispatch" },
    { title: "National Cyber Crime", number: "1930", desc: "Financial fraud & digital harassment" },
    { title: "NCW 24/7 Helpline", number: "7827-170-170", desc: "National Commission for Women" },
  ];

  return (
    <div className="px-4 py-4 space-y-6">
      {/* Editorial Dawn Hero */}
      <section className="bg-canvas-card rounded-card border border-border p-5 shadow-subtle relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-dawn-light/60 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dawn-light border border-dawn/20 text-dawn-dark text-xs font-semibold mb-3">
          <DawnSunIcon className="w-3.5 h-3.5" />
          <span>{t("home_hero_greeting")}</span>
        </div>

        <h1 className="font-serif text-2xl font-semibold text-ink leading-tight tracking-tight">
          {t("home_hero_title")}
        </h1>

        <p className="text-xs text-ink-muted mt-2.5 leading-relaxed">
          {t("home_hero_desc")}
        </p>

        {/* Reassurance Micro-banner */}
        <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-[11px] text-ink-muted">
          <span className="flex items-center gap-1.5">
            <ShieldCheckIcon className="w-4 h-4 text-verified" />
            <span className="font-medium text-ink/90">100% Anonymous Browsing</span>
          </span>
          <Link href="/privacy" className="text-dawn-dark hover:underline font-medium">
            Privacy Pledge →
          </Link>
        </div>
      </section>

      {/* 3 Core Editorial Action Pathways */}
      <section className="space-y-3">
        <h2 className="font-serif text-sm font-semibold text-ink tracking-wide uppercase text-ink-muted">
          Your Pathways
        </h2>

        {/* Path 1: Find Help Near You */}
        <Link
          href="/find-help"
          className="group block bg-canvas-card rounded-card border border-border p-4 shadow-subtle hover:border-dawn/40 active:scale-[0.99] transition-all"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="w-10 h-10 rounded-xl bg-dawn-light border border-dawn/30 text-dawn flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <SearchIcon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-base font-semibold text-ink group-hover:text-dawn-dark transition-colors">
                  {t("home_path_help_title")}
                </h3>
                <ArrowRightIcon className="w-4 h-4 text-ink-faint group-hover:text-dawn group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                {t("home_path_help_desc")}
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <Badge variant="verified" size="sm">Verified NGOs</Badge>
                <Badge variant="legal" size="sm">Family Lawyers</Badge>
              </div>
            </div>
          </div>
        </Link>

        {/* Path 2: Know Your Rights */}
        <Link
          href="/rights"
          className="group block bg-canvas-card rounded-card border border-border p-4 shadow-subtle hover:border-dawn/40 active:scale-[0.99] transition-all"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="w-10 h-10 rounded-xl bg-legal-bg border border-legal/30 text-legal flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <ScaleLegalIcon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-base font-semibold text-ink group-hover:text-dawn-dark transition-colors">
                  {t("home_path_rights_title")}
                </h3>
                <ArrowRightIcon className="w-4 h-4 text-ink-faint group-hover:text-dawn group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                {t("home_path_rights_desc")}
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <Badge variant="neutral" size="sm">Zero FIR</Badge>
                <Badge variant="neutral" size="sm">Inheritance</Badge>
                <Badge variant="neutral" size="sm">Video Guides</Badge>
              </div>
            </div>
          </div>
        </Link>

        {/* Path 3: Financial Independence */}
        <Link
          href="/finance"
          className="group block bg-canvas-card rounded-card border border-border p-4 shadow-subtle hover:border-dawn/40 active:scale-[0.99] transition-all"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="w-10 h-10 rounded-xl bg-finance-bg border border-finance/30 text-finance flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <CoinsGrowthIcon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-base font-semibold text-ink group-hover:text-dawn-dark transition-colors">
                  {t("home_path_finance_title")}
                </h3>
                <ArrowRightIcon className="w-4 h-4 text-ink-faint group-hover:text-dawn group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                {t("home_path_finance_desc")}
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <Badge variant="finance" size="sm">Free Workshops</Badge>
                <Badge variant="neutral" size="sm">UPI Safety</Badge>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Zero PII Reassurance Bento */}
      <section className="bg-canvas-subtle/80 rounded-card border border-border p-4 text-xs">
        <div className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-verified-bg text-verified flex items-center justify-center flex-shrink-0 mt-0.5">
            <ShieldCheckIcon className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif text-xs font-semibold text-ink">
              {t("home_anonymous_notice_title")}
            </h4>
            <p className="text-[11px] text-ink-muted leading-relaxed">
              {t("home_anonymous_notice_desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Direct Emergency Helplines (Tap-to-call) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-sm font-semibold text-ink">
            {t("home_emergency_title")}
          </h2>
          <span className="text-[10px] text-ink-muted font-medium">Free • 24/7</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {emergencyHelplines.map((item) => (
            <a
              key={item.number}
              href={`tel:${item.number.replace(/[^0-9]/g, "")}`}
              className="bg-canvas-card rounded-xl border border-border p-3 shadow-subtle hover:border-dawn/30 active:scale-95 transition-all flex flex-col justify-between"
              style={{ touchAction: "manipulation" }}
            >
              <div>
                <p className="text-[11px] font-medium text-ink-muted truncate">
                  {item.title}
                </p>
                <p className="text-base font-mono font-bold text-dawn-dark mt-1">
                  {item.number}
                </p>
              </div>
              <div className="mt-2 pt-2 border-t border-border/60 flex items-center gap-1 text-[10px] text-ink-muted">
                <PhoneCallIcon className="w-3 h-3 text-verified" />
                <span>Tap to call</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Community Partner Footnote */}
      <footer className="pt-2 pb-4 text-center space-y-2 border-t border-border/60">
        <p className="text-[11px] text-ink-muted">
          Genesis prototype crafted for women awareness communities.
        </p>
        <div className="flex items-center justify-center gap-3 text-xs text-dawn-dark">
          <Link href="/privacy" className="hover:underline">Privacy Guarantee</Link>
          <span>•</span>
          <Link href="/login" className="hover:underline">Partner Portal</Link>
        </div>
      </footer>
    </div>
  );
}
