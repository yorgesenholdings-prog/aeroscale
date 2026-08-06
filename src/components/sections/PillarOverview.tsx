import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { pillars } from "@/config/offer";

/** Lightweight "what we do" pass over all 7 pillars — no pricing, no build-status detail, that lives on /pricing. */
export function PillarOverview() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.slug} index={index}>
              <div className="flex h-full flex-col rounded-2xl bg-surface p-6 shadow-[0_1px_3px_rgba(20,20,26,0.04)]">
                <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-teal-on-dark">
                  {pillar.pillarNumber}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold text-brand-slate">{pillar.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{pillar.headline}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/pricing" size="lg">
            See Full Pricing &amp; Details
          </Button>
        </div>
      </div>
    </section>
  );
}
