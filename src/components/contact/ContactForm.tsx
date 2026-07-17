"use client";

import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  TextField,
  TextareaField,
  SelectField,
  CheckboxField,
  CheckboxGroup,
} from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import {
  YEARS_IN_BUSINESS_OPTIONS,
  EMPLOYEE_COUNT_OPTIONS,
  ANNUAL_REVENUE_OPTIONS,
  SERVICES_REQUESTED_OPTIONS,
  ENGAGEMENT_PREFERENCE_OPTIONS,
  DESIRED_TIMING_OPTIONS,
} from "@/lib/contact-schema";
import { getStoredUtmParams } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";

const HONEYPOT_FIELD = "company_fax_number";

interface FormState {
  fullName: string;
  workEmail: string;
  phone: string;
  businessName: string;
  website: string;
  industry: string;
  yearsInBusiness: string;
  employeeCount: string;
  annualRevenue: string;
  servicesRequested: string[];
  engagementPreference: string;
  currentSituation: string;
  desiredOutcome: string;
  desiredTiming: string;
  consent: boolean;
}

const initialState: FormState = {
  fullName: "",
  workEmail: "",
  phone: "",
  businessName: "",
  website: "",
  industry: "",
  yearsInBusiness: "",
  employeeCount: "",
  annualRevenue: "",
  servicesRequested: [],
  engagementPreference: "",
  currentSituation: "",
  desiredOutcome: "",
  desiredTiming: "",
  consent: false,
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const hasStartedRef = useRef(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("contact_form_started");
    }
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleService(service: string) {
    setForm((prev) => ({
      ...prev,
      servicesRequested: prev.servicesRequested.includes(service)
        ? prev.servicesRequested.filter((s) => s !== service)
        : [...prev.servicesRequested, service],
    }));
  }

  function validate(): Record<string, string> {
    const next: Record<string, string> = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required";
    if (!form.workEmail.trim()) next.workEmail = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) next.workEmail = "Enter a valid email address";
    if (!form.businessName.trim()) next.businessName = "Business name is required";
    if (!form.industry.trim()) next.industry = "Industry is required";
    if (!form.employeeCount) next.employeeCount = "Select the number of employees";
    if (form.servicesRequested.length === 0) next.servicesRequested = "Select at least one service";
    if (!form.currentSituation.trim()) next.currentSituation = "Tell us what's currently happening";
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
          formType: "contact",
          fullName: form.fullName,
          workEmail: form.workEmail,
          phone: form.phone,
          businessName: form.businessName,
          website: form.website,
          industry: form.industry,
          yearsInBusiness: form.yearsInBusiness || undefined,
          employeeCount: form.employeeCount,
          annualRevenue: form.annualRevenue || undefined,
          servicesRequested: form.servicesRequested,
          engagementPreference: form.engagementPreference || undefined,
          currentSituation: form.currentSituation,
          desiredOutcome: form.desiredOutcome,
          desiredTiming: form.desiredTiming || undefined,
          consent: form.consent,
          honeypot,
          submittedAt: new Date().toISOString(),
          referrerUrl: typeof document !== "undefined" ? document.referrer : "",
          utm: getStoredUtmParams(),
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      trackEvent("contact_form_submitted");
    } catch {
      setStatus("error");
      trackEvent("contact_form_error", { form: "contact" });
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-xl border border-border-subtle bg-white p-6"
      >
        <CheckCircle2 size={22} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
        <div>
          <p className="font-semibold text-brand-slate">Your request has been received.</p>
          <p className="mt-1 text-sm text-text-muted">
            AeroScale will review your information and follow up shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          id="contact-fullName"
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
          id="contact-workEmail"
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
          id="contact-phone"
          name="phone"
          label="Phone number"
          type="tel"
          value={form.phone}
          onChange={(v) => update("phone", v)}
          autoComplete="tel"
          maxLength={40}
        />
        <TextField
          id="contact-businessName"
          name="businessName"
          label="Business name"
          value={form.businessName}
          onChange={(v) => update("businessName", v)}
          required
          error={errors.businessName}
          maxLength={150}
        />
        <TextField
          id="contact-website"
          name="website"
          label="Website"
          value={form.website}
          onChange={(v) => update("website", v)}
          maxLength={200}
          placeholder="yourbusiness.com"
        />
        <TextField
          id="contact-industry"
          name="industry"
          label="Industry"
          value={form.industry}
          onChange={(v) => update("industry", v)}
          required
          error={errors.industry}
          maxLength={150}
          placeholder="e.g. Home services, retail, professional services"
        />
        <SelectField
          id="contact-yearsInBusiness"
          name="yearsInBusiness"
          label="Years in business"
          value={form.yearsInBusiness}
          onChange={(v) => update("yearsInBusiness", v)}
          options={YEARS_IN_BUSINESS_OPTIONS}
        />
        <SelectField
          id="contact-employeeCount"
          name="employeeCount"
          label="Number of employees"
          value={form.employeeCount}
          onChange={(v) => update("employeeCount", v)}
          options={EMPLOYEE_COUNT_OPTIONS}
          required
          error={errors.employeeCount}
        />
        <SelectField
          id="contact-annualRevenue"
          name="annualRevenue"
          label="Approximate annual revenue"
          value={form.annualRevenue}
          onChange={(v) => update("annualRevenue", v)}
          options={ANNUAL_REVENUE_OPTIONS}
        />
        <SelectField
          id="contact-engagementPreference"
          name="engagementPreference"
          label="Engagement preference"
          value={form.engagementPreference}
          onChange={(v) => update("engagementPreference", v)}
          options={ENGAGEMENT_PREFERENCE_OPTIONS}
        />
        <SelectField
          id="contact-desiredTiming"
          name="desiredTiming"
          label="Desired timing"
          value={form.desiredTiming}
          onChange={(v) => update("desiredTiming", v)}
          options={DESIRED_TIMING_OPTIONS}
        />
      </div>

      <CheckboxGroup legend="Services requested" required error={errors.servicesRequested}>
        {SERVICES_REQUESTED_OPTIONS.map((service) => (
          <CheckboxField
            key={service}
            id={`contact-service-${service}`}
            name="servicesRequested"
            label={service}
            checked={form.servicesRequested.includes(service)}
            onChange={() => toggleService(service)}
          />
        ))}
      </CheckboxGroup>

      <TextareaField
        id="contact-currentSituation"
        name="currentSituation"
        label="What is currently happening?"
        value={form.currentSituation}
        onChange={(v) => update("currentSituation", v)}
        required
        error={errors.currentSituation}
        maxLength={3000}
        rows={5}
      />

      <TextareaField
        id="contact-desiredOutcome"
        name="desiredOutcome"
        label="What outcome would you like?"
        value={form.desiredOutcome}
        onChange={(v) => update("desiredOutcome", v)}
        maxLength={3000}
        rows={4}
      />

      <CheckboxField
        id="contact-consent"
        name="consent"
        label="I agree that AeroScale may contact me about this request."
        checked={form.consent}
        onChange={(v) => update("consent", v)}
        required
        error={errors.consent}
      />

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-error">
          Something went wrong while sending your request. Please try again or contact us directly.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request My Free Business Assessment"}
      </Button>
    </form>
  );
}
