"use client";

import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { pricingTiers } from "@/config/pricing-tiers";
import { tierComponentDetails } from "@/config/pricing-tier-details";

export function TierDetailAccordion() {
  const [openSlug, setOpenSlug] = useState<string | null>(pricingTiers[0].slug);

  return (
    <div className="divide-y divide-border-subtle rounded-2xl bg-white shadow-[0_1px_3px_rgba(20,20,26,0.04)]">
      {pricingTiers.map((tier) => {
        const isOpen = openSlug === tier.slug;
        const components = tierComponentDetails[tier.slug];
        const panelId = `tier-detail-${tier.slug}`;
        const buttonId = `tier-detail-${tier.slug}-button`;

        return (
          <div key={tier.slug}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenSlug(isOpen ? null : tier.slug)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span>
                  <span className="font-display text-lg font-semibold text-brand-slate">
                    Tier {tier.tierNumber} — {tier.name}
                  </span>
                  <span className="ml-2 text-sm text-text-muted">
                    {tier.tierNumber === 1 ? "full breakdown" : "what's newly added"}
                  </span>
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="space-y-8 px-6 pb-8">
                {components.map((component) => (
                  <div key={component.name}>
                    <h4 className="font-display text-base font-semibold text-brand-slate">
                      {component.name}
                    </h4>
                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                      <ul className="space-y-2">
                        {component.included.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-text-primary">
                            <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {component.notIncluded.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                            <X size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-error" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
