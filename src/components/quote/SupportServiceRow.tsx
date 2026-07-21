import { PRICING_TIERS, formatCurrency } from "@/config/pricing";
import type { PricingTierKey, ServiceDefinition } from "@/types";

interface SupportServiceRowProps {
  service: ServiceDefinition;
  tier: PricingTierKey | undefined;
  onToggle: () => void;
  onTierChange: (tier: PricingTierKey) => void;
}

export function SupportServiceRow({ service, tier, onToggle, onTierChange }: SupportServiceRowProps) {
  const checked = tier !== undefined;

  return (
    <div
      className={`rounded-xl border p-4 transition-colors ${
        checked ? "border-teal-text bg-surface-muted" : "border-border-subtle bg-white hover:border-teal-text"
      }`}
    >
      <label className="flex cursor-pointer items-center justify-between gap-4">
        <span className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={onToggle}
            className="h-5 w-5 shrink-0 rounded border-border-subtle text-brand-teal focus-visible:outline-2 focus-visible:outline-brand-teal focus-visible:outline-offset-2"
          />
          <span className="font-medium text-text-primary">{service.name}</span>
        </span>
        {checked && service.tierPricing && (
          <span className="shrink-0 text-sm font-semibold text-brand-slate">
            {formatCurrency(service.tierPricing[tier])}/mo
          </span>
        )}
      </label>

      {checked && service.tierPricing && (
        <div className="mt-3 grid grid-cols-3 gap-2 pl-8">
          {PRICING_TIERS.map((tierOption) => {
            const inputId = `${service.slug}-${tierOption.key}`;
            const isSelected = tier === tierOption.key;
            return (
              <div key={tierOption.key}>
                <input
                  type="radio"
                  id={inputId}
                  name={`tier-${service.slug}`}
                  checked={isSelected}
                  onChange={() => onTierChange(tierOption.key)}
                  className="peer sr-only"
                />
                <label
                  htmlFor={inputId}
                  className="block cursor-pointer rounded-lg border border-border-subtle bg-white px-2 py-2 text-center text-xs font-medium text-text-muted transition-colors hover:border-teal-text peer-checked:border-teal-text peer-checked:bg-surface-muted peer-checked:font-semibold peer-checked:text-brand-slate peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-brand-teal peer-focus-visible:outline-offset-2"
                >
                  {tierOption.label}
                  <br />
                  {formatCurrency(service.tierPricing![tierOption.key])}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
