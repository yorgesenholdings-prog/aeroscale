import { Check } from "lucide-react";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";
import { OfferPriceDisplay } from "@/components/offer/OfferPriceDisplay";
import { offer, pillars } from "@/config/offer";

interface OfferCardProps {
  ctaLabel: string;
  ctaHref: string;
}

/** The single "buy" card — there's only one product now, so it always gets the dark/featured treatment. */
export function OfferCard({ ctaLabel, ctaHref }: OfferCardProps) {
  return (
    <div className="relative flex flex-col rounded-[18px] bg-brand-slate p-8 text-white shadow-[0_20px_40px_rgba(20,20,26,0.12)] sm:p-10">
      <span className="w-fit rounded-full bg-teal-on-slate px-3 py-1 text-xs font-bold tracking-widest text-brand-slate uppercase">
        Limited-Time Pricing
      </span>

      <h3 className="font-display mt-4 text-2xl font-bold">{offer.name}</h3>

      <div className="mt-6">
        <OfferPriceDisplay size="lg" tone="onDark" />
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {pillars.map((pillar) => (
          <li key={pillar.slug} className="flex items-start gap-2.5 text-sm text-white">
            <Check size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-on-slate" />
            {pillar.name}
          </li>
        ))}
      </ul>

      <CheckoutButton href={ctaHref} variant="onDark" size="lg" className="mt-8 w-full">
        {ctaLabel}
      </CheckoutButton>
    </div>
  );
}
