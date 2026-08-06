"use client";

import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { pillars, type OfferPillarSlug } from "@/config/offer";
import { PillarStatusBadge } from "@/components/offer/PillarStatusBadge";

/** Shared included/not-included breakdown, reused on /pricing and both /lp pages so they can never drift apart. */
export function PillarDetailAccordion() {
  const [openSlug, setOpenSlug] = useState<OfferPillarSlug | null>(null);

  return (
    <div className="divide-y divide-border-subtle rounded-2xl bg-white shadow-[0_1px_3px_rgba(20,20,26,0.04)]">
      {pillars.map((pillar) => {
        const isOpen = openSlug === pillar.slug;
        const panelId = `pillar-detail-${pillar.slug}`;
        const buttonId = `pillar-detail-${pillar.slug}-button`;

        return (
          <div key={pillar.slug}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenSlug(isOpen ? null : pillar.slug)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="font-display text-lg font-semibold text-brand-slate">{pillar.name}</span>
                  <PillarStatusBadge status={pillar.buildStatus} />
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="space-y-4 px-6 pb-8">
                {pillar.rollingOutNote && (
                  <p className="text-sm leading-relaxed text-text-muted italic">{pillar.rollingOutNote}</p>
                )}
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                  <ul className="space-y-2">
                    {pillar.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-primary">
                        <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    {pillar.notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                        <X size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-error" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
