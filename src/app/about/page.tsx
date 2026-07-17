import type { Metadata } from "next";
import { Wrench, Eye, Lightbulb, Flag, ShieldCheck, TrendingUp, Infinity as InfinityIcon, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About AeroScale | Small Business Consulting Support",
  description:
    "AeroScale is a small business consulting and support company built around practical strategy, honest recommendations, and hands-on implementation.",
  path: "/about",
});

const values = [
  {
    icon: Wrench,
    title: "Practicality",
    description: "Recommendations are shaped by what a business can realistically execute, not by what looks impressive on paper.",
  },
  {
    icon: Eye,
    title: "Clarity",
    description: "Strategies, reports, and plans are written so an owner can act on them without needing a translator.",
  },
  {
    icon: Lightbulb,
    title: "Resourcefulness",
    description: "We work within a business's real budget and team, finding the simplest path to a working solution.",
  },
  {
    icon: Flag,
    title: "Ownership",
    description: "We treat client problems like our own and follow through past the point where advice alone would stop.",
  },
  {
    icon: ShieldCheck,
    title: "Honest recommendations",
    description: "If a project, tool, or campaign is not the right next step, we say so — even when it is not what a client hoped to hear.",
  },
  {
    icon: TrendingUp,
    title: "Measurable progress",
    description: "Work is scoped around outcomes that can be tracked, not activity for its own sake.",
  },
  {
    icon: InfinityIcon,
    title: "Long-term usefulness",
    description: "Systems, SOPs, and plans are built to keep working after the engagement ends, not to create dependence.",
  },
  {
    icon: CheckCircle2,
    title: "Responsible implementation",
    description: "New tools, automations, and processes are introduced carefully, with attention to what could go wrong.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />

      <section className="border-b border-border-subtle bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">ABOUT AEROSCALE</span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            Small business owners deserve more than generic advice.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            AeroScale exists because most small businesses cannot justify a full-time strategist,
            marketer, operations lead, analyst, and process designer — but they still face the same
            problems those roles are built to solve. AeroScale is a small business consulting
            company built to close that gap: practical strategy and hands-on support, sized to fit
            the business that hires us.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-slate">Why important projects stay unfinished</h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Business plans, SOPs, marketing campaigns, and reporting systems rarely fail because an
              owner does not care about them. They stall because daily operations always feel more
              urgent than the important, non-urgent work that actually moves a business forward.
              Without dedicated time and expertise set aside for that work, it keeps getting pushed to
              next month — indefinitely.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-slate">Flexible access to specialized knowledge</h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              A growing business often needs marketing expertise one quarter, systems help the next,
              and research before a big decision the quarter after that. Hiring a full-time specialist
              for each of those needs rarely pencils out. AeroScale is built to flex with that
              reality — bring us one project, or draw on multiple specialties as an ongoing extension
              of your team.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-slate">Strategy paired with implementation</h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              A strategy document that never gets built is not worth much more than the paper it is
              printed on. We pair recommendations with the follow-through to put them into practice —
              building the systems, campaigns, SOPs, and reports a plan actually depends on, and
              staying involved past the point where a typical consulting engagement would end.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-slate">Recommendations sized to the business</h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              A strategy built for a 500-person company does not fit a 12-person company, even if the
              underlying principle is sound. Every recommendation we make is shaped by a business&apos;s
              actual size, budget, team, and goals — not a generic best-practices template applied
              without regard for what the business can realistically support.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-slate">Supporting the owner and the existing team</h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              AeroScale works alongside the people already running the business — the owner,
              managers, and staff — rather than replacing them. Our role is to add expertise and
              execution capacity where it is missing, and to coordinate with any vendors or agencies
              the business already relies on.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-slate">Simplifying the business, not adding to it</h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              The goal of every engagement is a business that is easier to run afterward — clearer
              priorities, more reliable processes, and less dependence on the owner for everyday
              decisions. We are cautious about introducing new tools, systems, or complexity unless
              they genuinely make the business simpler to operate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="WHAT GUIDES OUR WORK" heading="Our values" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title}>
                <IconBadge icon={value.icon} />
                <h3 className="mt-3 text-base font-semibold text-brand-slate">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="THE PEOPLE BEHIND AEROSCALE" heading="Our story" className="mb-6" />
          <ContentPlaceholder
            label="Content placeholder — founder story pending"
            description="This section is reserved for an authentic founder story, background, and history, to be written and supplied directly by AeroScale leadership. No founder biography, credentials, or company history are published here until accurate information is provided."
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page flex flex-col items-start gap-6 rounded-2xl bg-brand-slate p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to talk through what your business needs next?
            </h2>
            <p className="mt-3 text-white/80">
              Tell us what&apos;s happening and we&apos;ll recommend a practical next step.
            </p>
          </div>
          <Button href="/contact" size="lg" className="shrink-0">
            Get a Free Business Assessment
          </Button>
        </div>
      </section>
    </>
  );
}
