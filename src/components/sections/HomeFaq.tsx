import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const homeFaqs = [
  {
    question: "What kinds of businesses does AeroScale serve?",
    answer:
      "AeroScale is built for small and growing businesses of any kind. The Full System runs the same way regardless of industry — automating your leads, reviews, and ad follow-up without you having to build a marketing or ops department in-house.",
  },
  {
    question: "Do you provide advice or complete the work?",
    answer:
      "We complete the work. AeroScale builds, deploys, and manages the Full System in your business every month — you're not left with a strategy document to implement yourself.",
  },
  {
    question: "Is this available piece by piece?",
    answer:
      "No — the Full System is a single monthly offer that includes all seven pillars together. That's what makes the pricing and delivery model work; the pieces are built to reinforce each other rather than being sold as separate add-ons.",
  },
  {
    question: "How do you decide where to start?",
    answer:
      "Once you're onboarded, we sequence pillar setup based on what will move the needle fastest for your business — usually starting with whichever pillar is costing you the most leads today.",
  },
  {
    question: "Are you a marketing agency, automation company, or operations consultant?",
    answer:
      "AeroScale is all of those combined into one system. Rather than picking a single category, the Full System covers your website, lead follow-up, reviews, missed calls, sales coaching, your existing customer list, and ad management together.",
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
        <ScrollReveal className="mt-10 max-w-3xl">
          <FaqAccordion items={homeFaqs} idPrefix="home-faq" />
        </ScrollReveal>
      </div>
    </section>
  );
}
