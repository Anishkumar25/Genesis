"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, SearchIcon, BookOpenIcon, CoinsGrowthIcon, UserCircleIcon } from "../ui/icons";
import { useTranslation } from "@/lib/i18n/use-translation";

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const navItems = [
    { href: "/", label: t("nav_home"), icon: HomeIcon, active: pathname === "/" },
    { href: "/find-help", label: t("nav_find_help"), icon: SearchIcon, active: pathname.startsWith("/find-help") },
    { href: "/rights", label: t("nav_rights"), icon: BookOpenIcon, active: pathname.startsWith("/rights") },
    { href: "/finance", label: t("nav_finance"), icon: CoinsGrowthIcon, active: pathname.startsWith("/finance") },
    { href: "/login", label: t("nav_dashboard"), icon: UserCircleIcon, active: pathname.startsWith("/dashboard") || pathname.startsWith("/login") || pathname.startsWith("/signup") },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-canvas-card/95 backdrop-blur-md border-t border-border"
      style={{
        paddingBottom: "max(env(safe-area-inset-bottom), 8px)",
      }}
    >
      <div className="max-w-md mx-auto grid grid-cols-5 px-1 py-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1.5 px-1 min-h-[48px] rounded-lg transition-transform active:scale-95 select-none ${
                item.active ? "text-dawn-dark font-medium" : "text-ink-muted hover:text-ink"
              }`}
              style={{ touchAction: "manipulation" }}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${item.active ? "text-dawn" : "text-ink-muted"}`} />
                {item.active && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-dawn" />
                )}
              </div>
              <span className="text-[10px] mt-1 leading-none tracking-tight truncate max-w-full">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
