"use client";

import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { TextField, CheckboxField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { getStoredUtmParams } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import type { LandingPageOfferSlug } from "@/config/landing-pages";

const HONEYPOT_FIELD = "company_fax_number";

interface LandingPageLeadFormProps {
  offerSlug: LandingPageOfferSlug;
  offerLabel: string;
  ctaLabel: string;
}

interface FormState {
  fullName: string;
  workEmail: string;
  phone: string;
  businessName: string;
  consent: boolean;
}

const initialState: FormState = {
  fullName: "",
  workEmail: "",
  phone: "",
  businessName: "",
  consent: false,
};

export function LandingPageLeadForm({ offerSlug, offerLabel, ctaLabel }: LandingPageLeadFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const hasStartedRef = useRef(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("lp_lead_form_started", { offer: offerSlug });
    }
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Record<string, string> {
    const next: Record<string, string> = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required";
    if (!form.workEmail.trim()) next.workEmail = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) next.workEmail = "Enter a valid email address";
    if (!form.businessName.trim()) next.businessName = "Business name is required";
    if (!form.consent) next.consent = "You must agree to be contacted before submitting";
    return next;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (status === "submitting" || status === "success") return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "landingPage",
          offerSlug,
          offerLabel,
          fullName: form.fullName,
          workEmail: form.workEmail,
          phone: form.phone,
          businessName: form.businessName,
          consent: form.consent,
          honeypot,
          submittedAt: new Date().toISOString(),
          referrerUrl: typeof document !== "undefined" ? document.referrer : "",
          utm: getStoredUtmParams(),
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      trackEvent("lp_lead_submitted", { offer: offerSlug });
    } catch {
      setStatus("error");
      trackEvent("lp_lead_error", { offer: offerSlug });
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(20,20,26,0.04)]"
      >
        <CheckCircle2 size={22} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
        <div>
          <p className="font-semibold text-brand-slate">Your request has been received.</p>
          <p className="mt-1 text-sm text-text-muted">
            We&apos;ll follow up shortly to schedule a quick call.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <input
        type="text"
        name={HONEYPOT_FIELD}
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <TextField
        id="lp-fullName"
        name="fullName"
        label="Full name"
        value={form.fullName}
        onChange={(v) => update("fullName", v)}
        required
        error={errors.fullName}
        autoComplete="name"
        maxLength={150}
      />
      <TextField
        id="lp-workEmail"
        name="workEmail"
        label="Work email"
        type="email"
        value={form.workEmail}
        onChange={(v) => update("workEmail", v)}
        required
        error={errors.workEmail}
        autoComplete="email"
        maxLength={200}
      />
      <TextField
        id="lp-phone"
        name="phone"
        label="Phone number"
        type="tel"
        value={form.phone}
        onChange={(v) => update("phone", v)}
        autoComplete="tel"
        maxLength={40}
      />
      <TextField
        id="lp-businessName"
        name="businessName"
        label="Business name"
        value={form.businessName}
        onChange={(v) => update("businessName", v)}
        required
        error={errors.businessName}
        maxLength={150}
      />

      <CheckboxField
        id="lp-consent"
        name="consent"
        label="I agree that AeroScale may contact me about this request."
        checked={form.consent}
        onChange={(v) => update("consent", v)}
        required
        error={errors.consent}
      />

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-error">
          Something went wrong while sending your request. Please try again.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : ctaLabel}
      </Button>
    </form>
  );
}
