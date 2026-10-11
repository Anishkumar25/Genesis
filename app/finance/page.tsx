"use client";

import React, { useState } from "react";
import { INITIAL_WORKSHOPS, Workshop } from "@/lib/sample-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CoinsGrowthIcon,
  CalendarIcon,
  MapPinIcon,
  CheckIcon,
  CloseIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import { useTranslation } from "@/lib/i18n/use-translation";

export default function FinancePage() {
  const { t } = useTranslation();
  const [registeredWorkshopId, setRegisteredWorkshopId] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState<Workshop | null>(null);

  const learningPillars = [
    {
      title: "Opening an Independent Bank Account",
      desc: "Every woman is entitled to a zero-balance Basic Savings Bank Deposit (BSBD) account with no minimum balance penalties or hidden maintenance charges.",
      points: [
        "Aadhaar & PAN are sufficient for instant digital e-KYC opening.",
        "Your account cannot be operated or accessed by anyone without your authorization.",
        "Opt for single operating mode (Self only) rather than joint accounts if you desire complete autonomy.",
      ],
    },
    {
      title: "Building a Three-Month Emergency Cushion",
      desc: "An emergency reserve provides peace of mind and bargaining power. Start with small, non-negotiable monthly auto-transfers.",
      points: [
        "Aim to accumulate 3 months of basic living expenses in a separate high-liquidity account.",
        "Keep emergency reserves unlinked from instant payment apps to avoid casual spending.",
        "Consider Sovereign Gold Bonds (SGB) or Recurring Deposits (RD) for disciplined growth.",
      ],
    },
    {
      title: "Digital Banking Hygiene & UPI Safety",
      desc: "Protecting your financial privacy against unauthorized snooping, OTP fraud, and coercive digital transactions.",
      points: [
        "A UPI PIN is entered ONLY to SEND money, never to RECEIVE money.",
        "Use device-level app locks (biometrics) on banking and UPI payment apps.",
        "Report suspicious transactions within 24 hours to your bank and 1930 for zero-liability protection.",
      ],
    },
  ];

  const handleRegister = (workshop: Workshop) => {
    setShowConfirmModal(workshop);
  };

  const confirmRegistration = () => {
    if (showConfirmModal) {
      setRegisteredWorkshopId(showConfirmModal.id);
      setShowConfirmModal(null);
    }
  };

  return (
    <div className="px-4 py-4 space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-finance-bg border border-finance/20 text-finance text-xs font-semibold mb-2">
          <CoinsGrowthIcon className="w-3.5 h-3.5" />
          <span>Economic Sovereignty</span>
        </div>
        <h1 className="font-serif text-2xl font-semibold text-ink leading-tight">
          {t("finance_title")}
        </h1>
        <p className="text-xs text-ink-muted mt-1 leading-relaxed">
          {t("finance_subtitle")}
        </p>
      </div>

      {/* Upcoming Partner Workshops */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-sm font-semibold text-ink">
            {t("finance_workshops_heading")}
          </h2>
          <span className="text-[10px] text-ink-muted font-medium">Free Partner Sessions</span>
        </div>

        <div className="space-y-3">
          {INITIAL_WORKSHOPS.map((workshop) => {
            const isRegistered = registeredWorkshopId === workshop.id;
            return (
              <article
                key={workshop.id}
                className="bg-canvas-card rounded-card border border-border p-4 shadow-subtle hover:border-dawn/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <Badge variant={workshop.mode === "online" ? "neutral" : "dawn"} size="sm">
                      {workshop.mode === "online" ? "Online Webinar" : "In-Person Workshop"}
                    </Badge>
                    <span className="text-[11px] font-medium text-dawn-dark">Free Entry</span>
                  </div>

                  <h3 className="font-serif text-sm font-semibold text-ink leading-snug">
                    {workshop.title}
                  </h3>

                  <p className="text-xs text-ink-muted mt-1">
                    Organized by: <strong className="text-ink font-medium">{workshop.organizer}</strong>
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-border/60 space-y-1 text-xs text-ink-muted">
                    <div className="flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-dawn flex-shrink-0" />
                      <span className="font-medium text-ink/90">{workshop.formatted_date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPinIcon className="w-3.5 h-3.5 text-ink-faint flex-shrink-0" />
                      <span className="truncate">{workshop.district}</span>
                    </div>
                  </div>

                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {workshop.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-canvas-subtle text-ink-muted border border-border/70 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  {isRegistered ? (
                    <div className="w-full py-2 px-3 rounded-lg bg-verified-bg text-verified text-xs font-semibold flex items-center justify-center gap-1.5 border border-verified/20">
                      <CheckIcon className="w-4 h-4" />
                      <span>Reserved • Neutral Reminder Set</span>
                    </div>
                  ) : (
                    <Button
                      variant="dawn"
                      size="sm"
                      fullWidth
                      onClick={() => handleRegister(workshop)}
                      className="text-xs font-semibold"
                    >
                      {t("finance_register_btn")}
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Practical Learning Pillars */}
      <section className="space-y-3">
        <h2 className="font-serif text-sm font-semibold text-ink">
          Foundational Financial Playbooks
        </h2>

        <div className="space-y-3">
          {learningPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-canvas-card rounded-card border border-border p-4 shadow-subtle space-y-2.5"
            >
              <h3 className="font-serif text-sm font-semibold text-ink flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-finance-bg text-finance text-xs flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <span>{pillar.title}</span>
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                {pillar.desc}
              </p>
              <ul className="space-y-1.5 pt-1 border-t border-border/60">
                {pillar.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-xs text-ink leading-relaxed">
                    <span className="text-dawn font-bold leading-none mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Modal Simulation */}
      {showConfirmModal && (
        <div
          className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 animate-fade-in"
          onClick={() => setShowConfirmModal(null)}
        >
          <div
            className="bg-canvas-card w-full max-w-sm rounded-t-2xl sm:rounded-2xl border border-border p-5 shadow-card animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <h3 className="font-serif text-sm font-semibold text-ink">
                  Reserve Free Seat
                </h3>
                <p className="text-[11px] text-ink-muted">
                  Discreet workshop registration
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowConfirmModal(null)}
                className="p-1 rounded text-ink-muted hover:bg-canvas-subtle"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-canvas-subtle rounded-lg p-3 my-3 text-xs border border-border space-y-1">
              <p className="text-ink font-semibold">{showConfirmModal.title}</p>
              <p className="text-dawn-dark text-[11px] font-medium">{showConfirmModal.formatted_date}</p>
              <p className="text-ink-muted text-[11px]">{showConfirmModal.district}</p>
            </div>

            <p className="text-xs text-ink-muted leading-relaxed mb-4">
              <strong>Zero personal tracing:</strong> To preserve your privacy, Genesis does not send promotional emails or text messages. You can simply add a neutral calendar event to your phone.
            </p>

            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowConfirmModal(null)}
              >
                Cancel
              </Button>
              <Button
                variant="dawn"
                size="sm"
                onClick={confirmRegistration}
              >
                Confirm Reservation
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
