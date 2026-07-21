import type { ReactNode } from "react";
import { Check, Info } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectPriceBlock } from "@/components/services/ProjectPriceBlock";
import { SupportPricingTiers } from "@/components/services/SupportPricingTiers";
import { OftenPairedWith } from "@/components/services/OftenPairedWith";
import { JsonLd, serviceJsonLd } from "@/components/seo/JsonLd";
import { getRelatedServices } from "@/config/services";
import type { ServiceDefinition } from "@/types";

interface ServicePageTemplateProps {
  service: ServiceDefinition;
  /** Optional extra section rendered directly after the intro, before "Problems this service solves". */
  afterIntro?: ReactNode;
}

const categoryMeta = {
  projects: { label: "Projects", path: "/services/projects" },
  support: { label: "Support", path: "/services/support" },
} as const;

export function ServicePageTemplate({ service, afterIntro }: ServicePageTemplateProps) {
  const relatedServices = getRelatedServices(service);
  const category = categoryMeta[service.category];
  const path = `/services/${service.category}/${service.slug}`;

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          path,
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: category.label, path: category.path },
          { name: service.name, path },
        ]}
      />

      <section className="border-b border-border-subtle bg-white py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
            {service.eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            {service.h1}
          </h1>
          <div className="mt-6 space-y-4">
            {service.intro.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {service.category === "projects" && service.oneTimePrice !== undefined && (
        <ProjectPriceBlock price={service.oneTimePrice} />
      )}
      {service.category === "support" && service.tierPricing && (
        <SupportPricingTiers tiers={service.tierPricing} />
      )}

      {afterIntro}

      <section className="bg-surface py-16 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="THE CHALLENGE" heading="Problems this service solves" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.problemsSolved.map((problem) => (
              <li key={problem} className="flex items-start gap-3 rounded-lg border border-border-subtle bg-white p-4">
                <IconBadge icon={Check} size="md" />
                <span className="pt-1.5 text-sm text-text-primary">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="WHAT'S INCLUDED" heading="Specific services" headingLevel="h2" />
            <ul className="mt-6 space-y-2.5">
              {service.specificServices.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-primary">
                  <Check size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                  {item}
                </li>
              ))}
            </ul>
            {service.notes && service.notes.length > 0 && (
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-border-subtle bg-surface p-4">
                <Info size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                <ul className="space-y-1.5 text-sm leading-relaxed text-text-muted">
                  {service.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <SectionHeading eyebrow="WHAT YOU MAY WALK AWAY WITH" heading="Potential deliverables" headingLevel="h2" />
            <ul className="mt-6 space-y-2.5">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-primary">
                  <Check size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="IS THIS A FIT" heading="Who this service is for" headingLevel="h2" />
            <ul className="mt-6 space-y-3">
              {service.whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-primary">
                  <Check size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="IN PRACTICE" heading="Example business situations" headingLevel="h2" />
            <div className="mt-6 space-y-3">
              {service.exampleSituations.map((situation) => (
                <Card key={situation} className="p-4">
                  <p className="text-sm leading-relaxed text-text-primary">{situation}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="HOW WE WORK" heading="Engagement process" headingLevel="h2" />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step.title}>
                <span className="text-3xl font-bold text-brand-slate">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-slate">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="COMMON QUESTIONS" heading="Frequently asked questions" headingLevel="h2" />
          <div className="mt-8">
            <FaqAccordion items={service.faqs} idPrefix={`${service.slug}-faq`} />
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && <OftenPairedWith service={relatedServices[0]} />}

      <section className="border-t border-border-subtle bg-surface py-16 md:py-20">
        <div className="container-page flex flex-col items-start gap-6 rounded-2xl bg-brand-slate p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to talk about {service.name.toLowerCase()}?
            </h2>
            <p className="mt-3 text-white/80">
              Get a free business assessment and a practical recommendation for where to start.
            </p>
          </div>
          <Button href="/contact" size="lg" className="shrink-0">
            Get a Free Business Assessment
          </Button>
        </div>
      </section>
    </>
  );
}
