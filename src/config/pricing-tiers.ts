export type PricingTierSlug = "foundation" | "growth-system" | "full-system";

export interface PricingTierContent {
  slug: PricingTierSlug;
  tierNumber: 1 | 2 | 3;
  name: string;
  positioning: string;
  priceLabel: string;
  included: string[];
  /** The middle tier gets the dark-card "recommended" treatment. */
  featured?: boolean;
}

export const pricingTiers: PricingTierContent[] = [
  {
    slug: "foundation",
    tierNumber: 1,
    name: "Foundation",
    positioning: "The low-commitment entry point",
    priceLabel: "$499",
    included: [
      "Review Follow-Up & Review Response Automation",
      "Ad Optimization Service",
      "Missed Call Text-Back",
    ],
  },
  {
    slug: "growth-system",
    tierNumber: 2,
    name: "Growth System",
    positioning: "For businesses ready to compound growth",
    priceLabel: "$999",
    included: [
      "Review Follow-Up & Review Response Automation",
      "Ad Optimization Service",
      "Missed Call Text-Back",
      "Database Reactivation",
      "AI Lead Nurturing",
    ],
    featured: true,
  },
  {
    slug: "full-system",
    tierNumber: 3,
    name: "Full System",
    positioning: "Run the whole system on autopilot",
    priceLabel: "$2,199",
    included: [
      "Review Follow-Up & Review Response Automation",
      "Ad Optimization Service",
      "Missed Call Text-Back",
      "Database Reactivation",
      "AI Lead Nurturing",
      "AI Receptionist/Intake",
      "Full Remarketing Sequences",
      "Coaching/Consulting",
      "Referral Program Automation",
    ],
  },
];

export function getPricingTier(slug: PricingTierSlug): PricingTierContent | undefined {
  return pricingTiers.find((tier) => tier.slug === slug);
}
