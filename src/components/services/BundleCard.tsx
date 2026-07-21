import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getServiceBySlug } from "@/config/services";
import { formatCurrency, getMultiServiceDiscountRate } from "@/config/pricing";
import type { BundleDefinition } from "@/config/bundles";

export function BundleCard({ bundle }: { bundle: BundleDefinition }) {
  const services = bundle.serviceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const subtotal = services.reduce((sum, service) => sum + (service.tierPricing?.base ?? 0), 0);
  const discountRate = getMultiServiceDiscountRate(services.length);
  const total = subtotal * (1 - discountRate);

  return (
    <div className="flex flex-col rounded-2xl border border-border-subtle bg-white p-6 shadow-sm sm:p-8">
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-surface-muted px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-teal-text">
        <Sparkles size={13} aria-hidden="true" />
        Most Popular
      </span>
      <h3 className="mt-4 text-xl font-bold text-brand-slate">{bundle.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{bundle.description}</p>

      <ul className="mt-5 space-y-2">
        {services.map((service) => (
          <li key={service.slug} className="flex items-start gap-2 text-sm text-text-primary">
            <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
            <Link
              href={`/services/${service.category}/${service.slug}`}
              className="hover:text-teal-text hover:underline"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-xl bg-surface p-4">
        <div className="flex items-center justify-between text-sm text-text-muted">
          <span>Base-tier subtotal</span>
          <span>{formatCurrency(subtotal)}/mo</span>
        </div>
        <div className="mt-1.5 flex items-center justify-between text-sm text-teal-text">
          <span>Multi-service discount ({Math.round(discountRate * 100)}%)</span>
          <span>&minus;{formatCurrency(subtotal * discountRate)}/mo</span>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-border-subtle pt-2">
          <span className="text-sm font-semibold text-text-primary">Example total</span>
          <span className="text-2xl font-bold text-brand-slate">
            {formatCurrency(total)}
            <span className="text-sm font-medium text-text-muted">/mo</span>
          </span>
        </div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-text-muted">
        Shown at the Base tier for each service. Choosing Mid or High tiers for any service
        changes the total — final pricing is confirmed on a free assessment call.
      </p>

      <Button href="/contact" size="lg" className="mt-6">
        Discuss This Bundle
      </Button>
    </div>
  );
}
