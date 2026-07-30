import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { PricingTierContent } from "@/config/pricing-tiers";

interface TierCardProps {
  tier: PricingTierContent;
  ctaLabel: string;
  ctaHref: string;
}

export function TierCard({ tier, ctaLabel, ctaHref }: TierCardProps) {
  const isFeatured = Boolean(tier.featured);

  return (
    <div
      className={
        isFeatured
          ? "relative flex flex-col rounded-[18px] bg-brand-slate p-8 text-white shadow-[0_20px_40px_rgba(20,20,26,0.12)] lg:-my-4 lg:py-10"
          : "flex flex-col rounded-[18px] bg-white p-8 shadow-[0_1px_3px_rgba(20,20,26,0.04)]"
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
            : "text-xs font-bold tracking-widest text-teal-text uppercase"
        }
      >
        Tier {tier.tierNumber}
      </span>

      <h3
        className={
          isFeatured
            ? "font-display mt-2 text-2xl font-bold"
            : "font-display mt-2 text-2xl font-bold text-brand-slate"
        }
      >
        {tier.name}
      </h3>
      <p className={isFeatured ? "mt-1.5 text-sm text-slate-muted" : "mt-1.5 text-sm text-text-muted"}>
        {tier.positioning}
      </p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="font-display text-4xl font-bold">{tier.priceLabel}</span>
        <span className={isFeatured ? "text-sm text-slate-muted" : "text-sm text-text-muted"}>/ month</span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {tier.included.map((item) => (
          <li
            key={item}
            className={isFeatured ? "flex items-start gap-2.5 text-sm text-white" : "flex items-start gap-2.5 text-sm text-text-primary"}
          >
            <Check
              size={17}
              aria-hidden="true"
              className={isFeatured ? "mt-0.5 shrink-0 text-teal-on-slate" : "mt-0.5 shrink-0 text-teal-text"}
            />
            {item}
          </li>
        ))}
      </ul>

      <Button href={ctaHref} variant={isFeatured ? "onDark" : "primary"} size="lg" className="mt-8 w-full">
        {ctaLabel}
      </Button>
    </div>
  );
}
