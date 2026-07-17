"use client";

import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroDiagram } from "@/components/sections/HeroDiagram";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="border-b border-border-subtle bg-white">
      <div className="container-page grid grid-cols-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>SMALL BUSINESS CONSULTING + SUPPORT</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            Build a stronger business from the inside out.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            AeroScale helps small business owners solve problems, improve operations,
            strengthen marketing, build better systems, understand their numbers, and complete
            the projects that keep getting pushed aside. Get the expertise and execution support
            you need without building every department in-house.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/contact"
              size="lg"
              onClick={() => trackEvent("hero_cta_clicked", { cta: "primary" })}
            >
              Get a Free Business Assessment
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="lg"
              onClick={() => trackEvent("hero_cta_clicked", { cta: "secondary" })}
            >
              Explore Our Services
            </Button>
          </div>
          <p className="mt-4 text-sm text-text-muted">
            One-time projects and ongoing support plans available.
          </p>
        </div>

        <HeroDiagram />
      </div>
    </section>
  );
}
