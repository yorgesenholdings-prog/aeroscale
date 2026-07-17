import { PenLine } from "lucide-react";

interface ContentPlaceholderProps {
  label: string;
  description: string;
}

/**
 * A clearly marked placeholder for content that must come from the
 * business owner (e.g. an authentic founder story). Deliberately styled
 * so it cannot be mistaken for finished, published copy.
 */
export function ContentPlaceholder({ label, description }: ContentPlaceholderProps) {
  return (
    <div className="rounded-xl border-2 border-dashed border-border-subtle bg-surface p-6">
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-text-muted">
        <PenLine size={16} aria-hidden="true" />
        {label}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">{description}</p>
    </div>
  );
}
