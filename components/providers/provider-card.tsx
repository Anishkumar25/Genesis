"use client";

import React, { useState } from "react";
import { Provider } from "@/lib/sample-data";
import { Badge } from "../ui/badge";
import { PhoneCallIcon, MapPinIcon, GlobeIcon, HeartIcon, CloseIcon, ShieldCheckIcon } from "../ui/icons";
import { Button } from "../ui/button";
import { useTranslation } from "@/lib/i18n/use-translation";

interface ProviderCardProps {
  provider: Provider;
  isFavorited?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function ProviderCard({
  provider,
  isFavorited = false,
  onToggleFavorite,
}: ProviderCardProps) {
  const { t } = useTranslation();
  const [showCallModal, setShowCallModal] = useState(false);
  const [favorite, setFavorite] = useState(isFavorited);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextState = !favorite;
    setFavorite(nextState);
    if (onToggleFavorite) {
      onToggleFavorite(provider.id);
    }
  };

  const getCategoryBadge = () => {
    switch (provider.type) {
      case "ngo":
        return <Badge variant="neutral">NGO / Support Center</Badge>;
      case "lawyer":
        return <Badge variant="legal">Legal Counsel</Badge>;
      case "financial_educator":
        return <Badge variant="finance">Financial Educator</Badge>;
      default:
        return null;
    }
  };

  return (
    <>
      <article className="bg-canvas-card rounded-card border border-border p-4 shadow-subtle hover:border-dawn/30 transition-all duration-200 flex flex-col justify-between">
        <div>
          {/* Top Row: Type & Verification Badge + Favorite */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {provider.status === "verified" ? (
                <Badge variant="verified" icon>
                  {t("verified_badge")}
                </Badge>
              ) : (
                <Badge variant="pending">Pending Verification</Badge>
              )}
              {getCategoryBadge()}
            </div>

            <button
              type="button"
              onClick={handleFavoriteClick}
              aria-label={favorite ? "Remove from saved" : "Save provider"}
              className="p-1.5 rounded-full hover:bg-canvas-subtle active:scale-90 transition-transform text-ink-muted"
            >
              <HeartIcon
                className={`w-4 h-4 ${
                  favorite ? "text-dawn fill-dawn" : "text-ink-muted/70"
                }`}
              />
            </button>
          </div>

          {/* Provider Name */}
          <h3 className="font-serif text-base font-semibold text-ink leading-snug break-words">
            {provider.name}
          </h3>

          {/* Specialization */}
          <p className="text-xs text-dawn-dark font-medium mt-1 leading-normal break-words">
            {provider.specialization}
          </p>

          {/* Description */}
          {provider.description && (
            <p className="text-xs text-ink-muted mt-2 line-clamp-3 leading-relaxed break-words">
              {provider.description}
            </p>
          )}

          {/* Meta Details: Districts & Languages */}
          <div className="mt-3.5 pt-3 border-t border-border/70 space-y-2 text-[11px] text-ink-muted">
            <div className="flex items-start gap-1.5">
              <MapPinIcon className="w-3.5 h-3.5 text-ink-faint flex-shrink-0 mt-0.5" />
              <span className="font-medium text-ink/80 flex-shrink-0">{t("districts_served")}:</span>
              <span className="text-ink-muted break-words flex-1">
                {provider.districts.join(", ")}
              </span>
            </div>

            <div className="flex items-start gap-1.5">
              <GlobeIcon className="w-3.5 h-3.5 text-ink-faint flex-shrink-0 mt-0.5" />
              <span className="font-medium text-ink/80 flex-shrink-0">{t("languages_spoken")}:</span>
              <span className="text-ink-muted break-words flex-1">
                {provider.languages.join(", ")}
              </span>
            </div>
          </div>
        </div>

        {/* Action Button: Direct Contact */}
        <div className="mt-4 pt-2">
          <Button
            variant="dawn"
            size="sm"
            fullWidth
            onClick={() => setShowCallModal(true)}
            className="gap-2 font-semibold text-xs py-2 min-h-[42px]"
          >
            <PhoneCallIcon className="w-3.5 h-3.5" />
            <span>{t("call_helpline")}</span>
          </Button>
        </div>
      </article>

      {/* Safety Contact Modal */}
      {showCallModal && (
        <div
          className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 animate-fade-in"
          onClick={() => setShowCallModal(false)}
        >
          <div
            className="bg-canvas-card w-full max-w-sm rounded-t-2xl sm:rounded-2xl border border-border p-5 shadow-card animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-verified-bg text-verified flex items-center justify-center">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-ink">
                    Direct Contact Confirmation
                  </h4>
                  <p className="text-[11px] text-ink-muted">Verified Phone / Helpline</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowCallModal(false)}
                className="p-1 rounded-md text-ink-muted hover:bg-canvas-subtle"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-canvas-subtle rounded-lg p-3 my-3 text-xs border border-border">
              <p className="text-ink font-medium">{provider.name}</p>
              <p className="text-dawn-dark font-mono text-sm mt-1 select-all font-semibold break-all">
                {provider.helpline}
              </p>
              {provider.address_hint && (
                <p className="text-ink-muted text-[11px] mt-1.5 flex items-center gap-1">
                  <MapPinIcon className="w-3 h-3 text-ink-faint flex-shrink-0" />
                  <span className="truncate">{provider.address_hint}</span>
                </p>
              )}
            </div>

            <p className="text-[11px] text-ink-muted leading-relaxed mb-4">
              <strong>Safety Note:</strong> Calls occur directly through your mobile carrier or standard dialer. No in-app conversation is saved or logged by Genesis.
            </p>

            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCallModal(false)}
              >
                Dismiss
              </Button>
              <a
                href={`tel:${provider.helpline.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center justify-center font-medium rounded-lg text-xs px-3 py-2 bg-dawn text-white hover:bg-dawn-hover active:scale-95 transition-transform gap-1.5"
                style={{ touchAction: "manipulation" }}
              >
                <PhoneCallIcon className="w-3.5 h-3.5" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
