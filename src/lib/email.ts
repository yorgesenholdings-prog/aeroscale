import type { ContactSubmission } from "@/lib/contact-schema";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `<tr><td style="padding:4px 12px 4px 0;color:#5f6b76;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(
    label
  )}</td><td style="padding:4px 0;color:#1f2933;font-size:13px;">${escapeHtml(value)}</td></tr>`;
}

function emailShell(title: string, bodyHtml: string): string {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f7f9fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:#1f2933;">
    <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #dce3e8;overflow:hidden;">
      <tr>
        <td style="background:#3a4f66;padding:20px 24px;">
          <span style="color:#ffffff;font-size:18px;font-weight:700;">Aero<span style="color:#00a896;">Scale</span></span>
        </td>
      </tr>
      <tr>
        <td style="padding:24px;">
          <h1 style="margin:0 0 16px;font-size:18px;color:#3a4f66;">${escapeHtml(title)}</h1>
          ${bodyHtml}
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px;border-top:1px solid #dce3e8;color:#5f6b76;font-size:12px;">
          The support system behind your business.
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildOwnerNotificationEmail(data: ContactSubmission): {
  subject: string;
  html: string;
  text: string;
} {
  if (data.formType === "contact") {
    const subject = `New AeroScale business assessment request from ${data.businessName}`;
    const rows = [
      row("Name", data.fullName),
      row("Work email", data.workEmail),
      row("Phone", data.phone),
      row("Business name", data.businessName),
      row("Website", data.website),
      row("Industry", data.industry),
      row("Years in business", data.yearsInBusiness),
      row("Employees", data.employeeCount),
      row("Annual revenue", data.annualRevenue),
      row("Services requested", data.servicesRequested.join(", ")),
      row("Engagement preference", data.engagementPreference),
      row("Desired timing", data.desiredTiming),
      row("Referrer", data.referrerUrl),
      row("UTM source", data.utm?.utm_source),
      row("UTM medium", data.utm?.utm_medium),
      row("UTM campaign", data.utm?.utm_campaign),
      row("Submitted at", data.submittedAt),
    ]
      .filter(Boolean)
      .join("");

    const bodyHtml = `
      <table role="presentation" width="100%">${rows}</table>
      <h2 style="font-size:14px;color:#3a4f66;margin:20px 0 6px;">What's currently happening</h2>
      <p style="font-size:13px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.currentSituation)}</p>
      ${
        data.desiredOutcome
          ? `<h2 style="font-size:14px;color:#3a4f66;margin:20px 0 6px;">Desired outcome</h2><p style="font-size:13px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(
              data.desiredOutcome
            )}</p>`
          : ""
      }
    `;

    const text = [
      `New AeroScale business assessment request from ${data.businessName}`,
      `Name: ${data.fullName}`,
      `Work email: ${data.workEmail}`,
      data.phone && `Phone: ${data.phone}`,
      `Business: ${data.businessName}`,
      data.website && `Website: ${data.website}`,
      `Industry: ${data.industry}`,
      `Employees: ${data.employeeCount}`,
      `Services requested: ${data.servicesRequested.join(", ")}`,
      `What's currently happening: ${data.currentSituation}`,
      data.desiredOutcome && `Desired outcome: ${data.desiredOutcome}`,
    ]
      .filter(Boolean)
      .join("\n");

    return { subject, html: emailShell(subject, bodyHtml), text };
  }

  // Scorecard lead
  const subject = `New AeroScale growth scorecard submission from ${data.businessName}`;
  const rows = [
    row("Name", data.fullName),
    row("Work email", data.workEmail),
    row("Phone", data.phone),
    row("Business name", data.businessName),
    row("Website", data.website),
    row("Wants emailed results", data.wantsEmailedResults ? "Yes" : "No"),
    row("Wants free assessment", data.wantsAssessment ? "Yes" : "No"),
    row("Overall score", `${data.scorecardResults.overallScore}/100 (${data.scorecardResults.bandLabel})`),
    row("Weakest categories", data.scorecardResults.weakestCategories.join(", ")),
    row("Referrer", data.referrerUrl),
    row("UTM source", data.utm?.utm_source),
    row("Submitted at", data.submittedAt),
  ]
    .filter(Boolean)
    .join("");

  const categoryRows = data.scorecardResults.categoryScores
    .map((c) => row(c.label, `${c.score}/100`))
    .join("");

  const bodyHtml = `
    <table role="presentation" width="100%">${rows}</table>
    <h2 style="font-size:14px;color:#3a4f66;margin:20px 0 6px;">Category scores</h2>
    <table role="presentation" width="100%">${categoryRows}</table>
  `;

  const text = [
    subject,
    `Name: ${data.fullName}`,
    `Work email: ${data.workEmail}`,
    `Business: ${data.businessName}`,
    `Overall score: ${data.scorecardResults.overallScore}/100 (${data.scorecardResults.bandLabel})`,
    `Weakest categories: ${data.scorecardResults.weakestCategories.join(", ")}`,
  ].join("\n");

  return { subject, html: emailShell(subject, bodyHtml), text };
}

