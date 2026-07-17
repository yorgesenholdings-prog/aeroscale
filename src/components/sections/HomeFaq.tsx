import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

const homeFaqs = [
  {
    question: "What kinds of businesses does AeroScale serve?",
    answer:
      "AeroScale is designed primarily for small and growing businesses that need strategic, operational, marketing, research, analytical, or implementation support without building every specialty in-house.",
  },
  {
    question: "Do you provide advice or complete the work?",
    answer:
      "Both. Some engagements focus on research, strategy, and recommendations. Others include hands-on implementation, ongoing management, or coordination with the client's current team and vendors.",
  },
  {
    question: "Can we hire AeroScale for only one project?",
    answer:
      "Yes. AeroScale provides focused one-time projects as well as ongoing consulting and support plans.",
  },
  {
    question: "How do you decide where to start?",
    answer:
      "We evaluate the owner's goals, current problems, available resources, urgency, expected impact, and implementation difficulty before recommending a starting point.",
  },
  {
    question: "Are you a marketing agency, automation company, or operations consultant?",
    answer:
      "AeroScale combines multiple forms of small business support. The right service depends on the business problem rather than forcing every client into a single category.",
  },
  {
    question: "Do you replace accountants, attorneys, or other licensed professionals?",
    answer:
      "No. AeroScale provides business consulting and implementation support but does not replace licensed legal, accounting, tax, investment, or other regulated professional advice.",
  },
];

export function HomeFaq() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="COMMON QUESTIONS" heading="Frequently asked questions" />
        <div className="mt-10 max-w-3xl">
          <FaqAccordion items={homeFaqs} idPrefix="home-faq" />
        </div>
      </div>
    </section>
  );
}
