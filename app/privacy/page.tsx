"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheckIcon, QuickExitIcon, CheckIcon, CloseIcon, ArrowRightIcon } from "@/components/ui/icons";
import { QuickExitButton } from "@/components/ui/quick-exit";
import { useTranslation } from "@/lib/i18n/use-translation";

export default function PrivacyPage() {
  const { t } = useTranslation();

  const neverCollected = [
    {
      title: "Your Name & Identity",
      desc: "We never ask for your real name, nickname, or social media handles. Browsing is completely unauthenticated.",
    },
    {
      title: "Phone Numbers & Contacts",
      desc: "Women browsing Genesis never enter a phone number. Contacting a provider occurs directly via your phone’s carrier dialer.",
    },
    {
      title: "Precise GPS Location",
      desc: "We never ask for device geolocation permissions. You choose your district manually from a general dropdown.",
    },
    {
      title: "Case Stories & Sensitive Notes",
      desc: "There is no in-app messaging or open narrative text box. No personal traumatic records can be intercepted or breached.",
    },
    {
      title: "Ad Trackers & Third-Party Cookies",
      desc: "Genesis contains zero marketing trackers, zero Meta/Facebook pixels, and zero analytics advertising beacons.",
    },
  ];

  const whatIsLogged = [
    {
      title: "General Need Category",
      desc: "When an anonymous ping is sent, only the general category (e.g. Legal Counsel, Counselling) is noted so organizations understand community demand.",
    },
    {
      title: "District Region",
      desc: "The selected district name (e.g. Hyderabad, Warangal) is logged to help providers know where resources are needed.",
    },
    {
      title: "Server Timestamp",
      desc: "A general timestamp so old capacity pings can automatically expire.",
    },
  ];

  return (
    <div className="px-4 py-4 space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-verified-bg border border-verified/20 text-verified text-xs font-semibold mb-2">
          <ShieldCheckIcon className="w-3.5 h-3.5" />
          <span>Zero-PII Architecture</span>
        </div>
        <h1 className="font-serif text-2xl font-semibold text-ink leading-tight">
          {t("privacy_title")}
        </h1>
        <p className="text-xs text-ink-muted mt-1 leading-relaxed">
          {t("privacy_intro")}
        </p>
      </div>

      {/* Quick Exit Explanation */}
      <section className="bg-canvas-card rounded-card border border-border p-4 shadow-subtle space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center">
              <QuickExitIcon className="w-4 h-4 text-dawn" />
            </div>
            <div>
              <h2 className="font-serif text-sm font-semibold text-ink">
                How Quick Exit Works
              </h2>
              <p className="text-[11px] text-ink-muted">Single-tap safety escape</p>
            </div>
          </div>
          <QuickExitButton variant="pill" />
        </div>

        <p className="text-xs text-ink-muted leading-relaxed">
          The <strong>Quick Exit</strong> button is permanently present on every Genesis screen. Tapping it performs three simultaneous actions:
        </p>

        <ul className="space-y-1.5 text-xs text-ink">
          <li className="flex items-start gap-2">
            <span className="text-dawn font-bold">•</span>
            <span>It immediately redirects your browser to an innocuous weather forecasting portal (AccuWeather).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-dawn font-bold">•</span>
            <span>It uses <code className="bg-canvas-subtle px-1 rounded text-ink font-mono text-[11px]">location.replace</code>, which replaces the current entry in your browser history so pressing the &ldquo;Back&rdquo; button will not return to Genesis.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-dawn font-bold">•</span>
            <span>It clears any temporary form inputs or session cache from memory.</span>
          </li>
        </ul>
      </section>

      {/* What We NEVER Collect */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">
            ✕
          </div>
          <h2 className="font-serif text-sm font-semibold text-ink">
            {t("privacy_what_we_never_store")}
          </h2>
        </div>

        <div className="space-y-2.5">
          {neverCollected.map((item, idx) => (
            <div
              key={idx}
              className="bg-canvas-card rounded-card border border-border p-3.5 shadow-subtle space-y-1"
            >
              <div className="flex items-center gap-1.5">
                <CloseIcon className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                <h3 className="text-xs font-semibold text-ink">{item.title}</h3>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed pl-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What We DO Store */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-verified-bg text-verified flex items-center justify-center text-xs font-bold">
            ✓
          </div>
          <h2 className="font-serif text-sm font-semibold text-ink">
            {t("privacy_what_we_store")}
          </h2>
        </div>

        <div className="space-y-2.5">
          {whatIsLogged.map((item, idx) => (
            <div
              key={idx}
              className="bg-canvas-card rounded-card border border-border p-3.5 shadow-subtle space-y-1"
            >
              <div className="flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-verified flex-shrink-0" />
                <h3 className="text-xs font-semibold text-ink">{item.title}</h3>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed pl-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Neutral Language Policy */}
      <section className="bg-canvas-subtle rounded-card border border-border p-4 text-xs space-y-2">
        <h3 className="font-serif text-sm font-semibold text-ink">
          Discreet Screen Appearance
        </h3>
        <p className="text-xs text-ink-muted leading-relaxed">
          Genesis is visually styled with warm sunrise tones and quiet typography. If an onlooker glaces at your phone, they see general legal learning and wellbeing information. There are no alarmist illustrations or sensational headlines.
        </p>
        <div className="pt-2">
          <Link
            href="/find-help"
            className="inline-flex items-center gap-1 text-dawn-dark font-medium hover:underline text-xs"
          >
            <span>Proceed to verified directory</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
