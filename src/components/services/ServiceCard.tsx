import { ArrowRight } from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import { AnalyticsLink } from "@/components/ui/AnalyticsLink";
import type { ServiceDefinition } from "@/types";

export function ServiceCard({ service }: { service: ServiceDefinition }) {
  return (
    <AnalyticsLink
      href={`/services/${service.slug}`}
      eventName="service_card_clicked"
      eventProperties={{ service: service.slug }}
      className="group flex flex-col rounded-xl border border-border-subtle bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-text hover:shadow-md"
    >
      <IconBadge icon={service.icon} />
      <h3 className="mt-4 text-lg font-semibold text-brand-slate group-hover:text-teal-text">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
        {service.cardDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-text">
        Explore {service.name.toLowerCase()}
        <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
      </span>
    </AnalyticsLink>
  );
}
