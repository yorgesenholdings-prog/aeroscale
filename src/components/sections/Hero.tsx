"use client";

import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroActivityFeed } from "@/components/sections/HeroActivityFeed";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container-page grid grid-cols-1 items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-24">
        <div>
          <Eyebrow className="animate-fade-up opacity-0">SMALL BUSINESS CONSULTING + SUPPORT</Eyebrow>
          <h1
            className="animate-fade-up mt-4 text-[clamp(2.6rem,4.6vw,4.1rem)] leading-[1.03] font-bold tracking-[-0.02em] text-brand-slate opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            Build a <span className="text-brand-teal">stronger</span> business from the inside
            out.
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-lg text-lg leading-relaxed text-text-muted opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            AeroScale helps small business owners solve problems, improve operations,
            strengthen marketing, build better systems, understand their numbers, and complete
            the projects that keep getting pushed aside. Get the expertise and execution support
            you need without building every department in-house.
          </p>
          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 opacity-0 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              href="/pricing"
              size="lg"
              onClick={() => trackEvent("hero_cta_clicked", { cta: "primary" })}
            >
              Get Started
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
          <p
            className="animate-fade-up mt-4 text-sm text-text-muted opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            One-time projects and ongoing support plans available.
          </p>
        </div>

        <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.35s" }}>
          <HeroActivityFeed />
        </div>
      </div>
    </section>
  );
}
