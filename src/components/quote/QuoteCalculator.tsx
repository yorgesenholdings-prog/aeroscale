"use client";

import { useMemo, useState } from "react";
import { ProjectServiceRow } from "@/components/quote/ProjectServiceRow";
import { SupportServiceRow } from "@/components/quote/SupportServiceRow";
import { QuoteSummary } from "@/components/quote/QuoteSummary";
import { getServicesByCategory } from "@/config/services";
import { computeQuote } from "@/lib/quote-calculator";
import type { PricingTierKey } from "@/types";

const projectServices = getServicesByCategory("projects");
const supportServices = getServicesByCategory("support");

export function QuoteCalculator() {
  const [projectSlugs, setProjectSlugs] = useState<string[]>([]);
  const [supportSelections, setSupportSelections] = useState<Record<string, PricingTierKey>>({});

  function toggleProject(slug: string) {
    setProjectSlugs((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  function toggleSupport(slug: string) {
    setSupportSelections((prev) => {
      if (slug in prev) {
        const next = { ...prev };
        delete next[slug];
        return next;
      }
      return { ...prev, [slug]: "base" };
    });
  }

  function setSupportTier(slug: string, tier: PricingTierKey) {
    setSupportSelections((prev) => ({ ...prev, [slug]: tier }));
  }

  function removeProject(slug: string) {
    setProjectSlugs((prev) => prev.filter((s) => s !== slug));
  }

  function removeSupport(slug: string) {
    setSupportSelections((prev) => {
      const next = { ...prev };
      delete next[slug];
      return next;
    });
  }

  const result = useMemo(
    () => computeQuote({ projectSlugs, supportSelections }),
    [projectSlugs, supportSelections]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-10">
      <div className="space-y-10">
        <div>
          <h2 className="text-lg font-bold text-brand-slate">One-Time Projects</h2>
          <p className="mt-1 text-sm text-text-muted">
            Select any focused, one-time projects you&apos;re interested in.
          </p>
          <div className="mt-4 space-y-3">
            {projectServices.map((service) => (
              <ProjectServiceRow
                key={service.slug}
                service={service}
                checked={projectSlugs.includes(service.slug)}
                onToggle={() => toggleProject(service.slug)}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-brand-slate">Recurring Support</h2>
          <p className="mt-1 text-sm text-text-muted">
            Select any ongoing support you need, then choose a tier for each.
          </p>
          <div className="mt-4 space-y-3">
            {supportServices.map((service) => (
              <SupportServiceRow
                key={service.slug}
                service={service}
                tier={supportSelections[service.slug]}
                onToggle={() => toggleSupport(service.slug)}
                onTierChange={(tier) => setSupportTier(service.slug, tier)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-24">
        <QuoteSummary result={result} onRemoveProject={removeProject} onRemoveSupport={removeSupport} />
      </div>
    </div>
  );
}
