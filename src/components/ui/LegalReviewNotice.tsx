import { AlertTriangle } from "lucide-react";

/**
 * VISIBLE NOTICE — DO NOT REMOVE BEFORE LAUNCH.
 * This page is a thorough, good-faith legal document, but it has not been
 * reviewed by an attorney and must be before this site is used for the
 * live business — data-privacy and consumer-protection requirements vary
 * by state and country and change over time.
 */
export function LegalReviewNotice() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-dashed border-border-subtle bg-surface p-5">
      <AlertTriangle size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
      <p className="text-sm leading-relaxed text-text-muted">
        <strong className="text-text-primary">Pending legal review.</strong>{" "}
        This page has not yet been reviewed by an attorney. Because data-privacy and
        consumer-protection requirements vary by state and country, it should be reviewed by
        qualified legal counsel licensed in AeroScale&apos;s operating jurisdiction before this
        site is used for the live business.
      </p>
    </div>
  );
}
