"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/**
 * Standalone landing pages under /lp/* are single-offer, paid-traffic pages
 * that intentionally have no site navigation or footer links competing
 * with the one conversion goal — so this is the single place that decides
 * whether the shared Header/Footer render at all.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandaloneLandingPage = pathname?.startsWith("/lp/") ?? false;

  if (isStandaloneLandingPage) {
    return (
      <main id="main-content" className="flex-1">
        {children}
      </main>
    );
  }

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
