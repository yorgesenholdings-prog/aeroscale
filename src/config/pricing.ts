import type { PricingTierKey } from "@/types";

export interface TierDefinition {
  key: PricingTierKey;
  label: string;
  description: string;
}

/**
 * Generic fractional-consulting tier language, shared across every recurring
 * support service. Only the price differs per service — what each tier
 * includes in terms of access and attention stays consistent site-wide.
 */
export const PRICING_TIERS: TierDefinition[] = [
  {
    key: "base",
    label: "Base",
    description: "Defined monthly hours with a light touch, async support, and a monthly check-in.",
  },
  {
    key: "mid",
    label: "Mid",
    description: "Increased monthly hours, a dedicated point of contact, and faster turnaround.",
  },
  {
    key: "high",
    label: "High",
    description: "Maximum monthly hours, priority weekly access, and expanded deliverables.",
  },
];

export function formatCurrency(amount: number): string {
  // Round to the nearest cent first so a value like 72.5 (from a discount
  // calculation) is recognized as having exactly 2 decimal places, not 1 —
  // otherwise it would display as "$72.5" instead of "$72.50".
  const rounded = Math.round(amount * 100) / 100;
  const hasFraction = !Number.isInteger(rounded);
  return rounded.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: hasFraction ? 2 : 0,
    maximumFractionDigits: 2,
  });
}

/**
 * The multi-service discount rate applied to a combined subtotal, based on
 * how many distinct services are selected together. Applies to the raw
 * subtotal only — the result is not rounded afterward.
 */
export function getMultiServiceDiscountRate(serviceCount: number): number {
  if (serviceCount >= 4) return 0.2;
  if (serviceCount >= 2) return 0.1;
  return 0;
}
