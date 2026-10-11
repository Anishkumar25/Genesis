"use client";

import React, { useState, useMemo } from "react";
import {
  DISTRICTS,
  NEED_CATEGORIES,
  INITIAL_PROVIDERS,
  WORST_CASE_PROVIDERS,
  Provider,
} from "@/lib/sample-data";
import { ProviderCard } from "@/components/providers/provider-card";
import { BreakUiSuite } from "@/components/dev/break-ui-suite";
import {
  SearchIcon,
  FilterIcon,
  CloseIcon,
  ShieldCheckIcon,
  PhoneCallIcon,
  MapPinIcon,
} from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/use-translation";

export default function FindHelpPage() {
  const { t } = useTranslation();

  // State
  const [selectedNeed, setSelectedNeed] = useState<string>("all");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("All Districts");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isWorstCase, setIsWorstCase] = useState<boolean>(false);

  // Anonymous Request Modal state
  const [showRequestModal, setShowRequestModal] = useState<boolean>(false);
  const [reqNeed, setReqNeed] = useState<string>("counselling");
  const [reqDistrict, setReqDistrict] = useState<string>("Hyderabad");
  const [requestSubmitted, setRequestSubmitted] = useState<boolean>(false);

  // Active dataset
  const activeProviders = useMemo(() => {
    return isWorstCase ? WORST_CASE_PROVIDERS : INITIAL_PROVIDERS;
  }, [isWorstCase]);

  // Filtering
  const filteredProviders = useMemo(() => {
    return activeProviders.filter((p) => {
      // Need type filter
      if (selectedNeed !== "all") {
        if (selectedNeed === "legal_help" && p.type !== "lawyer") return false;
        if (selectedNeed === "financial_training" && p.type !== "financial_educator") return false;
        if (
          (selectedNeed === "counselling" || selectedNeed === "shelter") &&
          p.type !== "ngo"
        ) {
          return false;
        }
      }

      // District filter
      if (selectedDistrict !== "All Districts") {
        const matchesDistrict = p.districts.some(
          (d) =>
            d.toLowerCase().includes(selectedDistrict.toLowerCase()) ||
            selectedDistrict.toLowerCase().includes(d.toLowerCase())
        );
        if (!matchesDistrict) return false;
      }

      // Search Query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          p.name.toLowerCase().includes(q) ||
          p.specialization.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.languages.some((l) => l.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }

      return true;
    });
  }, [activeProviders, selectedNeed, selectedDistrict, searchQuery]);

  const handleAnonymousSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Strictly logs only need + district
    setRequestSubmitted(true);
    setTimeout(() => {
      setShowRequestModal(false);
      setRequestSubmitted(false);
    }, 2400);
  };

  return (
    <div className="px-4 py-4 space-y-5">
      {/* Page Header */}
      <div>
        <h1 className="font-serif text-2xl font-semibold text-ink leading-tight">
          {t("find_title")}
        </h1>
        <p className="text-xs text-ink-muted mt-1 leading-relaxed">
          {t("find_subtitle")}
        </p>
      </div>

      {/* Need Category Filter Chips (Horizontal Scroll) */}
      <div className="space-y-2">
        <label className="text-[11px] font-semibold tracking-wider uppercase text-ink-muted block">
          Select Need
        </label>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4">
          {NEED_CATEGORIES.map((cat) => {
            const isSelected = selectedNeed === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedNeed(cat.id)}
                className={`flex-shrink-0 px-3 py-2 rounded-full text-xs font-medium border transition-all active:scale-95 ${
                  isSelected
                    ? "bg-ink text-white border-ink shadow-subtle font-semibold"
                    : "bg-canvas-card text-ink border-border hover:border-ink/30"
                }`}
                style={{ touchAction: "manipulation" }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* District Dropdown Selector & Search Input */}
      <div className="bg-canvas-card rounded-card border border-border p-3 space-y-3 shadow-subtle">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* District Picker */}
          <div>
            <label className="text-[11px] font-medium text-ink-muted block mb-1">
              {t("filter_district")}
            </label>
            <div className="relative">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full appearance-none bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink font-medium focus:outline-none focus:border-dawn"
              >
                {DISTRICTS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-ink-muted">
                <MapPinIcon className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Search Keywords */}
          <div>
            <label className="text-[11px] font-medium text-ink-muted block mb-1">
              Search by Specialization / Language
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. Telugu, Family Law, Shelter"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-canvas-subtle border border-border rounded-lg pl-8 pr-3 py-2 text-xs text-ink placeholder:text-ink-faint focus:outline-none focus:border-dawn"
              />
              <SearchIcon className="w-3.5 h-3.5 text-ink-faint absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-muted"
                >
                  <CloseIcon className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Clear Filters indicator if active */}
        {(selectedNeed !== "all" ||
          selectedDistrict !== "All Districts" ||
          searchQuery) && (
          <div className="flex items-center justify-between pt-1 border-t border-border/50 text-[11px]">
            <span className="text-ink-muted">
              Showing filtered results ({filteredProviders.length})
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedNeed("all");
                setSelectedDistrict("All Districts");
                setSearchQuery("");
              }}
              className="text-dawn-dark font-medium hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Anonymous Request Prompt Button */}
      <div className="bg-dawn-light/60 border border-dawn/20 rounded-card p-3 flex items-center justify-between gap-3">
        <div className="text-xs">
          <p className="font-semibold text-ink">Prefer not to call directly right now?</p>
          <p className="text-[11px] text-ink-muted mt-0.5">
            Send an anonymous capacity ping. No name or number stored.
          </p>
        </div>
        <Button
          variant="dawn"
          size="sm"
          onClick={() => setShowRequestModal(true)}
          className="flex-shrink-0 text-xs px-3"
        >
          Anonymous Ping
        </Button>
      </div>

      {/* Provider Cards List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-ink-muted font-medium">
          <span>Available Verified Providers</span>
          <span>
            {filteredProviders.length}{" "}
            {filteredProviders.length === 1 ? "Organization" : "Organizations"}
          </span>
        </div>

        {filteredProviders.length > 0 ? (
          <div className="space-y-3.5">
            {filteredProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-canvas-card rounded-card border border-border p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-canvas-subtle text-ink-muted mx-auto flex items-center justify-center">
              <SearchIcon className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-base font-semibold text-ink">
              {t("zero_results")}
            </h3>
            <p className="text-xs text-ink-muted max-w-xs mx-auto leading-relaxed">
              {t("zero_results_desc")}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedNeed("all");
                setSelectedDistrict("All Districts");
                setSearchQuery("");
              }}
            >
              View All Districts & Categories
            </Button>
          </div>
        )}
      </div>

      {/* Anonymous Capacity Ping Modal */}
      {showRequestModal && (
        <div
          className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 animate-fade-in"
          onClick={() => setShowRequestModal(false)}
        >
          <div
            className="bg-canvas-card w-full max-w-sm rounded-t-2xl sm:rounded-2xl border border-border p-5 shadow-card animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-dawn-light text-dawn flex items-center justify-center">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-ink">
                    {t("request_modal_title")}
                  </h3>
                  <p className="text-[10px] text-verified font-medium">
                    Strict Zero-PII Policy
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowRequestModal(false)}
                className="p-1 rounded text-ink-muted hover:bg-canvas-subtle"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {requestSubmitted ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-verified-bg text-verified mx-auto flex items-center justify-center font-bold">
                  ✓
                </div>
                <h4 className="font-serif text-sm font-semibold text-ink">
                  Anonymous Ping Registered
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {t("request_success")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleAnonymousSubmit} className="space-y-3.5">
                <p className="text-xs text-ink-muted leading-relaxed">
                  {t("request_modal_desc")}
                </p>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-ink">Need Category</label>
                  <select
                    value={reqNeed}
                    onChange={(e) => setReqNeed(e.target.value)}
                    className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink font-medium"
                  >
                    <option value="counselling">Psychological Counselling</option>
                    <option value="legal_help">Legal Counsel</option>
                    <option value="shelter">Emergency Safe Transit Shelter</option>
                    <option value="financial_training">Financial Mentorship</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-ink">District</label>
                  <select
                    value={reqDistrict}
                    onChange={(e) => setReqDistrict(e.target.value)}
                    className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink font-medium"
                  >
                    {DISTRICTS.filter((d) => d !== "All Districts").map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-canvas-subtle rounded-lg p-2.5 text-[11px] text-ink-muted border border-border/70 flex items-start gap-1.5">
                  <ShieldCheckIcon className="w-4 h-4 text-verified flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero data logged:</strong> No name, phone number, device ID, or story is asked. Only (Category: {reqNeed}, District: {reqDistrict}).
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowRequestModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="dawn" size="sm">
                    {t("request_submit_btn")}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Dev Stress-Test Suite Toggle (Required by break-ui) */}
      <BreakUiSuite
        isWorstCase={isWorstCase}
        onToggleWorstCase={setIsWorstCase}
      />
    </div>
  );
}
