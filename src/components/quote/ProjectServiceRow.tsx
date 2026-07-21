import { formatCurrency } from "@/config/pricing";
import type { ServiceDefinition } from "@/types";

interface ProjectServiceRowProps {
  service: ServiceDefinition;
  checked: boolean;
  onToggle: () => void;
}

export function ProjectServiceRow({ service, checked, onToggle }: ProjectServiceRowProps) {
  return (
    <label
      className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl border p-4 transition-colors ${
        checked ? "border-teal-text bg-surface-muted" : "border-border-subtle bg-white hover:border-teal-text"
      }`}
    >
      <span className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          className="h-5 w-5 shrink-0 rounded border-border-subtle text-brand-teal focus-visible:outline-2 focus-visible:outline-brand-teal focus-visible:outline-offset-2"
        />
        <span className="font-medium text-text-primary">{service.name}</span>
      </span>
      <span className="shrink-0 text-sm font-semibold text-brand-slate">
        {formatCurrency(service.oneTimePrice ?? 0)}
      </span>
    </label>
  );
}
