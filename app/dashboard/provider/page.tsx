"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INITIAL_REQUESTS, AnonymousRequest } from "@/lib/sample-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShieldCheckIcon,
  CheckIcon,
  PhoneCallIcon,
  MapPinIcon,
  AlertCircleIcon,
  UserCircleIcon,
} from "@/components/ui/icons";

export default function ProviderDashboardPage() {
  const [status, setStatus] = useState<"verified" | "pending">("verified");
  const [requests, setRequests] = useState<AnonymousRequest[]>(INITIAL_REQUESTS);
  const [handledCount, setHandledCount] = useState<number>(14);

  // Profile editable state
  const [isEditing, setIsEditing] = useState(false);
  const [profileName, setProfileName] = useState("Astitva Women Empowerment Foundation (Sample)");
  const [specialization, setSpecialization] = useState("Crisis Counselling, Safe Transit & Family Mediation");
  const [helpline, setHelpline] = useState("+91 40 2345 6789");
  const [districts, setDistricts] = useState("Hyderabad, Rangareddy, Medchal-Malkajgiri");
  const [languages, setLanguages] = useState("English, Telugu, Hindi");

  const markHandled = (id: string) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "handled" } : r))
    );
    setHandledCount((c) => c + 1);
  };

  const getNeedLabel = (type: string) => {
    switch (type) {
      case "legal_help":
        return "Legal Counsel Assistance";
      case "counselling":
        return "Psychological Counselling";
      case "shelter":
        return "Emergency Transit Safe Shelter";
      case "financial_training":
        return "Financial Autonomy Mentorship";
      default:
        return type;
    }
  };

  return (
    <div className="px-4 py-4 space-y-5">
      {/* Top Banner */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-semibold text-ink">
            Provider Workspace
          </h1>
          <p className="text-xs text-ink-muted">
            Managing community capacity & assistance pings.
          </p>
        </div>
        <Badge variant={status === "verified" ? "verified" : "pending"} size="md" icon>
          {status === "verified" ? "Active • Verified" : "Pending Approval"}
        </Badge>
      </div>

      {/* Verification Status Warning (Toggleable for Demo testing) */}
      {status === "pending" ? (
        <div className="bg-amber-50 rounded-card p-4 border border-amber-200 text-xs space-y-2">
          <div className="flex items-center gap-2 font-semibold text-amber-900">
            <AlertCircleIcon className="w-4 h-4 text-amber-700" />
            <span>Profile Pending Admin Verification</span>
          </div>
          <p className="text-amber-800 leading-relaxed text-[11px]">
            Your credentials are currently in review. Your profile is not publicly visible in search results until approved. You can still preview incoming capacity alerts.
          </p>
          <button
            type="button"
            onClick={() => setStatus("verified")}
            className="text-[11px] font-semibold text-amber-900 underline"
          >
            [Demo: Simulate Admin Approval]
          </button>
        </div>
      ) : (
        <div className="bg-verified-bg/70 rounded-card p-3 border border-verified/20 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-verified font-medium">
            <ShieldCheckIcon className="w-4 h-4" />
            <span>Public Directory Status: Fully Visible</span>
          </div>
          <button
            type="button"
            onClick={() => setStatus("pending")}
            className="text-[11px] text-ink-muted hover:text-ink underline"
          >
            [Demo: Test Pending View]
          </button>
        </div>
      )}

      {/* Impact Counters Bento */}
      <section className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-canvas-card rounded-card border border-border p-3 shadow-subtle">
          <span className="block font-serif text-xl font-bold text-ink">{handledCount}</span>
          <span className="text-[10px] text-ink-muted leading-tight font-medium">Pings Handled</span>
        </div>
        <div className="bg-canvas-card rounded-card border border-border p-3 shadow-subtle">
          <span className="block font-serif text-xl font-bold text-dawn-dark">4</span>
          <span className="text-[10px] text-ink-muted leading-tight font-medium">Districts Active</span>
        </div>
        <div className="bg-canvas-card rounded-card border border-border p-3 shadow-subtle">
          <span className="block font-serif text-xl font-bold text-verified">100%</span>
          <span className="text-[10px] text-ink-muted leading-tight font-medium">Vetted Trust</span>
        </div>
      </section>

      {/* Anonymous Requests Queue (Need + District only, no names) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <h2 className="font-serif text-sm font-semibold text-ink">
              Anonymous Community Capacity Pings
            </h2>
          </div>
          <span className="text-[10px] text-verified font-medium">Strict Zero-PII</span>
        </div>

        <p className="text-[11px] text-ink-muted leading-relaxed">
          These pings represent women in your coverage zone who requested confidential assistance alerts. As per safety protocol, <strong>no names, phone numbers, or stories are ever recorded</strong>.
        </p>

        <div className="space-y-2.5">
          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-canvas-card rounded-card border border-border p-3.5 shadow-subtle flex items-start justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge
                    variant={req.status === "handled" ? "verified" : req.status === "in_progress" ? "dawn" : "neutral"}
                    size="sm"
                  >
                    {req.status === "handled" ? "Handled" : req.status === "in_progress" ? "In Progress" : "New Ping"}
                  </Badge>
                  <span className="text-[10px] text-ink-muted font-medium">{req.timestamp}</span>
                </div>

                <p className="font-serif text-xs font-semibold text-ink">
                  {getNeedLabel(req.need_type)}
                </p>

                <p className="text-[11px] text-ink-muted flex items-center gap-1">
                  <MapPinIcon className="w-3 h-3 text-ink-faint flex-shrink-0" />
                  <span>District: <strong>{req.district}</strong></span>
                </p>
              </div>

              {req.status !== "handled" ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => markHandled(req.id)}
                  className="text-xs flex-shrink-0"
                >
                  Mark Handled
                </Button>
              ) : (
                <span className="text-verified text-[11px] font-semibold flex items-center gap-1 flex-shrink-0 mt-2">
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span>Completed</span>
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Edit Organization Profile */}
      <section className="bg-canvas-card rounded-card border border-border p-4 shadow-subtle space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-sm font-semibold text-ink">
            Organization Profile
          </h2>
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="text-xs font-semibold text-dawn-dark hover:underline"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {isEditing ? (
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-[11px] font-medium text-ink-muted block mb-0.5">Organization Name</label>
              <input
                type="text"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                className="w-full bg-canvas-subtle border border-border rounded-lg px-2.5 py-1.5 text-xs text-ink"
              />
            </div>
            <div>
              <label className="text-[11px] font-medium text-ink-muted block mb-0.5">Specialization</label>
              <input
                type="text"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className="w-full bg-canvas-subtle border border-border rounded-lg px-2.5 py-1.5 text-xs text-ink"
              />
            </div>
            <div>
              <label className="text-[11px] font-medium text-ink-muted block mb-0.5">Direct Helpline</label>
              <input
                type="text"
                value={helpline}
                onChange={(e) => setHelpline(e.target.value)}
                className="w-full bg-canvas-subtle border border-border rounded-lg px-2.5 py-1.5 text-xs text-ink"
              />
            </div>
            <div>
              <label className="text-[11px] font-medium text-ink-muted block mb-0.5">Districts Covered</label>
              <input
                type="text"
                value={districts}
                onChange={(e) => setDistricts(e.target.value)}
                className="w-full bg-canvas-subtle border border-border rounded-lg px-2.5 py-1.5 text-xs text-ink"
              />
            </div>
            <Button
              variant="dawn"
              size="sm"
              onClick={() => setIsEditing(false)}
            >
              Update Profile Information
            </Button>
          </div>
        ) : (
          <div className="space-y-2 text-xs">
            <p className="font-semibold text-ink">{profileName}</p>
            <p className="text-dawn-dark text-[11px]">{specialization}</p>
            <p className="text-ink-muted text-[11px]">Helpline: <strong className="text-ink font-mono">{helpline}</strong></p>
            <p className="text-ink-muted text-[11px]">Districts: {districts}</p>
            <p className="text-ink-muted text-[11px]">Languages: {languages}</p>
          </div>
        )}
      </section>

      {/* Admin Link for Demo Walkthrough */}
      <div className="text-center pt-2">
        <Link
          href="/dashboard/admin"
          className="text-xs text-dawn-dark font-medium hover:underline"
        >
          Switch to Admin Verification Queue →
        </Link>
      </div>
    </div>
  );
}
