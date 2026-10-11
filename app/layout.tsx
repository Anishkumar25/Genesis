import type { Metadata, Viewport } from "next";
import "./globals.css";
import { TopHeader } from "@/components/layout/top-header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { TranslationProvider } from "@/lib/i18n/use-translation";

export const metadata: Metadata = {
  title: "Genesis | Daily Wellbeing & Rights",
  description: "A calm, verified platform connecting women with trusted civil organizations, legal rights education, and financial freedom.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#FBF9F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#EFECE6] sm:py-4">
        {/* Mobile Shell Constraint: 375px+ centered frame for phone & desktop fidelity */}
        <TranslationProvider>
          <div className="max-w-md mx-auto min-h-[100dvh] bg-canvas text-ink flex flex-col relative sm:rounded-2xl sm:shadow-card sm:border sm:border-border overflow-x-hidden">
            <TopHeader />
            <main className="flex-1 pb-24">{children}</main>
            <BottomNav />
          </div>
        </TranslationProvider>
      </body>
    </html>
  );
}
