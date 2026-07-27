import { Logo } from "@/components/layout/Logo";

/**
 * Minimal header for standalone /lp/* landing pages: logo only, not linked
 * anywhere — there is no navigation away from the page's single offer.
 */
export function LandingPageHeader() {
  return (
    <header className="bg-white">
      <div className="container-page flex h-16 items-center md:h-20">
        <Logo linked={false} />
      </div>
    </header>
  );
}
