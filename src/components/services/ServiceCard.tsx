import { ArrowRight } from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import { AnalyticsLink } from "@/components/ui/AnalyticsLink";
import type { ServiceDefinition } from "@/types";

export function ServiceCard({ service }: { service: ServiceDefinition }) {
  return (
    <AnalyticsLink
      href={`/services/${service.category}/${service.slug}`}
      eventName="service_card_clicked"
      eventProperties={{ service: service.slug }}
      className="group flex flex-col rounded-[18px] bg-white p-6 shadow-[0_1px_3px_rgba(20,20,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(20,20,26,0.1)]"
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
