"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackEvent } from "@/lib/analytics";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, goals, challenges, team, customers, tools, and constraints.",
  },
  {
    number: "02",
    title: "Prioritize",
    description:
      "We identify the opportunities that matter most based on impact, urgency, cost, and effort.",
  },
  {
    number: "03",
    title: "Build or Improve",
    description:
      "We configure the pillars of the Full System your business needs — automated follow-up, review requests, an AI receptionist, and more.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We help implement the work, measure progress, solve problems, and identify the next valuable improvement.",
  },
];

export function ProcessSteps() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-surface py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          heading="Start with the problem, then build the right solution."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} index={index} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-bold text-brand-slate">{step.number}</span>
                {index < steps.length - 1 && (
                  <span aria-hidden="true" className="hidden h-px flex-1 bg-brand-teal/40 lg:block" />
                )}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-brand-slate">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12">
          <Button
            href="/pricing"
            size="lg"
            onClick={() => trackEvent("assessment_cta_clicked", { location: "how-it-works" })}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
