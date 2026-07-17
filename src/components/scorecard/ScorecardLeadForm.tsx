"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { TextField, CheckboxField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { getStoredUtmParams } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import type { ScorecardComputedResults } from "@/lib/scorecard-scoring";
import type { ScoreBand } from "@/config/scorecard";

interface ScorecardLeadFormProps {
  results: ScorecardComputedResults;
  band: ScoreBand;
}

// Honeypot field name deliberately unrelated to any real field.
const HONEYPOT_FIELD = "company_fax_number";

export function ScorecardLeadForm({ results, band }: ScorecardLeadFormProps) {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [wantsEmailedResults, setWantsEmailedResults] = useState(true);
  const [wantsAssessment, setWantsAssessment] = useState(false);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (status === "submitting" || status === "success") return;

    const nextErrors: Record<string, string> = {};
    if (!fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!workEmail.trim()) nextErrors.workEmail = "Work email is required";
    if (!businessName.trim()) nextErrors.businessName = "Business name is required";
    if (!consent) nextErrors.consent = "You must agree to be contacted before submitting";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "scorecard",
          fullName,
          workEmail,
          businessName,
          website,
          phone,
          wantsEmailedResults,
          wantsAssessment,
          consent,
          honeypot,
          submittedAt: new Date().toISOString(),
          referrerUrl: typeof document !== "undefined" ? document.referrer : "",
          utm: getStoredUtmParams(),
          scorecardResults: {
            overallScore: results.overallScore,
            bandLabel: band.label,
            categoryScores: results.categoryScores.map((c) => ({
              key: c.key,
              label: c.label,
              score: c.score,
            })),
            weakestCategories: results.weakestCategories.map((c) => c.label),
            recommendedServiceSlugs: results.recommendedServiceSlugs,
          },
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      trackEvent("scorecard_lead_submitted", { overallScore: results.overallScore });
    } catch {
      setStatus("error");
      trackEvent("contact_form_error", { form: "scorecard" });
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-border-subtle bg-white p-6">
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
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-xl border border-border-subtle bg-white p-6">
      <div>
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
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField
          id="scorecard-fullName"
          name="fullName"
          label="Full name"
          value={fullName}
          onChange={setFullName}
          required
          error={errors.fullName}
          autoComplete="name"
          maxLength={150}
        />
        <TextField
          id="scorecard-workEmail"
          name="workEmail"
          label="Work email"
          type="email"
          value={workEmail}
          onChange={setWorkEmail}
          required
          error={errors.workEmail}
          autoComplete="email"
          maxLength={200}
        />
        <TextField
          id="scorecard-businessName"
          name="businessName"
          label="Business name"
          value={businessName}
          onChange={setBusinessName}
          required
          error={errors.businessName}
          maxLength={150}
        />
        <TextField
          id="scorecard-website"
          name="website"
          label="Website"
          value={website}
          onChange={setWebsite}
          maxLength={200}
          placeholder="yourbusiness.com"
        />
        <TextField
          id="scorecard-phone"
          name="phone"
          label="Phone number"
          type="tel"
          value={phone}
          onChange={setPhone}
          maxLength={40}
          autoComplete="tel"
        />
      </div>

      <div className="space-y-3">
        <CheckboxField
          id="scorecard-wantsEmailedResults"
          name="wantsEmailedResults"
          label="Send me an emailed copy of my results"
          checked={wantsEmailedResults}
          onChange={setWantsEmailedResults}
        />
        <CheckboxField
          id="scorecard-wantsAssessment"
          name="wantsAssessment"
          label="I'd also like a free business assessment"
          checked={wantsAssessment}
          onChange={setWantsAssessment}
        />
        <CheckboxField
          id="scorecard-consent"
          name="consent"
          label="I agree that AeroScale may contact me about this request."
          checked={consent}
          onChange={setConsent}
          required
          error={errors.consent}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-error">
          Something went wrong while sending your request. Please try again or contact us directly.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send My Results"}
      </Button>
    </form>
  );
}
