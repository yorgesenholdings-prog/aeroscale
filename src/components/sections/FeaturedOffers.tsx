import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChatSequenceVisual } from "@/components/sections/ChatSequenceVisual";
import { AdOptimizationDashboardVisual } from "@/components/sections/AdOptimizationDashboardVisual";
import { MoneyBackBadge } from "@/components/checkout/MoneyBackBadge";
import { landingPages, type LandingPageOfferSlug } from "@/config/landing-pages";

const featuredOfferSlugs: LandingPageOfferSlug[] = ["automation", "marketing-management"];

const offerTagLabels: Record<LandingPageOfferSlug, string> = {
  automation: "Automation",
  "marketing-management": "Marketing",
};

/**
 * The two flagship, single-price offers AeroScale actively promotes.
 * Pulls copy and pricing straight from the /lp pages' own config so the
 * homepage, /services, and the standalone landing pages never drift apart.
 */
export function FeaturedOffers() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="WHAT WE DO"
          heading="Two focused services. Built to run without you thinking about them."
        />
        <div className="mt-14 grid grid-cols-1 items-start gap-7 lg:grid-cols-2">
          {featuredOfferSlugs.map((slug, index) => {
            const offer = landingPages[slug];
            const isFeatured = slug === "marketing-management";

            return (
              <ScrollReveal key={slug} index={index}>
                <div
                  className={
                    isFeatured
                      ? "flex flex-col rounded-[18px] bg-brand-slate p-9 pb-12 text-white shadow-[0_1px_3px_rgba(20,20,26,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(20,20,26,0.1)] lg:-mt-5"
                      : "flex flex-col rounded-[18px] bg-white p-9 shadow-[0_1px_3px_rgba(20,20,26,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(20,20,26,0.1)]"
                  }
                >
                  {isFeatured ? <AdOptimizationDashboardVisual /> : <ChatSequenceVisual />}

                  <span
                    className={
                      isFeatured
                        ? "mt-6 inline-block w-fit rounded-full bg-teal-on-slate px-3 py-1 text-[11.5px] font-semibold tracking-wide text-brand-slate uppercase"
                        : "mt-6 inline-block w-fit rounded-full bg-accent-pale px-3 py-1 text-[11.5px] font-semibold tracking-wide text-brand-teal uppercase"
                    }
                  >
                    {offerTagLabels[slug]}
                  </span>

                  <h3 className="font-display mt-2.5 text-2xl font-semibold tracking-[-0.01em]">
                    {offer.offerLabel}
                  </h3>
                  <p
                    className={
                      isFeatured
                        ? "mt-2.5 text-[15px] leading-relaxed text-slate-muted"
                        : "mt-2.5 text-[15px] leading-relaxed text-text-muted"
                    }
                  >
                    {offer.subheadline}
                  </p>

                  <div className="mt-7 flex items-baseline gap-1.5">
                    <span className="font-display text-[38px] font-bold tracking-[-0.01em]">
                      {offer.priceLabel.split("/")[0]}
                    </span>
                    <span className={isFeatured ? "text-sm text-slate-muted" : "text-sm text-text-muted"}>
                      / month
                    </span>
                  </div>

                  <ul className="mt-2 mb-8">
                    {offer.offerBullets.map((item, i) => (
                      <li
                        key={item}
                        className={
                          isFeatured
                            ? `flex items-start gap-2.5 py-2 text-[14.5px] text-slate-muted ${i > 0 ? "border-t border-white/[0.08]" : ""}`
                            : `flex items-start gap-2.5 py-2 text-[14.5px] text-brand-slate ${i > 0 ? "border-t border-brand-slate/[0.06]" : ""}`
                        }
                      >
                        <span
                          className={
                            isFeatured
                              ? "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-on-slate"
                              : "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal"
                          }
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={offer.path}
                    variant={isFeatured ? "onDark" : "primary"}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {offer.ctaLabel}
                  </Button>
                  <MoneyBackBadge tone={isFeatured ? "dark" : "light"} className="mt-4 w-fit" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
