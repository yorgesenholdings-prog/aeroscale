import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getServiceBySlug } from "@/config/services";
import { formatCurrency, getMultiServiceDiscountRate } from "@/config/pricing";
import type { BundleDefinition } from "@/config/bundles";

export function BundleCard({ bundle, featured = false }: { bundle: BundleDefinition; featured?: boolean }) {
  const services = bundle.serviceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const subtotal = services.reduce((sum, service) => sum + (service.tierPricing?.base ?? 0), 0);
  const discountRate = getMultiServiceDiscountRate(services.length);
  const total = subtotal * (1 - discountRate);

  return (
    <div
      className={
        featured
          ? "relative flex flex-col rounded-[18px] bg-brand-slate p-6 text-white shadow-[0_20px_40px_rgba(20,20,26,0.12)] sm:-my-3 sm:p-8 sm:py-10"
          : "flex flex-col rounded-[18px] bg-white p-6 shadow-[0_1px_3px_rgba(20,20,26,0.04)] sm:p-8"
      }
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 inline-flex w-fit -translate-x-1/2 items-center gap-1.5 rounded-full bg-teal-on-slate px-2.5 py-1 text-xs font-bold tracking-wide text-brand-slate uppercase">
          <Sparkles size={13} aria-hidden="true" />
          Most Popular
        </span>
      )}
      <h3 className={featured ? "mt-2 text-xl font-bold" : "mt-2 text-xl font-bold text-brand-slate"}>
        {bundle.name}
      </h3>
      <p className={featured ? "mt-2 text-sm leading-relaxed text-slate-muted" : "mt-2 text-sm leading-relaxed text-text-muted"}>
        {bundle.description}
      </p>

      <ul className="mt-5 space-y-2">
        {services.map((service) => (
          <li
            key={service.slug}
            className={featured ? "flex items-start gap-2 text-sm text-white" : "flex items-start gap-2 text-sm text-text-primary"}
          >
            <Check
              size={16}
              aria-hidden="true"
              className={featured ? "mt-0.5 shrink-0 text-teal-on-slate" : "mt-0.5 shrink-0 text-teal-text"}
            />
            <Link
              href={`/services/${service.category}/${service.slug}`}
              className={featured ? "hover:text-teal-on-slate hover:underline" : "hover:text-teal-text hover:underline"}
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className={featured ? "mt-6 rounded-2xl bg-white/[0.06] p-4" : "mt-6 rounded-2xl bg-surface p-4"}>
        <div className={featured ? "flex items-center justify-between text-sm text-slate-muted" : "flex items-center justify-between text-sm text-text-muted"}>
          <span>Base-tier subtotal</span>
          <span>{formatCurrency(subtotal)}/mo</span>
        </div>
        <div className={featured ? "mt-1.5 flex items-center justify-between text-sm text-teal-on-slate" : "mt-1.5 flex items-center justify-between text-sm text-teal-text"}>
          <span>Multi-service discount ({Math.round(discountRate * 100)}%)</span>
          <span>&minus;{formatCurrency(subtotal * discountRate)}/mo</span>
        </div>
        <div
          className={
            featured
              ? "mt-2 flex items-center justify-between border-t border-white/[0.1] pt-2"
              : "mt-2 flex items-center justify-between border-t border-border-subtle pt-2"
          }
        >
          <span className={featured ? "text-sm font-semibold text-white" : "text-sm font-semibold text-text-primary"}>
            Example total
          </span>
          <span className={featured ? "font-display text-2xl font-bold" : "font-display text-2xl font-bold text-brand-slate"}>
            {formatCurrency(total)}
            <span className={featured ? "text-sm font-medium text-slate-muted" : "text-sm font-medium text-text-muted"}>
              /mo
            </span>
          </span>
        </div>
      </div>
      <p className={featured ? "mt-3 text-xs leading-relaxed text-slate-muted" : "mt-3 text-xs leading-relaxed text-text-muted"}>
        Shown at the Base tier for each service. Choosing Mid or High tiers for any service
        changes the total — final pricing is confirmed on a free assessment call.
      </p>

      <Button href="/contact" variant={featured ? "onDark" : "primary"} size="lg" className="mt-6">
        Discuss This Bundle
      </Button>
    </div>
  );
}
