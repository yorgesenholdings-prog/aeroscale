import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LegalReviewNotice } from "@/components/ui/LegalReviewNotice";
import { buildMetadata } from "@/lib/metadata";

// NOTE TO DEVELOPERS: This privacy policy is written to be thorough and to
// accurately describe what this website actually does (forms, storage,
// service providers). It is not a substitute for review by a qualified
// attorney licensed in AeroScale's operating jurisdiction — data-privacy
// requirements vary by state and country and change over time. Have this
// reviewed by counsel before treating it as final for the live business.

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | AeroScale",
  description: "How AeroScale collects, uses, shares, and protects information submitted through this website, and the privacy rights available to visitors.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }]} />

      <section className="bg-white py-14 md:py-20">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-brand-slate sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-text-muted">
            Effective date: placeholder — set upon legal review and publication.
          </p>

          <div className="mt-8">
            <LegalReviewNotice />
          </div>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-text-primary">
            <div>
              <h2 className="text-lg font-bold text-brand-slate">1. Introduction</h2>
              <p className="mt-2 text-text-muted">
                This Privacy Policy explains how AeroScale (&quot;AeroScale,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects
                information when you visit this website or submit a form on it. By using this
                website, you agree to the collection and use of information as described here.
                If you do not agree, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">2. Information we collect</h2>
              <p className="mt-2 text-text-muted">We collect information in the following ways:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-text-muted">
                <li>
                  <span className="font-semibold text-text-primary">Information you provide directly.</span>{" "}
                  When you submit the contact form or the Growth Scorecard, we collect what you
                  enter — which may include your name, email address, phone number, business
                  name, website, industry, business details, and the content of your message. If
                  you complete the Growth Scorecard, we also collect your assessment answers and
                  calculated results.
                </li>
                <li>
                  <span className="font-semibold text-text-primary">Technical information.</span>{" "}
                  When you submit a form, our server automatically records limited technical
                  information for security and abuse-prevention purposes, such as your IP address
                  and the timestamp of the request.
                </li>
                <li>
                  <span className="font-semibold text-text-primary">Locally stored campaign data.</span>{" "}
                  If you arrive at this website through a marketing link containing UTM
                  parameters (source, medium, campaign), we store those values in your browser&apos;s
                  session storage so we can understand which channel referred you if you submit a
                  form. This information stays on your device and is only sent to us if you
                  submit a form; it is not a persistent tracking cookie and clears when you close
                  your browser tab or session.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">3. How we use your information</h2>
              <p className="mt-2 text-text-muted">We use the information we collect to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-text-muted">
                <li>Respond to your inquiry and evaluate whether our services fit your business;</li>
                <li>Send you the results of the Growth Scorecard if you request an emailed copy;</li>
                <li>Communicate with you about a request you made, by email or phone;</li>
                <li>Maintain business records of inquiries and engagements;</li>
                <li>Detect, prevent, and address spam, fraud, or abuse of our forms; and</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p className="mt-3 text-text-muted">
                By submitting a form on this website, you consent to AeroScale contacting you
                about your request by email or phone.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">4. Cookies and similar technologies</h2>
              <p className="mt-2 text-text-muted">
                This website does not use advertising or third-party tracking cookies, and does
                not currently use website analytics. The only browser-side storage this site uses
                is the session-storage mechanism described in Section 2 for UTM campaign
                attribution, which is not a cookie and is not used to track you across other
                websites. If analytics, advertising pixels, or cookies are added in the future,
                this policy will be updated first to describe what is collected, why, and how you
                can opt out.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">5. How we share information</h2>
              <p className="mt-2 text-text-muted">
                We do not sell, rent, or trade information submitted through this website. We
                share information only in the following limited circumstances:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-text-muted">
                <li>
                  <span className="font-semibold text-text-primary">Service providers.</span>{" "}
                  When email delivery is active, form submissions are processed through a
                  third-party transactional email provider solely to send you a response and to
                  notify AeroScale of your request. That provider is contractually limited to
                  processing the information only as necessary to deliver those messages.
                </li>
                <li>
                  <span className="font-semibold text-text-primary">Legal requirements.</span>{" "}
                  We may disclose information if required to do so by law, or in the good-faith
                  belief that disclosure is necessary to comply with a legal obligation, protect
                  our rights or property, or protect the safety of users or the public.
                </li>
                <li>
                  <span className="font-semibold text-text-primary">Business transfers.</span>{" "}
                  If AeroScale is involved in a merger, acquisition, or sale of assets,
                  information may be transferred as part of that transaction, subject to the same
                  protections described in this policy.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">6. Data retention</h2>
              <p className="mt-2 text-text-muted">
                We retain information submitted through this website for as long as reasonably
                necessary to respond to your request, maintain business records, and comply with
                legal, accounting, or reporting obligations, unless a longer retention period is
                required or permitted by law, or you ask us to delete it sooner.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">7. Data security</h2>
              <p className="mt-2 text-text-muted">
                We use reasonable administrative and technical safeguards designed to protect the
                information you submit, including transmitting form submissions over encrypted
                (HTTPS) connections and limiting who can access submitted information. No method
                of transmission or storage is completely secure, and we cannot guarantee absolute
                security.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">8. Your privacy rights</h2>
              <p className="mt-2 text-text-muted">
                Depending on where you live, you may have the right to request access to, a copy
                of, correction of, or deletion of the personal information we hold about you, and
                to object to or restrict certain processing. To exercise any of these rights,
                contact us using the information in Section 12. We will respond within a
                reasonable time and in accordance with applicable law.
              </p>
              <p className="mt-3 text-text-muted">
                <span className="font-semibold text-text-primary">California residents.</span>{" "}
                If you are a California resident, the California Consumer Privacy Act (as
                amended) may give you additional rights, including the right to know what
                personal information is collected, the right to request deletion, and the right
                to non-discrimination for exercising these rights. AeroScale does not sell or
                share personal information for cross-context behavioral advertising.
              </p>
              <p className="mt-3 text-text-muted">
                <span className="font-semibold text-text-primary">Other jurisdictions.</span>{" "}
                Visitors in the European Economic Area, the United Kingdom, or other jurisdictions
                with data-protection laws may have additional or different rights under those
                laws. Contact us and we will address your request under the applicable framework.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">9. Children&apos;s privacy</h2>
              <p className="mt-2 text-text-muted">
                This website is intended for business owners and professionals and is not
                directed to children under 13. We do not knowingly collect personal information
                from children under 13. If you believe a child has provided us with personal
                information, contact us and we will delete it.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">10. Do Not Track signals</h2>
              <p className="mt-2 text-text-muted">
                Some browsers offer a &quot;Do Not Track&quot; setting. Because there is no
                common industry standard for how to respond to these signals, this website does
                not currently respond to them differently. As noted in Section 4, this site does
                not use advertising or cross-site tracking cookies.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">11. Third-party links</h2>
              <p className="mt-2 text-text-muted">
                This website may link to third-party websites, including the sources cited in our
                evidence and research sections. We are not responsible for the privacy practices
                or content of those third-party sites. We encourage you to review the privacy
                policy of any site you visit.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">12. Contact us</h2>
              <p className="mt-2 text-text-muted">
                Questions about this Privacy Policy, or requests to access, correct, or delete
                your information, can be sent through the{" "}
                <a href="/contact" className="font-semibold text-teal-text hover:text-teal-text-dark">
                  contact page
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">13. Changes to this policy</h2>
              <p className="mt-2 text-text-muted">
                We may update this Privacy Policy from time to time. Material changes will be
                reflected by updating the effective date at the top of this page. Continued use of
                this website after changes are posted constitutes acceptance of the updated
                policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
