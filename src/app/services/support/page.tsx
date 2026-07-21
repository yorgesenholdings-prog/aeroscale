import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { getServicesByCategory } from "@/config/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Ongoing Small Business Consulting Support | AeroScale",
  description:
    "Recurring small business support — strategy sessions, marketing execution, advertising management, reporting, automation maintenance, and more, priced in tiers.",
  path: "/services/support",
});

const supportServices = getServicesByCategory("support");

export default function SupportOverviewPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Support", path: "/services/support" },
        ]}
      />

      <section className="border-b border-border-subtle bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
            ONGOING SUPPORT
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            Recurring support that flexes with your business.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Support is the right fit when your business has continuing needs — strategy,
            marketing, reporting, systems — and wants consistent access to help without hiring a
            full-time specialist. Each service below is billed monthly at a tier that matches how
            much support you need.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="ALL SUPPORT SERVICES" heading="Choose the ongoing support you need" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {supportServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container-page max-w-3xl">
          <a
            href="/bundles"
            className="group flex items-center justify-between rounded-xl border border-border-subtle bg-surface p-5 hover:border-teal-text"
          >
            <span className="text-sm font-semibold text-brand-slate group-hover:text-teal-text">
              Combining services? See our most popular support bundles and pricing.
            </span>
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="shrink-0 text-teal-text transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page flex flex-col items-start gap-6 rounded-2xl bg-brand-slate p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Not sure which support service fits your business?
            </h2>
            <p className="mt-3 text-white/80">
              Request a free assessment and we&apos;ll recommend where to start.
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
