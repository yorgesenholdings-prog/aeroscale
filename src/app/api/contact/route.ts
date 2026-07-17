import { NextRequest, NextResponse } from "next/server";
import { contactSubmissionSchema } from "@/lib/contact-schema";
import { buildOwnerNotificationEmail, buildProspectConfirmationEmail } from "@/lib/email";

// In-memory rate limiting. Resets on cold start / restart — an accepted
// tradeoff since this project intentionally has no database.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(key, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

function getClientKey(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: NextRequest) {
  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot: bots that fill in this hidden field get a fake success
  // response so they don't learn the field was a trap.
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const mode = process.env.CONTACT_FORM_MODE === "resend" ? "resend" : "console";

  if (mode === "console") {
    const summary =
      data.formType === "contact"
        ? `[contact] New business assessment request from ${data.businessName} <${data.workEmail}> — services: ${data.servicesRequested.join(", ")}`
        : `[contact] New scorecard lead from ${data.businessName} <${data.workEmail}> — score: ${data.scorecardResults.overallScore}/100`;

    console.log(summary);
    console.log("[contact] Email delivery disabled (CONTACT_FORM_MODE=console). Set CONTACT_FORM_MODE=resend with Resend credentials to send real emails.");

    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "[contact] CONTACT_FORM_MODE=resend but RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL is missing."
    );
    return NextResponse.json(
      { error: "Email delivery is not fully configured. Please contact us directly." },
      { status: 500 }
    );
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const ownerEmail = buildOwnerNotificationEmail(data);
    const prospectEmail = buildProspectConfirmationEmail(data);

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: ownerEmail.subject,
      html: ownerEmail.html,
      text: ownerEmail.text,
      replyTo: data.workEmail,
    });

    await resend.emails.send({
      from: fromEmail,
      to: data.workEmail,
      subject: prospectEmail.subject,
      html: prospectEmail.html,
      text: prospectEmail.text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Failed to send email via Resend:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your request." },
      { status: 500 }
    );
  }
}
