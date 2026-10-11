"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INITIAL_PROVIDERS, Provider } from "@/lib/sample-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShieldCheckIcon,
  CheckIcon,
  CloseIcon,
  AlertCircleIcon,
  MapPinIcon,
  PhoneCallIcon,
} from "@/components/ui/icons";

export default function AdminDashboardPage() {
  const [providers, setProviders] = useState<Provider[]>(INITIAL_PROVIDERS);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const pendingProviders = providers.filter((p) => p.status === "pending");
  const verifiedProviders = providers.filter((p) => p.status === "verified");
  const suspendedProviders = providers.filter((p) => p.status === "suspended");

  const handleStatusChange = (id: string, newStatus: Provider["status"]) => {
    setProviders((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
    );
    const target = providers.find((p) => p.id === id);
    const actionVerb =
      newStatus === "verified"
        ? "Approved & Verified"
        : newStatus === "suspended"
        ? "Suspended"
        : "Declined";
    setActionNotice(`${target?.name || "Provider"} was successfully ${actionVerb}.`);
    setTimeout(() => setActionNotice(null), 3500);
  };

  return (
    <div className="px-4 py-4 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-semibold text-ink">
            Admin Portal
          </h1>
          <p className="text-xs text-ink-muted">
            Vetting civil partners & maintaining safety standards.
          </p>
        </div>
        <Badge variant="neutral" size="md">
          Platform Security
        </Badge>
      </div>

      {/* Action Notification Banner */}
      {actionNotice && (
        <div className="bg-verified-bg text-verified border border-verified/30 rounded-lg p-3 text-xs flex items-center gap-2 animate-fade-in font-medium">
          <CheckIcon className="w-4 h-4 flex-shrink-0" />
          <span>{actionNotice}</span>
        </div>
      )}

      {/* Network Overview Stats */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-canvas-card rounded-card border border-border p-3 shadow-subtle">
          <span className="block font-serif text-xl font-bold text-ink">
            {pendingProviders.length}
          </span>
          <span className="text-[10px] text-amber-700 font-semibold uppercase">Pending</span>
        </div>
        <div className="bg-canvas-card rounded-card border border-border p-3 shadow-subtle">
          <span className="block font-serif text-xl font-bold text-verified">
            {verifiedProviders.length}
          </span>
          <span className="text-[10px] text-ink-muted uppercase font-medium">Verified Active</span>
        </div>
        <div className="bg-canvas-card rounded-card border border-border p-3 shadow-subtle">
          <span className="block font-serif text-xl font-bold text-dawn-dark">
            {suspendedProviders.length}
          </span>
          <span className="text-[10px] text-ink-muted uppercase font-medium">Suspended</span>
        </div>
      </div>

      {/* Pending Approvals Queue */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-sm font-semibold text-ink flex items-center gap-1.5">
            <span>Pending Approvals Queue</span>
            {pendingProviders.length > 0 && (
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            )}
          </h2>
          <span className="text-[10px] text-ink-muted font-medium">
            Requires Document Check
          </span>
        </div>

        {pendingProviders.length > 0 ? (
          <div className="space-y-3">
            {pendingProviders.map((provider) => (
              <div
                key={provider.id}
                className="bg-canvas-card rounded-card border border-amber-200/80 p-4 shadow-subtle space-y-3"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <Badge variant="pending" size="sm">
                      Pending Bar / Trust Verification
                    </Badge>
                    <span className="text-[10px] text-ink-muted">Awaiting Audit</span>
                  </div>

                  <h3 className="font-serif text-sm font-semibold text-ink mt-1">
                    {provider.name}
                  </h3>
                  <p className="text-xs text-dawn-dark font-medium mt-0.5">
                    {provider.specialization}
                  </p>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                    {provider.description}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-border/60 text-[11px] text-ink-muted space-y-1">
                    <p>
                      <strong>Helpline:</strong> <span className="font-mono">{provider.helpline}</span>
                    </p>
                    <p>
                      <strong>Districts:</strong> {provider.districts.join(", ")}
                    </p>
                    <p>
                      <strong>Languages:</strong> {provider.languages.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-border/70">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleStatusChange(provider.id, "verified")}
                    className="text-xs bg-verified hover:bg-emerald-800 border-verified text-white"
                  >
                    Approve & Verify
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusChange(provider.id, "rejected")}
                    className="text-xs text-red-700 hover:bg-red-50 border-red-200"
                  >
                    Reject Application
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-canvas-card rounded-card border border-border p-6 text-center space-y-1.5">
            <CheckIcon className="w-5 h-5 text-verified mx-auto" />
            <p className="font-serif text-sm font-semibold text-ink">
              Queue is Clear
            </p>
            <p className="text-xs text-ink-muted">
              All provider registrations have been reviewed.
            </p>
          </div>
        )}
      </section>

      {/* Active Verified Providers Management */}
      <section className="space-y-3">
        <h2 className="font-serif text-sm font-semibold text-ink">
          Verified Active Directory ({verifiedProviders.length})
        </h2>

        <div className="space-y-2.5">
          {verifiedProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-canvas-card rounded-card border border-border p-3.5 shadow-subtle flex items-center justify-between gap-2"
            >
              <div className="space-y-0.5 min-w-0 pr-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-serif text-xs font-semibold text-ink truncate">
                    {provider.name}
                  </span>
                  <Badge variant="verified" size="sm">
                    Verified
                  </Badge>
                </div>
                <p className="text-[11px] text-ink-muted truncate">
                  {provider.specialization}
                </p>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handleStatusChange(provider.id, "suspended")}
                className="text-[11px] px-2.5 py-1 text-red-600 border-border hover:bg-red-50 flex-shrink-0"
              >
                Suspend
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Shortcuts */}
      <div className="pt-2 flex items-center justify-between text-xs text-dawn-dark">
        <Link href="/dashboard/provider" className="hover:underline">
          ← Switch to Provider Dashboard
        </Link>
        <Link href="/find-help" className="hover:underline">
          View Public Directory →
        </Link>
      </div>
    </div>
  );
}
