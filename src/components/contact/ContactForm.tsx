"use client";

import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { TextField, TextareaField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { getStoredUtmParams } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/config/site";

const HONEYPOT_FIELD = "company_fax_number";

interface FormState {
  fullName: string;
  workEmail: string;
  phone: string;
  message: string;
}

const initialState: FormState = {
  fullName: "",
  workEmail: "",
  phone: "",
  message: "",
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

  function validate(): Record<string, string> {
    const next: Record<string, string> = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required";
    if (!form.workEmail.trim()) next.workEmail = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) next.workEmail = "Enter a valid email address";
    if (!form.message.trim()) next.message = "Tell us a bit about what you need";
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
      const response = await fetch(siteConfig.contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.fullName,
          email: form.workEmail,
          phone: form.phone,
          message: form.message,
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
      <div role="status" className="flex items-start gap-3">
        <CheckCircle2 size={22} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
        <div>
          <p className="font-semibold text-brand-slate">Your message has been sent.</p>
          <p className="mt-1 text-sm text-text-muted">We&apos;ll get back to you shortly.</p>
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
          label="Email"
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
      </div>

      <TextareaField
        id="contact-message"
        name="message"
        label="Message"
        value={form.message}
        onChange={(v) => update("message", v)}
        required
        error={errors.message}
        maxLength={3000}
        rows={5}
      />

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-error">
          Something went wrong while sending your message. Please try again, or email us directly at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold underline">
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
