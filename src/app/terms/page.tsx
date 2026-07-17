import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LegalReviewNotice } from "@/components/ui/LegalReviewNotice";
import { buildMetadata } from "@/lib/metadata";

// NOTE TO DEVELOPERS: These Terms of Service are written to be thorough
// and to accurately describe this website's actual functionality (forms,
// scorecard, no guarantees). They are not a substitute for review by a
// qualified attorney licensed in AeroScale's operating jurisdiction —
// enforceability of terms like arbitration, limitation of liability, and
// governing law varies by state and country. Have this reviewed by
// counsel before treating it as final for the live business.

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | AeroScale",
  description: "The terms and conditions that govern use of the AeroScale website and its tools, including the Growth Scorecard and contact forms.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms" }]} />

      <section className="bg-white py-14 md:py-20">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-brand-slate sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-text-muted">
            Effective date: placeholder — set upon legal review and publication.
          </p>

          <div className="mt-8">
            <LegalReviewNotice />
          </div>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-text-primary">
            <div>
              <h2 className="text-lg font-bold text-brand-slate">1. Acceptance of terms</h2>
              <p className="mt-2 text-text-muted">
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of this
                website, including the Growth Scorecard tool and contact forms (together, the
                &quot;Services&quot;), operated by AeroScale (&quot;AeroScale,&quot;
                &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using this
                website, you agree to be bound by these Terms and our{" "}
                <a href="/privacy" className="font-semibold text-teal-text hover:text-teal-text-dark">
                  Privacy Policy
                </a>
                . If you do not agree, do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">2. Description of the Services</h2>
              <p className="mt-2 text-text-muted">
                This website provides general information about AeroScale&apos;s small business
                consulting and support services, a free self-assessment tool (the Growth
                Scorecard), and forms for requesting a business assessment or contacting
                AeroScale. The website content is provided for general informational purposes and
                does not constitute a binding offer, proposal, or contract for services. Any
                actual engagement for consulting or implementation services is governed by a
                separate written agreement between AeroScale and the client.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">3. Eligibility and acceptable use</h2>
              <p className="mt-2 text-text-muted">
                This website is intended for business owners, professionals, and individuals aged
                18 or older acting on behalf of a business. By using this website, you agree not
                to:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-text-muted">
                <li>Submit false, misleading, or fraudulent information through any form;</li>
                <li>Use automated means (bots, scrapers) to access or submit the forms, other than standard search-engine indexing;</li>
                <li>Attempt to interfere with, disrupt, or gain unauthorized access to this website or its underlying systems;</li>
                <li>Use this website to transmit spam, malware, or unlawful content; or</li>
                <li>Copy, reproduce, or reuse the website&apos;s content in violation of Section 6.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">4. Not professional advice</h2>
              <p className="mt-2 text-text-muted">
                Information on this website — including the Growth Scorecard results, service
                pages, statistics, and any general recommendations — is provided for general
                business and educational purposes only. It does not constitute legal, accounting,
                tax, investment, or other regulated professional advice, and it is not a
                substitute for advice from an appropriately qualified professional familiar with
                your specific circumstances. You are solely responsible for decisions you make
                based on information from this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">5. No guaranteed outcomes</h2>
              <p className="mt-2 text-text-muted">
                AeroScale does not guarantee specific revenue, cost savings, financing,
                conversion rates, advertising results, or other business outcomes. The Growth
                Scorecard is an educational self-assessment based on the answers you provide; it
                is not a guarantee, valuation, financial analysis, or audit, and its results
                should not be relied upon as a substitute for professional advice. Any
                statistics, examples, or research cited on this website reflect general industry
                trends and do not predict or guarantee results for any individual business.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">6. Intellectual property</h2>
              <p className="mt-2 text-text-muted">
                The text, graphics, logos, design, and other materials on this website
                (&quot;Content&quot;) are owned by AeroScale or its licensors and are protected
                by copyright, trademark, and other intellectual property laws, unless otherwise
                noted. You may view and print Content for your own personal, non-commercial
                reference. You may not reproduce, distribute, modify, or create derivative works
                from the Content, or use it for any commercial purpose, without AeroScale&apos;s
                prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">7. Submissions you provide</h2>
              <p className="mt-2 text-text-muted">
                When you submit a form on this website, you represent that the information you
                provide is accurate and that you have the right to share it. Do not submit
                confidential, proprietary, or sensitive information (such as passwords, financial
                account numbers, or government identification numbers) through these forms. Our
                use of information you submit is governed by our{" "}
                <a href="/privacy" className="font-semibold text-teal-text hover:text-teal-text-dark">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">8. Third-party links and content</h2>
              <p className="mt-2 text-text-muted">
                This website may link to or cite third-party websites and research (for example,
                in the evidence and statistics sections). AeroScale does not control and is not
                responsible for the content, accuracy, or privacy practices of any third-party
                site. Links are provided for convenience and do not imply endorsement.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">9. Disclaimer of warranties</h2>
              <p className="mt-2 text-text-muted">
                This website and its Content are provided &quot;as is&quot; and &quot;as
                available,&quot; without warranties of any kind, whether express or implied,
                including but not limited to implied warranties of merchantability, fitness for a
                particular purpose, non-infringement, or that the website will be uninterrupted,
                secure, or error-free. AeroScale does not warrant the accuracy or completeness of
                any Content, including third-party statistics cited on this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">10. Limitation of liability</h2>
              <p className="mt-2 text-text-muted">
                To the fullest extent permitted by applicable law, AeroScale and its owners,
                employees, and contractors will not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of profits or revenue,
                arising out of or in connection with your use of, or inability to use, this
                website — even if advised of the possibility of such damages. Some jurisdictions
                do not allow the exclusion or limitation of certain damages, so some of the above
                limitations may not apply to you.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">11. Indemnification</h2>
              <p className="mt-2 text-text-muted">
                You agree to indemnify and hold harmless AeroScale from any claims, damages,
                losses, or expenses (including reasonable attorneys&apos; fees) arising out of
                your violation of these Terms or your misuse of this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">12. Governing law</h2>
              <p className="mt-2 text-text-muted">
                These Terms are governed by the laws of the state or jurisdiction in which
                AeroScale is headquartered, without regard to its conflict-of-law principles,
                except where applicable law requires otherwise. The specific jurisdiction and
                venue for this section should be confirmed and finalized during legal review.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">13. Severability</h2>
              <p className="mt-2 text-text-muted">
                If any provision of these Terms is found to be unenforceable or invalid, that
                provision will be limited or eliminated to the minimum extent necessary, and the
                remaining provisions will remain in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">14. Changes to these terms</h2>
              <p className="mt-2 text-text-muted">
                AeroScale may update these Terms from time to time. Material changes will be
                reflected by updating the effective date at the top of this page. Continued use
                of this website after changes are posted constitutes acceptance of the updated
                Terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-slate">15. Contact us</h2>
              <p className="mt-2 text-text-muted">
                Questions about these Terms can be sent through the{" "}
                <a href="/contact" className="font-semibold text-teal-text hover:text-teal-text-dark">
                  contact page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