export function buildProspectConfirmationEmail(data: ContactSubmission): {
  subject: string;
  html: string;
  text: string;
} {
  const firstName = data.fullName.trim().split(/\s+/)[0] || data.fullName;

  if (data.formType === "contact") {
    const subject = "We received your AeroScale assessment request";
    const bodyHtml = `
      <p style="font-size:14px;line-height:1.6;">Hi ${escapeHtml(firstName)},</p>
      <p style="font-size:14px;line-height:1.6;">Thank you for contacting AeroScale. We received your request and will review the business challenge, project, or opportunity you described.</p>
      <p style="font-size:14px;line-height:1.6;">We'll follow up with the most practical next step shortly.</p>
      <p style="font-size:14px;line-height:1.6;">AeroScale<br/>The support system behind your business.</p>
    `;
    const text = `Hi ${firstName},\n\nThank you for contacting AeroScale. We received your request and will review the business challenge, project, or opportunity you described.\n\nWe'll follow up with the most practical next step shortly.\n\nAeroScale\nThe support system behind your business.`;
    return { subject, html: emailShell(subject, bodyHtml), text };
  }

  const subject = "Your AeroScale Growth Scorecard results";
  const categoryRows = data.scorecardResults.categoryScores
    .map((c) => row(c.label, `${c.score}/100`))
    .join("");

  const bodyHtml = `
    <p style="font-size:14px;line-height:1.6;">Hi ${escapeHtml(firstName)},</p>
    <p style="font-size:14px;line-height:1.6;">Thanks for completing the Small Business Growth Scorecard. Here is a copy of your results.</p>
    <p style="font-size:28px;font-weight:700;color:#3a4f66;margin:16px 0 0;">${data.scorecardResults.overallScore}/100</p>
    <p style="font-size:14px;color:#5f6b76;margin:0 0 16px;">${escapeHtml(data.scorecardResults.bandLabel)}</p>
    <table role="presentation" width="100%">${categoryRows}</table>
    <p style="font-size:14px;line-height:1.6;margin-top:16px;">${
      data.wantsAssessment
        ? "We'll also follow up about the free business assessment you requested."
        : "If you'd like a free business assessment based on these results, just reply to this email."
    }</p>
    <p style="font-size:12px;line-height:1.6;color:#5f6b76;margin-top:16px;">The scorecard is an educational assessment, not a guarantee, valuation, financial analysis, or substitute for professional legal, accounting, tax, or financial advice.</p>
    <p style="font-size:14px;line-height:1.6;">AeroScale<br/>The support system behind your business.</p>
  `;

  const text = `Hi ${firstName},\n\nThanks for completing the Small Business Growth Scorecard. Your score: ${data.scorecardResults.overallScore}/100 (${data.scorecardResults.bandLabel}).\n\nAeroScale\nThe support system behind your business.`;

  return { subject, html: emailShell(subject, bodyHtml), text };
}
