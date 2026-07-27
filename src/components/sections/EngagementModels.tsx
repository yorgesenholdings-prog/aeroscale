import Link from "next/link";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getServicesByCategory } from "@/config/services";

const projectServices = getServicesByCategory("projects");
const supportServices = getServicesByCategory("support");

export function EngagementModels() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="FLEXIBLE SUPPORT"
          heading="Bring us one project or make us an extension of your team."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal index={0} className="flex">
            <div className="flex flex-1 flex-col rounded-[18px] bg-white p-8 shadow-[0_1px_3px_rgba(20,20,26,0.04)]">
              <h3 className="text-xl font-bold text-brand-slate">One-Time Projects</h3>
              <ul className="mt-5 flex-1 space-y-3">
                {projectServices.map((service) => (
                  <li key={service.slug} className="flex items-start gap-2.5 text-sm text-text-primary">
                    <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                    <Link
                      href={`/services/${service.category}/${service.slug}`}
                      className="hover:text-teal-text hover:underline"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button href="/services/projects" variant="secondary" className="mt-8">
                Explore Project Services
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal index={1} className="flex">
            <div className="flex flex-1 flex-col rounded-[18px] bg-brand-slate p-8 text-white shadow-[0_1px_3px_rgba(20,20,26,0.04)]">
              <h3 className="text-xl font-bold text-white">Ongoing Support</h3>
              <ul className="mt-5 flex-1 space-y-3">
                {supportServices.map((service) => (
                  <li key={service.slug} className="flex items-start gap-2.5 text-sm text-white/90">
                    <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-on-slate" />
                    <Link
                      href={`/services/${service.category}/${service.slug}`}
                      className="hover:text-teal-on-slate hover:underline"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button href="/services/support" variant="onDark" className="mt-8">
                Explore Ongoing Support
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
