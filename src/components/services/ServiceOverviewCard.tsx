import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import type { ServiceDefinition } from "@/types";

const engagementLabels: Record<ServiceDefinition["engagementType"], string> = {
  project: "Project-based",
  recurring: "Recurring",
  either: "Project or recurring",
};

export function ServiceOverviewCard({ service }: { service: ServiceDefinition }) {
  return (
    <div
      id={service.slug}
      className="scroll-mt-24 rounded-2xl border border-border-subtle bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <IconBadge icon={service.icon} size="lg" />
          <div>
            <h2 className="text-xl font-bold text-brand-slate">{service.name}</h2>
            <span className="mt-1 inline-block rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-semibold text-text-muted">
              {engagementLabels[service.engagementType]}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-text-muted">{service.intro[0]}</p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide text-text-muted">
            Common problems it solves
          </h3>
          <ul className="mt-2 space-y-1.5">
            {service.problemsSolved.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text-primary">
                <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide text-text-muted">
            Typical deliverables
          </h3>
          <ul className="mt-2 space-y-1.5">
            {service.deliverables.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text-primary">
                <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-text hover:text-teal-text-dark"
      >
        View full {service.name.toLowerCase()} page
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  );
}
