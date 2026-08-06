"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { offerPricing } from "@/config/offer";
import { OfferPriceDisplay } from "@/components/offer/OfferPriceDisplay";

const STORAGE_KEY = "aeroscale_promo_banner_dismissed";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY) !== null;
}

function getServerSnapshot() {
  return false;
}

/**
 * Site-wide limited-time-offer bar, mounted above <SiteChrome> in the root
 * layout so it renders unconditionally on every route, including /lp/*.
 * Dismissal persists in localStorage (read via useSyncExternalStore, the
 * correct primitive for external mutable state — avoids a hydration
 * mismatch since the server always renders "not dismissed"); no
 * expiration/countdown logic — stays live until offerPricing.promoActive
 * is flipped off in config/offer.ts.
 */
export function PromoBanner() {
  const dismissed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!offerPricing.promoActive || dismissed) {
    return null;
  }

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    // "storage" only fires in other tabs, not the one that made the change —
    // dispatch a synthetic event so this tab's useSyncExternalStore re-reads too.
    window.dispatchEvent(new StorageEvent("storage"));
  }

  return (
    <div role="region" aria-label="Limited-time offer" className="relative bg-brand-slate">
      <div className="container-page flex items-center justify-center gap-2 py-2.5 pr-10 text-center text-sm text-white sm:gap-3">
        <span>
          Limited Time: AeroScale Full System at <OfferPriceDisplay size="sm" tone="onDark" />
        </span>
        <Link
          href="/pricing"
          className="shrink-0 font-semibold text-teal-on-slate underline-offset-2 hover:underline"
        >
          See Pricing
        </Link>
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss promo banner"
        className="absolute top-1/2 right-3 -translate-y-1/2 text-white/60 hover:text-white"
      >
        <X size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
