"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheckIcon, DawnSunIcon, AlertCircleIcon } from "@/components/ui/icons";
import { DISTRICTS } from "@/lib/sample-data";

export default function SignupPage() {
  const router = useRouter();

  const [role, setRole] = useState<"provider" | "visitor">("provider");
  const [providerType, setProviderType] = useState<"ngo" | "lawyer" | "financial_educator">("ngo");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [helpline, setHelpline] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [districts, setDistricts] = useState<string>("Hyderabad, Rangareddy");
  const [languages, setLanguages] = useState<string>("English, Telugu");
  const [addressHint, setAddressHint] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (role === "provider") {
        router.push("/dashboard/provider?new=pending");
      } else {
        router.push("/find-help");
      }
    }, 800);
  };

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="font-serif text-2xl font-semibold text-ink">
          Join the Genesis Network
        </h1>
        <p className="text-xs text-ink-muted">
          Connect with women seeking verified guidance and dignity.
        </p>
      </div>

      {/* Role Selection Tabs */}
      <div className="grid grid-cols-2 gap-2 bg-canvas-card rounded-card border border-border p-1">
        <button
          type="button"
          onClick={() => setRole("provider")}
          className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
            role === "provider"
              ? "bg-dawn text-white shadow-subtle"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          NGO / Lawyer / Educator
        </button>
        <button
          type="button"
          onClick={() => setRole("visitor")}
          className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
            role === "visitor"
              ? "bg-ink text-white shadow-subtle"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          Community Visitor
        </button>
      </div>

      {role === "provider" ? (
        <form onSubmit={handleSubmit} className="bg-canvas-card rounded-card border border-border p-4 shadow-subtle space-y-4">
          {/* Critical Security & Approval Notice */}
          <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-amber-900">
              <AlertCircleIcon className="w-4 h-4 text-amber-700 flex-shrink-0" />
              <span>Verification Policy</span>
            </div>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              Provider accounts remain in <strong>&ldquo;Pending&rdquo; status and hidden from the public directory</strong> until approved by a platform administrator to ensure community safety.
            </p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-ink">Organization / Provider Type</label>
            <select
              value={providerType}
              onChange={(e) => setProviderType(e.target.value as any)}
              className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink font-medium"
            >
              <option value="ngo">Registered Non-Governmental Organization (NGO)</option>
              <option value="lawyer">Advocate / Legal Counsel / Bar Member</option>
              <option value="financial_educator">Financial Literacy Mentor / SEBI Volunteer</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-ink">Full Name / Organization Name</label>
            <input
              type="text"
              placeholder="e.g. Sahaya Rural Legal Aid Cell"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink focus:outline-none focus:border-dawn"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-ink">Official Helpline / Contact Number</label>
            <input
              type="tel"
              placeholder="+91 98490 12345"
              value={helpline}
              onChange={(e) => setHelpline(e.target.value)}
              required
              className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink focus:outline-none focus:border-dawn"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-ink">Primary Specialization</label>
            <input
              type="text"
              placeholder="e.g. Matrimonial Mediation, Zero FIR, Emergency Transit"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
              className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink focus:outline-none focus:border-dawn"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-ink">Districts Covered (Comma separated)</label>
            <input
              type="text"
              placeholder="Hyderabad, Rangareddy, Medchal"
              value={districts}
              onChange={(e) => setDistricts(e.target.value)}
              required
              className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink focus:outline-none focus:border-dawn"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-ink">Languages Spoken</label>
            <input
              type="text"
              placeholder="Telugu, English, Hindi"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              required
              className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink focus:outline-none focus:border-dawn"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-ink">Office Location Hint (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Near Court Complex, Hanamkonda"
              value={addressHint}
              onChange={(e) => setAddressHint(e.target.value)}
              className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink focus:outline-none focus:border-dawn"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-ink">Official Verification Email</label>
            <input
              type="email"
              placeholder="contact@organization.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink focus:outline-none focus:border-dawn"
            />
          </div>

          <Button
            type="submit"
            variant="dawn"
            size="md"
            fullWidth
            isLoading={isLoading}
          >
            Submit for Admin Review
          </Button>
        </form>
      ) : (
        /* Visitor optional signup for saving favorites */
        <form onSubmit={handleSubmit} className="bg-canvas-card rounded-card border border-border p-4 shadow-subtle space-y-4">
          <div className="bg-canvas-subtle rounded-lg p-3 text-xs space-y-1 border border-border">
            <p className="font-semibold text-ink">Optional Account</p>
            <p className="text-[11px] text-ink-muted leading-relaxed">
              You do not need to create an account to view NGOs or tap to call. Creating an account only allows bookmarking favorite providers.
            </p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-ink">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink focus:outline-none focus:border-dawn"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-ink">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink focus:outline-none focus:border-dawn"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            fullWidth
            isLoading={isLoading}
          >
            Create Visitor Account
          </Button>
        </form>
      )}

      <p className="text-center text-xs text-ink-muted">
        Already registered?{" "}
        <Link href="/login" className="text-dawn-dark font-semibold hover:underline">
          Sign In here →
        </Link>
      </p>
    </div>
  );
}
