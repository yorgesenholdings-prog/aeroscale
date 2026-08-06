import { offerPricing } from "@/config/offer";

interface OfferPriceDisplayProps {
  size?: "sm" | "lg";
  /** Use "onDark" when this sits on a dark/featured surface. */
  tone?: "onLight" | "onDark";
  className?: string;
}

const sizeClasses: Record<NonNullable<OfferPriceDisplayProps["size"]>, { standard: string; promo: string }> = {
  sm: { standard: "text-base", promo: "text-2xl" },
  lg: { standard: "text-xl", promo: "text-4xl" },
};

const toneClasses: Record<NonNullable<OfferPriceDisplayProps["tone"]>, string> = {
  onLight: "text-teal-text",
  onDark: "text-teal-on-slate",
};

/** The one place strikethrough offer-pricing markup exists — every price display on the site reuses this. */
export function OfferPriceDisplay({ size = "lg", tone = "onLight", className = "" }: OfferPriceDisplayProps) {
  const sizes = sizeClasses[size];

  if (!offerPricing.promoActive) {
    return (
      <span className={`font-display font-bold ${sizes.promo} ${className}`}>
        {offerPricing.standardPriceLabel}
        <span className="text-sm font-normal text-text-muted">{offerPricing.priceSuffix}</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className={`${sizes.standard} font-medium text-text-muted line-through`}>
        {offerPricing.standardPriceLabel}
      </span>
      <span className={`font-display font-bold ${sizes.promo} ${toneClasses[tone]}`}>
        {offerPricing.promoPriceLabel}
      </span>
      <span className="text-sm font-normal text-text-muted">{offerPricing.priceSuffix}</span>
    </span>
  );
}
