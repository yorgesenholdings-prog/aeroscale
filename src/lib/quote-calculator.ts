import { getServiceBySlug } from "@/config/services";
import { getMultiServiceDiscountRate } from "@/config/pricing";
import type { PricingTierKey } from "@/types";

export interface QuoteSelectionState {
  projectSlugs: string[];
  /** Selected recurring services and the tier chosen for each. */
  supportSelections: Record<string, PricingTierKey>;
}

export interface QuoteLineItem {
  slug: string;
  name: string;
  price: number;
  tier?: PricingTierKey;
}

export interface QuoteBillingGroup {
  subtotal: number;
  discount: number;
  total: number;
  items: QuoteLineItem[];
}

export interface QuoteResult {
  selectedCount: number;
  discountRate: number;
  oneTime: QuoteBillingGroup | null;
  recurring: QuoteBillingGroup | null;
}

export function computeQuote(selection: QuoteSelectionState): QuoteResult {
  const projectItems: QuoteLineItem[] = selection.projectSlugs.flatMap((slug) => {
    const service = getServiceBySlug(slug);
    if (!service || service.oneTimePrice === undefined) return [];
    return [{ slug: service.slug, name: service.name, price: service.oneTimePrice }];
  });

  const supportItems: QuoteLineItem[] = Object.entries(selection.supportSelections).flatMap(
    ([slug, tier]) => {
      const service = getServiceBySlug(slug);
      if (!service?.tierPricing) return [];
      return [{ slug, name: service.name, tier, price: service.tierPricing[tier] }];
    }
  );

  // The discount tier is based on the TOTAL number of services selected
  // across both billing types, even though the two subtotals are billed
  // (and therefore discounted and totaled) separately.
  const selectedCount = projectItems.length + supportItems.length;
  const discountRate = getMultiServiceDiscountRate(selectedCount);

  function buildGroup(items: QuoteLineItem[]): QuoteBillingGroup | null {
    if (items.length === 0) return null;
    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const discount = subtotal * discountRate;
    return { subtotal, discount, total: subtotal - discount, items };
  }

  return {
    selectedCount,
    discountRate,
    oneTime: buildGroup(projectItems),
    recurring: buildGroup(supportItems),
  };
}
