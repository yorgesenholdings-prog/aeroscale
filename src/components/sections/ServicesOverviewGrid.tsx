"use client";

import { useEffect } from "react";
import { ArrowRight, ClipboardList, Repeat } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { AnalyticsLink } from "@/components/ui/AnalyticsLink";
import { trackEvent } from "@/lib/analytics";

const categories = [
  {
    slug: "projects" as const,
    title: "Projects",
    description:
      "Focused, one-time engagements with a defined scope and finish line — strategic plans, business plans, automation builds, SOPs, and more.",
    icon: ClipboardList,
  },
  {
    slug: "support" as const,
    title: "Support",
    description:
      "Ongoing, recurring engagements that flex with your business month to month — strategy, marketing execution, reporting, automation maintenance, and more.",
    icon: Repeat,
  },
];

export function ServicesOverviewGrid() {
  useEffect(() => {
    trackEvent("services_viewed", { location: "homepage" });
  }, []);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="HOW WE HELP"
          heading="A full suite of support built around what your business needs next."
          supporting="Some businesses need help finishing one important project. Others need an ongoing consulting and implementation partner. AeroScale provides both."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {categories.map((category) => (
            <AnalyticsLink
              key={category.slug}
              href={`/services/${category.slug}`}
              eventName="service_card_clicked"
              eventProperties={{ service: category.slug }}
              className="group flex flex-col rounded-xl border border-border-subtle bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-text hover:shadow-md"
            >
              <IconBadge icon={category.icon} size="lg" />
              <h3 className="mt-5 text-xl font-semibold text-brand-slate group-hover:text-teal-text">
                {category.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {category.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-text">
                Explore {category.title.toLowerCase()}
                <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </span>
            </AnalyticsLink>
          ))}
        </div>
      </div>
    </section>
  );
}
