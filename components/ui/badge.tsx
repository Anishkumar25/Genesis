import React from "react";
import { ShieldCheckIcon } from "./icons";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "verified" | "dawn" | "legal" | "finance" | "neutral" | "pending";
  size?: "sm" | "md";
  className?: string;
  icon?: boolean;
}

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  className = "",
  icon = false,
}: BadgeProps) {
  const variantStyles = {
    verified: "bg-verified-bg text-verified border-verified/20",
    dawn: "bg-dawn-light text-dawn-dark border-dawn/20",
    legal: "bg-legal-bg text-legal border-legal/20",
    finance: "bg-finance-bg text-finance border-finance/20",
    neutral: "bg-canvas-subtle text-ink-muted border-border",
    pending: "bg-amber-50 text-amber-800 border-amber-200",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 font-medium tracking-wide rounded-full border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && variant === "verified" && <ShieldCheckIcon className="w-3 h-3 text-verified flex-shrink-0" />}
      <span className="truncate">{children}</span>
    </span>
  );
}
