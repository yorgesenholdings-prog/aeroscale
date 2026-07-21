import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import type { ServiceDefinition } from "@/types";

export function OftenPairedWith({ service }: { service: ServiceDefinition }) {
  return (
    <section className="border-t border-border-subtle bg-white py-12 md:py-16">
      <div className="container-page max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
          Often Paired With
        </span>
        <Link
          href={`/services/${service.category}/${service.slug}`}
          className="group mt-4 flex items-center gap-4 rounded-xl border border-border-subtle bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-text hover:shadow-md"
        >
          <IconBadge icon={service.icon} />
          <div className="flex-1">
            <p className="font-semibold text-brand-slate group-hover:text-teal-text">
              {service.name}
            </p>
            <p className="mt-0.5 text-sm text-text-muted">{service.cardDescription}</p>
          </div>
          <ArrowRight
            size={18}
            aria-hidden="true"
            className="shrink-0 text-teal-text transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
