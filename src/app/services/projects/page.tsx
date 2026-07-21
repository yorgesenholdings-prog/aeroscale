import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { getServicesByCategory } from "@/config/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "One-Time Business Consulting Projects | AeroScale",
  description:
    "Focused, one-time small business consulting projects — strategic planning, business plans, market research, automation builds, SOP development, and more.",
  path: "/services/projects",
});

const projectServices = getServicesByCategory("projects");

export default function ProjectsOverviewPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Projects", path: "/services/projects" },
        ]}
      />

      <section className="border-b border-border-subtle bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
            ONE-TIME PROJECTS
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            Focused projects with a clear start and finish.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            A project is the right fit when you have one important piece of work that needs to
            get finished — a strategic plan, a business plan, a set of SOPs, an automation build.
            Each project below has a defined scope, a flat fee, and an end date.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="ALL PROJECT SERVICES" heading="Choose a project to get started" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page flex flex-col items-start gap-6 rounded-2xl bg-brand-slate p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Not sure which project fits your business?
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
