"use client";

import React, { useState } from "react";
import { AlertCircleIcon, CheckIcon, CloseIcon } from "../ui/icons";

interface BreakUiSuiteProps {
  isWorstCase: boolean;
  onToggleWorstCase: (value: boolean) => void;
}

export function BreakUiSuite({ isWorstCase, onToggleWorstCase }: BreakUiSuiteProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Stress-Test Diagnostic Trigger for Dev / Review */}
      <div className="fixed bottom-20 left-4 z-50">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-tight shadow-card border transition-all active:scale-95 ${
            isWorstCase
              ? "bg-red-900 text-red-100 border-red-700 font-bold"
              : "bg-canvas-card text-ink-muted border-border hover:text-ink"
          }`}
          style={{ touchAction: "manipulation" }}
          title="break-ui Stress Testing Suite"
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isWorstCase ? "bg-red-400 animate-ping" : "bg-emerald-500"
            }`}
          />
          <span>{isWorstCase ? "TEST: WORST-CASE" : "DATA: DEMO"}</span>
        </button>
      </div>

      {/* Stress-Test Inspector Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-canvas-card w-full max-w-sm rounded-t-2xl sm:rounded-2xl border border-border p-5 shadow-card animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div className="flex items-center gap-2">
                <AlertCircleIcon className="w-4 h-4 text-dawn" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                  break-ui Quality Audit
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-ink-muted hover:bg-canvas-subtle"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3 text-xs text-ink-muted leading-relaxed space-y-2">
              <p>
                This diagnostic switches the active state between curated sample demo data and realistic <strong>adversarial worst-case data</strong> (Telugu strings, unbounded emails, boundary phone digits).
              </p>
              <div className="bg-canvas-subtle rounded-lg p-2.5 text-[11px] border border-border">
                <p className="font-semibold text-ink mb-1">Stress Factors Evaluated:</p>
                <ul className="list-disc list-inside space-y-0.5 text-ink-muted">
                  <li>Telugu non-Latin font vertical bounds</li>
                  <li>Continuous unbreakable strings (CSS break-word)</li>
                  <li>Zero-results and missing optional attributes</li>
                  <li>Touch viewport 375px overflow integrity</li>
                </ul>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <span className="text-xs font-medium text-ink">Active Dataset:</span>
              <div className="inline-flex rounded-lg border border-border bg-canvas-subtle p-0.5">
                <button
                  type="button"
                  onClick={() => onToggleWorstCase(false)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    !isWorstCase
                      ? "bg-canvas-card text-ink shadow-subtle font-semibold"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  Clean Demo
                </button>
                <button
                  type="button"
                  onClick={() => onToggleWorstCase(true)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    isWorstCase
                      ? "bg-red-800 text-white font-semibold shadow-subtle"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  Worst Case
                </button>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 text-xs font-semibold rounded bg-ink text-white active:scale-95 transition-transform"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
