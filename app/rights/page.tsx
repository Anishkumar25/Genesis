"use client";

import React, { useState } from "react";
import { INITIAL_RIGHTS, RightsArticle } from "@/lib/sample-data";
import { Badge } from "@/components/ui/badge";
import {
  ScaleLegalIcon,
  PlayCircleIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  CheckIcon,
  CloseIcon,
} from "@/components/ui/icons";
import { useTranslation } from "@/lib/i18n/use-translation";

export default function RightsPage() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>("rt-01");
  const [activeVideo, setActiveVideo] = useState<RightsArticle | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="px-4 py-4 space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-legal-bg border border-legal/20 text-legal text-xs font-semibold mb-2">
          <ScaleLegalIcon className="w-3.5 h-3.5" />
          <span>Legal Knowledge & Agency</span>
        </div>
        <h1 className="font-serif text-2xl font-semibold text-ink leading-tight">
          {t("rights_title")}
        </h1>
        <p className="text-xs text-ink-muted mt-1 leading-relaxed">
          {t("rights_subtitle")}
        </p>
      </div>

      {/* Video Guides Section */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-sm font-semibold text-ink">
            {t("rights_videos_heading")}
          </h2>
          <span className="text-[10px] text-ink-muted font-medium">Visual Walkthroughs</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {INITIAL_RIGHTS.slice(0, 2).map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveVideo(article)}
              className="group bg-canvas-card rounded-card border border-border p-3 shadow-subtle hover:border-dawn/40 cursor-pointer active:scale-[0.98] transition-all"
            >
              <div className="relative aspect-video rounded-lg bg-ink/5 border border-border overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent flex items-end p-2.5">
                  <span className="text-white text-xs font-medium line-clamp-1">
                    {article.video_title}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-dawn text-white flex items-center justify-center shadow-card group-hover:scale-110 transition-transform">
                  <PlayCircleIcon className="w-6 h-6 ml-0.5" />
                </div>
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[11px] text-ink-muted">
                <span className="font-medium text-ink truncate">{article.category}</span>
                <span className="text-dawn-dark font-medium flex-shrink-0">Watch 3 min guide →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plain-Language Legal Articles Accordion */}
      <section className="space-y-3">
        <h2 className="font-serif text-sm font-semibold text-ink">
          Plain-Language Knowledge Cards
        </h2>

        <div className="space-y-2.5">
          {INITIAL_RIGHTS.map((article) => {
            const isExpanded = expandedId === article.id;
            return (
              <div
                key={article.id}
                className="bg-canvas-card rounded-card border border-border shadow-subtle transition-all overflow-hidden"
              >
                {/* Header row */}
                <button
                  type="button"
                  onClick={() => toggleExpand(article.id)}
                  className="w-full p-4 text-left flex items-start justify-between gap-3 active:bg-canvas-subtle/50 transition-colors"
                >
                  <div className="space-y-1 pr-1">
                    <Badge variant="legal" size="sm">
                      {article.category}
                    </Badge>
                    <h3 className="font-serif text-sm font-semibold text-ink leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-ink-muted leading-relaxed line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                  <div
                    className={`p-1 text-ink-muted rounded transition-transform ${
                      isExpanded ? "rotate-180 text-dawn" : ""
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-border/70 space-y-3 bg-canvas-subtle/30">
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-2">
                        {t("rights_key_provisions")}
                      </h4>
                      <ul className="space-y-2">
                        {article.key_points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-ink leading-relaxed"
                          >
                            <span className="w-4 h-4 rounded-full bg-verified-bg text-verified flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckIcon className="w-2.5 h-2.5" />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveVideo(article)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-dawn-dark hover:underline"
                      >
                        <PlayCircleIcon className="w-4 h-4" />
                        <span>Watch Video Breakdown</span>
                      </button>

                      <Badge variant="neutral" size="sm">
                        Verified by Legal Panel
                      </Badge>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Legal Aid Help Notice */}
      <section className="bg-canvas-subtle rounded-card border border-border p-4 text-xs space-y-1.5">
        <div className="flex items-center gap-2 text-ink font-semibold">
          <ShieldCheckIcon className="w-4 h-4 text-verified" />
          <span>Free Legal Aid is Your Constitutional Right</span>
        </div>
        <p className="text-[11px] text-ink-muted leading-relaxed">
          Under the Legal Services Authorities Act (NALSA), all women in India are eligible for free legal counsel regardless of personal income. You can request legal aid directly at any District Court Complex.
        </p>
      </section>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-canvas-card w-full max-w-lg rounded-2xl border border-border overflow-hidden shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-canvas-subtle border-b border-border flex items-center justify-between">
              <span className="font-serif text-xs font-semibold text-ink truncate pr-2">
                {activeVideo.video_title}
              </span>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="p-1 rounded text-ink-muted hover:bg-canvas"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Embedded Responsive Player */}
            <div className="aspect-video bg-black relative">
              <iframe
                src={`${activeVideo.video_url}?autoplay=1&mute=0`}
                title={activeVideo.video_title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-3 bg-canvas-card text-xs text-ink-muted leading-relaxed">
              <p className="text-ink font-medium">{activeVideo.title}</p>
              <p className="text-[11px] mt-1">{activeVideo.summary}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
