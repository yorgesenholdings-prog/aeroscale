"use client";

import { useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/config/services";
import { trackEvent } from "@/lib/analytics";

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

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
