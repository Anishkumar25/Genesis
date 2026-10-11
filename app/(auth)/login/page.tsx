"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DawnSunIcon, UserCircleIcon, ShieldCheckIcon } from "@/components/ui/icons";
import { useTranslation } from "@/lib/i18n/use-translation";

export default function LoginPage() {
  const router = useRouter();
  const { t } = useTranslation();

  const [role, setRole] = useState<"visitor" | "provider" | "admin">("provider");
  const [email, setEmail] = useState("provider@astitva.org");
  const [password, setPassword] = useState("••••••••");
  const [isLoading, setIsLoading] = useState(false);

  const setRolePreset = (selectedRole: "visitor" | "provider" | "admin") => {
    setRole(selectedRole);
    if (selectedRole === "admin") {
      setEmail("admin@genesis-platform.org");
    } else if (selectedRole === "provider") {
      setEmail("provider@astitva.org");
    } else {
      setEmail("visitor.community@example.com");
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (role === "admin") {
        router.push("/dashboard/admin");
      } else if (role === "provider") {
        router.push("/dashboard/provider");
      } else {
        router.push("/find-help");
      }
    }, 600);
  };

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-1.5">
        <div className="w-10 h-10 rounded-xl bg-dawn-light border border-dawn/30 text-dawn mx-auto flex items-center justify-center">
          <DawnSunIcon className="w-5 h-5" />
        </div>
        <h1 className="font-serif text-2xl font-semibold text-ink">
          Partner & Member Sign In
        </h1>
        <p className="text-xs text-ink-muted">
          Access your verified organization or administration dashboard.
        </p>
      </div>

      {/* 1-Click Role Selector for Quick Partner Demonstration */}
      <div className="bg-canvas-card rounded-card border border-border p-3.5 shadow-subtle space-y-2">
        <label className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted block">
          Select Demo Persona / Role
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          <button
            type="button"
            onClick={() => setRolePreset("provider")}
            className={`px-2 py-2 rounded-lg text-xs font-medium border text-center transition-all ${
              role === "provider"
                ? "bg-dawn text-white border-dawn font-semibold shadow-subtle"
                : "bg-canvas-subtle text-ink-muted border-border hover:text-ink"
            }`}
          >
            NGO / Lawyer
          </button>
          <button
            type="button"
            onClick={() => setRolePreset("admin")}
            className={`px-2 py-2 rounded-lg text-xs font-medium border text-center transition-all ${
              role === "admin"
                ? "bg-ink text-white border-ink font-semibold shadow-subtle"
                : "bg-canvas-subtle text-ink-muted border-border hover:text-ink"
            }`}
          >
            Admin
          </button>
          <button
            type="button"
            onClick={() => setRolePreset("visitor")}
            className={`px-2 py-2 rounded-lg text-xs font-medium border text-center transition-all ${
              role === "visitor"
                ? "bg-verified text-white border-verified font-semibold shadow-subtle"
                : "bg-canvas-subtle text-ink-muted border-border hover:text-ink"
            }`}
          >
            Saved Items
          </button>
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="bg-canvas-card rounded-card border border-border p-4 shadow-subtle space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-ink">Registered Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-canvas-subtle border border-border rounded-lg px-3 py-2 text-xs text-ink focus:outline-none focus:border-dawn"
          />
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-ink">Password</label>
            <span className="text-[10px] text-ink-muted">Any password for demo</span>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          {role === "admin"
            ? "Enter Admin Portal"
            : role === "provider"
            ? "Enter Provider Workspace"
            : "Sign In as Visitor"}
        </Button>
      </form>

      {/* Link to Signup */}
      <div className="text-center space-y-2 text-xs text-ink-muted">
        <p>
          Are you an NGO, Lawyer, or Educator?{" "}
          <Link href="/signup" className="text-dawn-dark font-semibold hover:underline">
            Register your Organization →
          </Link>
        </p>
        <p className="text-[11px]">
          Visitors do not need an account to browse.{" "}
          <Link href="/find-help" className="text-ink hover:underline">
            Browse freely
          </Link>
        </p>
      </div>
    </div>
  );
}
