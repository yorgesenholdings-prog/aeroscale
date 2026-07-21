import { Button } from "@/components/ui/Button";
import { PRICING_TIERS, formatCurrency } from "@/config/pricing";
import type { TierPricing } from "@/types";

export function SupportPricingTiers({ tiers }: { tiers: TierPricing }) {
  return (
    <section className="bg-surface py-12 md:py-16">
      <div className="container-page">
        <div className="mb-6 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
            Monthly pricing
          </span>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            Billed monthly. Choose the tier that matches how much ongoing support you need —
            final scope is confirmed on a free assessment call.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:items-start">
          {PRICING_TIERS.map((tier) => {
            const isFeatured = tier.key === "mid";
            return (
              <div
                key={tier.key}
                className={
                  isFeatured
                    ? "relative flex flex-col rounded-2xl border-2 border-teal-text bg-white p-6 shadow-lg sm:-my-2 sm:py-8"
                    : "flex flex-col rounded-2xl border border-border-subtle bg-white p-6 shadow-sm"
                }
              >
                {isFeatured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-text px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                )}
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  {tier.label}
                </span>
                <p className="mt-2 text-3xl font-bold text-brand-slate">
                  {formatCurrency(tiers[tier.key])}
                  <span className="text-base font-medium text-text-muted"> / month</span>
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                  {tier.description}
                </p>
                <div className="mt-5">
                  <Button href="/contact" variant={isFeatured ? "primary" : "secondary"} className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
