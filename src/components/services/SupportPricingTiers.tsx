import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
          {PRICING_TIERS.map((tier, index) => {
            const isFeatured = tier.key === "mid";
            return (
              <ScrollReveal key={tier.key} index={index}>
                <div
                  className={
                    isFeatured
                      ? "relative flex flex-col rounded-[18px] bg-brand-slate p-6 text-white shadow-[0_20px_40px_rgba(20,20,26,0.12)] sm:-my-2 sm:py-8"
                      : "flex flex-col rounded-[18px] bg-white p-6 shadow-[0_1px_3px_rgba(20,20,26,0.04)]"
                  }
                >
                  {isFeatured && (
                    <span className="absolute -top-3 left-1/2 w-fit -translate-x-1/2 rounded-full bg-teal-on-slate px-3 py-1 text-xs font-bold tracking-widest text-brand-slate uppercase">
                      Most Popular
                    </span>
                  )}
                  <span
                    className={
                      isFeatured
                        ? "text-xs font-bold tracking-widest text-slate-muted uppercase"
                        : "text-xs font-bold tracking-widest text-text-muted uppercase"
                    }
                  >
                    {tier.label}
                  </span>
                  <p className={isFeatured ? "font-display mt-2 text-3xl font-bold" : "font-display mt-2 text-3xl font-bold text-brand-slate"}>
                    {formatCurrency(tiers[tier.key])}
                    <span className={isFeatured ? "text-base font-medium text-slate-muted" : "text-base font-medium text-text-muted"}>
                      {" "}
                      / month
                    </span>
                  </p>
                  <p
                    className={
                      isFeatured
                        ? "mt-3 flex-1 text-sm leading-relaxed text-slate-muted"
                        : "mt-3 flex-1 text-sm leading-relaxed text-text-muted"
                    }
                  >
                    {tier.description}
                  </p>
                  <div className="mt-5">
                    <Button href="/contact" variant={isFeatured ? "onDark" : "secondary"} className="w-full">
                      Get Started
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
