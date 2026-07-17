import {
  Compass,
  Workflow,
  ClipboardList,
  Megaphone,
  Target,
  FileText,
  Search,
  BarChart3,
  Users,
} from "lucide-react";
import type { ServiceDefinition } from "@/types";

export const services: ServiceDefinition[] = [
  {
    slug: "business-strategy",
    name: "Business Strategy",
    shortDescription:
      "Clarify priorities, evaluate opportunities, and create a practical plan for growth.",
    cardDescription:
      "Clarify priorities, evaluate opportunities, and create a practical plan for growth.",
    eyebrow: "BUSINESS STRATEGY CONSULTING",
    h1: "Small business strategy built around clear priorities and practical action.",
    metaTitle: "Small Business Strategy Consultant | AeroScale",
    metaDescription:
      "Work with a small business strategy consultant to clarify priorities, evaluate opportunities, and build a practical growth plan. Strategic planning without the jargon.",
    icon: Compass,
    engagementType: "either",
    intro: [
      "Most small business owners do not lack ambition — they lack a clear, written answer to the question \"what matters most right now?\" As a business strategy consultant, AeroScale works with owners to turn a long list of ideas, problems, and opportunities into a realistic plan the business can actually execute.",
      "Strategy work at AeroScale is grounded in the business's real size, staffing, and budget. We are not interested in a polished slide deck that sits unused — the goal is a working plan that shapes decisions for the next quarter and the next year.",
    ],
    problemsSolved: [
      "The owner is unsure what to prioritize",
      "Too many opportunities compete for attention",
      "Growth has stalled or flattened",
      "The company lacks a written plan",
      "Decisions are made reactively instead of strategically",
      "The business is expanding without clear direction",
    ],
    specificServices: [
      "Strategic planning",
      "Growth planning",
      "Goal setting",
      "Opportunity evaluation",
      "Competitive positioning",
      "Offer development",
      "Revenue-stream analysis",
      "Quarterly planning",
      "Decision support",
      "Business-model review",
      "Expansion planning",
      "Risk and constraint analysis",
    ],
    deliverables: [
      "Strategic roadmap",
      "90-day action plan",
      "Annual priorities document",
      "Opportunity ranking",
      "Growth plan",
      "Decision framework",
      "Quarterly planning package",
    ],
    whoItsFor: [
      "Owners who feel busy but unsure the business is moving forward",
      "Businesses considering a new offer, market, or location",
      "Companies whose growth has stalled and need a clear next step",
      "Teams that make decisions inconsistently across departments",
      "Owners preparing for a bigger investment of time or money",
    ],
    exampleSituations: [
      "A business owner has five potential projects on their list and needs help deciding which one to tackle first.",
      "Revenue has plateaued for two years and the owner is not sure whether the problem is marketing, operations, or the offer itself.",
      "A company is evaluating whether to open a second location, add a product line, or expand into a new service area.",
      "A leadership team disagrees on priorities and needs a shared, written plan to align around.",
    ],
    process: [
      {
        title: "Understand",
        description:
          "We review the business's current position, past performance, resources, and the goals the owner is working toward.",
      },
      {
        title: "Prioritize",
        description:
          "We rank the opportunities and problems on the table by expected impact, urgency, cost, and effort.",
      },
      {
        title: "Build or Improve",
        description:
          "We create the strategic plan, decision framework, or growth roadmap the business needs to move forward with confidence.",
      },
      {
        title: "Support",
        description:
          "We help track progress against the plan, revisit priorities as conditions change, and identify the next valuable step.",
      },
    ],
    relatedServiceSlugs: ["recurring-business-support", "business-plans", "market-research"],
    faqs: [
      {
        question: "Do you build a strategy from scratch or work with what we already have?",
        answer:
          "Both. Some clients want a full strategic plan built from the ground up. Others already have goals or partial plans and want help prioritizing, stress-testing, or filling the gaps.",
      },
      {
        question: "Is this a one-time project or an ongoing service?",
        answer:
          "Strategy work can be structured either way. Many owners start with a focused planning project and then move into quarterly strategy check-ins through recurring business support.",
      },
      {
        question: "Will you tell us exactly what to do?",
        answer:
          "We provide clear, specific recommendations rather than vague advice. The final decisions remain with the business owner, but you will leave with a concrete, prioritized plan rather than a list of open-ended options.",
      },
    ],
  },
  {
    slug: "systems-automation",
    name: "Systems and Automation",
    shortDescription:
      "Connect software, reduce repetitive work, improve follow-up, and create more reliable workflows.",
    cardDescription:
      "Connect software, reduce repetitive work, improve follow-up, and create more reliable workflows.",
    eyebrow: "BUSINESS AUTOMATION CONSULTING",
    h1: "Build business systems that save time and reduce dropped handoffs.",
    metaTitle: "Small Business Automation and Systems Consulting | AeroScale",
    metaDescription:
      "A business systems consultant that connects your software, automates repetitive work, and reduces dropped follow-up — without unnecessary complexity.",
    icon: Workflow,
    engagementType: "either",
    intro: [
      "As a business automation consultant, AeroScale looks at where information, tasks, and customers fall through the cracks between tools, people, and steps — then builds systems that close those gaps. That might mean connecting two pieces of software, automating a follow-up sequence, or simply designing a clearer manual workflow.",
      "Automation is a tool, not the goal. Some problems are better solved with a well-designed process and a clear owner than with more software. We recommend the level of automation that actually fits the business, including AI-assisted workflows when they are a practical and reliable fit — not because automation or AI sounds impressive.",
    ],
    problemsSolved: [
      "Leads or customer requests are not followed up on consistently",
      "The same information is entered into multiple systems by hand",
      "Tasks depend on someone remembering to do them",
      "Software tools do not talk to each other",
      "Reporting requires manually pulling data from several places",
      "Growth is exposing the limits of manual, ad-hoc processes",
    ],
    specificServices: [
      "Workflow automation",
      "CRM setup and improvement",
      "Lead follow-up automation",
      "Appointment workflows",
      "Customer communication systems",
      "Software integrations",
      "Reporting automation",
      "Task automation",
      "AI-assisted workflows",
      "Internal notifications",
      "Data synchronization",
      "Automation audits",
    ],
    deliverables: [
      "Automation audit and recommendations",
      "Configured CRM or workflow tool",
      "Documented automation map",
      "Connected software integrations",
      "Automated follow-up sequences",
      "Internal notification system",
      "Maintenance and troubleshooting guide",
    ],
    whoItsFor: [
      "Businesses with growing lead volume and inconsistent follow-up",
      "Teams using multiple tools that do not share information",
      "Owners spending hours a week on repetitive administrative work",
      "Companies that have outgrown spreadsheets and manual tracking",
      "Businesses that already have software but are not using it effectively",
    ],
    exampleSituations: [
      "New leads sometimes go three or four days without a response because follow-up depends on one person remembering.",
      "A business uses separate tools for scheduling, invoicing, and customer communication, and staff re-enter the same information into each one.",
      "An owner wants a weekly report on sales and lead activity but currently has to build it by hand every Monday.",
      "A company wants to explore whether an AI-assisted workflow could handle routine customer questions without losing a personal touch.",
    ],
    process: [
      {
        title: "Understand",
        description:
          "We map your current tools, workflows, and the points where handoffs break down or manual work piles up.",
      },
      {
        title: "Prioritize",
        description:
          "We identify which workflow gaps cost the most time, create the most risk, or block growth first.",
      },
      {
        title: "Build or Improve",
        description:
          "We configure the automations, integrations, or redesigned workflows, choosing the simplest reliable solution.",
      },
      {
        title: "Support",
        description:
          "We test the system with real use, document how it works, and adjust it as tools or business needs change.",
      },
    ],
    relatedServiceSlugs: ["sops-processes", "data-analytics", "recurring-business-support"],
    faqs: [
      {
        question: "Do we need to buy new software?",
        answer:
          "Not necessarily. We often start by getting more value out of tools you already own. When a new tool is genuinely the right fit, we will recommend it and explain why — but we do not default to adding software.",
      },
      {
        question: "Who pays for software, messaging, and AI tool costs?",
        answer:
          "Clients generally pay their own software, messaging, and AI or platform usage expenses directly to the providers. AeroScale's fees cover the strategy, setup, and ongoing support work.",
      },
      {
        question: "Are you officially partnered with the platforms you set up?",
        answer:
          "We work across a range of common small business platforms, but we do not claim official partnership status with any named platform unless that relationship has been formally established.",
      },
    ],
    notes: [
      "AI is used only when it is a practical and reliable solution for the specific workflow.",
      "Many problems are better solved through clear rules, integrations, and well-designed processes than through added software.",
    ],
  },
  {
    slug: "sops-processes",
    name: "SOPs and Process Improvement",
    shortDescription:
      "Document how work should be completed and create repeatable processes your team can follow.",
    cardDescription:
      "Document how work should be completed and create repeatable processes your team can follow.",
    eyebrow: "SOP AND PROCESS CONSULTING",
    h1: "Create repeatable processes your team can actually follow.",
    metaTitle: "SOP Development and Process Improvement | AeroScale",
    metaDescription:
      "SOP development services that turn what's in the owner's head into clear, repeatable processes your team can follow — improving training, quality, and delegation.",
    icon: ClipboardList,
    engagementType: "either",
    intro: [
      "In many small businesses, the real process for getting work done only exists in the owner's head — or in the memory of one long-tenured employee. That makes training slow, quality inconsistent, and delegation risky. AeroScale's SOP development services turn that tribal knowledge into clear, written processes your team can actually follow.",
      "Good documentation is not about writing a manual nobody reads. We focus on process maps, checklists, and SOPs that match how your team actually works, so they get used in practice rather than filed away.",
    ],
    problemsSolved: [
      "Work is completed differently by each employee",
      "Knowledge exists only in the owner's head",
      "Training new employees takes too long",
      "The same errors happen repeatedly",
      "Employees ask the same questions over and over",
      "Delegation is difficult because nothing is written down",
    ],
    specificServices: [
      "SOP writing",
      "Process mapping",
      "Workflow documentation",
      "Employee checklists",
      "Training documentation",
      "Quality-control procedures",
      "Employee onboarding materials",
      "Role clarification",
      "Approval processes",
      "Handoff improvement",
      "Knowledge-base development",
      "Process audits",
    ],
    deliverables: [
      "SOP library",
      "Process maps",
      "Checklists",
      "Training guides",
      "Responsibility matrix",
      "Internal knowledge base",
      "Process-improvement plan",
    ],
    whoItsFor: [
      "Owners who are the only person who knows how certain tasks get done",
      "Businesses onboarding new employees regularly",
      "Teams where quality or output varies by who did the work",
      "Companies preparing to delegate more responsibility to staff",
      "Businesses planning to franchise, scale locations, or add shifts",
    ],
    exampleSituations: [
      "A new hire asks the same setup questions that three previous employees also asked, because nothing was ever written down.",
      "An owner wants to take a real vacation but worries daily operations will fall apart without them.",
      "A business is opening a second location and needs the first location's processes documented so they can be repeated.",
      "Customer complaints trace back to a step in the process that different employees handle differently.",
    ],
    process: [
      {
        title: "Understand",
        description:
          "We observe or discuss how work currently happens, including the informal steps that are not written anywhere.",
      },
      {
        title: "Prioritize",
        description:
          "We identify which processes cause the most training pain, quality issues, or delegation risk first.",
      },
      {
        title: "Build or Improve",
        description:
          "We document clear SOPs, checklists, and process maps in a format your team will actually use.",
      },
      {
        title: "Support",
        description:
          "We help roll the documentation out to your team, gather feedback, and keep it updated as processes evolve.",
      },
    ],
    relatedServiceSlugs: ["systems-automation", "business-strategy", "recurring-business-support"],
    faqs: [
      {
        question: "Do you interview our employees to write the SOPs?",
        answer:
          "Often, yes. The most accurate SOPs usually come from watching or talking with the people who do the work daily, combined with the owner's expectations for how it should be done.",
      },
      {
        question: "What format do the SOPs come in?",
        answer:
          "We match the format to how your team already works — that might be a simple shared document, a checklist app, or a structured internal knowledge base, depending on your tools and team size.",
      },
      {
        question: "Can this help us delegate more without losing quality?",
        answer:
          "That is usually the main goal. Clear, written processes make it possible to hand off responsibility with a consistent standard, rather than hoping a new employee figures it out the same way an experienced one did.",
      },
    ],
  },
  {
    slug: "marketing",
    name: "Marketing",
    shortDescription:
      "Strengthen positioning, messaging, offers, campaigns, customer journeys, and retention.",
    cardDescription:
      "Strengthen positioning, messaging, offers, campaigns, customer journeys, and retention.",
    eyebrow: "SMALL BUSINESS MARKETING CONSULTING",
    h1: "Marketing strategy and execution designed around your real business goals.",
    metaTitle: "Small Business Marketing Consultant | AeroScale",
    metaDescription:
      "A small business marketing consultant for positioning, messaging, campaigns, and retention — strategy-only projects, campaign creation, or ongoing marketing support.",
    icon: Megaphone,
    engagementType: "either",
    intro: [
      "Marketing only works when it starts with a clear understanding of who you serve and why they choose you. As a small business marketing consultant, AeroScale helps owners define that positioning, then builds the messaging, campaigns, and customer journeys that put it into practice.",
      "We work across the full marketing picture — from a single strategy project to ongoing execution — and we are comfortable coordinating with agencies or vendors you already work with rather than requiring you to replace them.",
    ],
    problemsSolved: [
      "The business's messaging is unclear or inconsistent across channels",
      "Marketing efforts feel scattered without an underlying strategy",
      "Offers are not resonating with the intended customer",
      "There is no consistent system for staying in front of past customers",
      "Content and campaigns are created without a plan behind them",
      "The business does not have a clear picture of what is working",
    ],
    specificServices: [
      "Marketing strategy",
      "Customer definition",
      "Audience research",
      "Offer positioning",
      "Messaging development",
      "Campaign planning",
      "Content strategy",
      "Email marketing",
      "SMS marketing",
      "Lead-nurture planning",
      "Customer-retention campaigns",
      "Referral programs",
      "Marketing calendars",
      "Landing-page strategy",
      "Conversion improvement",
      "Marketing performance reviews",
    ],
    deliverables: [
      "Marketing strategy document",
      "Messaging and positioning guide",
      "Campaign plan and calendar",
      "Email or SMS nurture sequence",
      "Retention or referral program design",
      "Landing-page recommendations",
      "Marketing performance review",
    ],
    whoItsFor: [
      "Businesses whose marketing feels inconsistent or disconnected from strategy",
      "Owners who are not sure their messaging speaks to the right customer",
      "Companies with an audience but no consistent nurture or retention plan",
      "Businesses that already work with an agency but need strategic oversight",
      "Owners who want a marketing calendar instead of last-minute campaigns",
    ],
    exampleSituations: [
      "A business has a website and social accounts but no underlying marketing strategy connecting them.",
      "An owner is unsure whether their pricing, offer, or messaging is the reason leads are not converting.",
      "A company wants a structured way to stay in touch with past customers instead of relying on one-off promotions.",
      "A business already works with a freelance designer or agency but wants a strategist to guide the overall plan.",
    ],
    process: [
      {
        title: "Understand",
        description:
          "We learn about your customers, current marketing efforts, offers, and what has and has not worked before.",
      },
      {
        title: "Prioritize",
        description:
          "We identify whether the biggest opportunity is positioning, a specific channel, retention, or campaign execution.",
      },
      {
        title: "Build or Improve",
        description:
          "We develop the messaging, campaign plan, or marketing calendar your business needs to move forward.",
      },
      {
        title: "Support",
        description:
          "We help execute campaigns, review performance, and refine the marketing plan as results come in.",
      },
    ],
    relatedServiceSlugs: ["advertising", "market-research", "data-analytics"],
    faqs: [
      {
        question: "Will you guarantee more leads or sales?",
        answer:
          "No. Marketing performance depends on many factors outside any single consultant's control, including your market, offer, and execution. We focus on sound strategy and disciplined execution rather than guarantees we cannot back up.",
      },
      {
        question: "Can you just review our marketing strategy without executing it?",
        answer:
          "Yes. Some clients want a strategy-only engagement, while others want AeroScale to also build and manage the campaigns. We scope the engagement around what you need.",
      },
      {
        question: "Do you replace our existing marketing vendor or agency?",
        answer:
          "Not necessarily. We regularly coordinate with a client's existing agencies, freelancers, or internal marketing staff rather than requiring an all-or-nothing switch.",
      },
    ],
  },
  {
    slug: "advertising",
    name: "Advertising",
    shortDescription:
      "Plan, launch, manage, and improve paid campaigns connected to measurable business goals.",
    cardDescription:
      "Plan, launch, manage, and improve paid campaigns connected to measurable business goals.",
    eyebrow: "SMALL BUSINESS ADVERTISING MANAGEMENT",
    h1: "Paid advertising connected to a clear offer, follow-up system, and business objective.",
    metaTitle: "Small Business Advertising Management | AeroScale",
    metaDescription:
      "Advertising strategy and campaign management connected to a clear offer, tracking, and follow-up — so paid campaigns support a measurable business objective.",
    icon: Target,
    engagementType: "either",
    intro: [
      "Paid advertising rarely fails because of the ad platform — it usually fails because the offer, landing page, tracking, or follow-up process was not connected to the campaign in the first place. AeroScale plans and manages advertising as one piece of a larger system rather than an isolated activity.",
      "We work across common advertising platforms based on current capability and availability, and we are direct about what advertising can and cannot promise.",
    ],
    problemsSolved: [
      "Ad spend is not connected to a clear business objective",
      "Campaigns are running without proper conversion tracking",
      "Leads from ads are not followed up on quickly or consistently",
      "The business does not know which campaigns are actually working",
      "Landing pages are not aligned with what the ad promises",
      "Retargeting and audience strategy are missing or underused",
    ],
    specificServices: [
      "Advertising strategy",
      "Campaign planning",
      "Meta advertising",
      "Google Ads planning or management",
      "Audience research",
      "Creative direction",
      "Ad-copy development",
      "Landing-page coordination",
      "Lead tracking",
      "Conversion tracking",
      "Budget planning",
      "Campaign reporting",
      "Retargeting",
      "Performance improvement",
    ],
    deliverables: [
      "Advertising strategy and budget plan",
      "Campaign structure and targeting plan",
      "Ad creative and copy direction",
      "Conversion tracking setup",
      "Retargeting audience plan",
      "Monthly or periodic campaign reporting",
      "Performance-improvement recommendations",
    ],
    whoItsFor: [
      "Businesses ready to invest in paid advertising for the first time",
      "Companies currently running ads without clear tracking or reporting",
      "Owners who have tried advertising before with unclear results",
      "Businesses that need advertising coordinated with landing pages and follow-up",
      "Companies that want ongoing campaign management rather than a one-time setup",
    ],
    exampleSituations: [
      "A business wants to launch its first paid campaign but has no tracking in place to measure results.",
      "An owner has run ads for months and cannot say which campaigns actually produced customers.",
      "A company's ads are generating clicks, but leads are not being followed up on quickly enough to convert.",
      "A business wants ongoing campaign management instead of a one-time setup that goes unmanaged.",
    ],
    process: [
      {
        title: "Understand",
        description:
          "We review your offer, audience, budget, and any past advertising history or performance data.",
      },
      {
        title: "Prioritize",
        description:
          "We determine which platform, audience, and campaign structure gives the clearest path to your objective.",
      },
      {
        title: "Build or Improve",
        description:
          "We build the campaign, tracking, and creative, or improve an existing campaign that is underperforming.",
      },
      {
        title: "Support",
        description:
          "We monitor performance, report on results, and adjust targeting, budget, or creative over time.",
      },
    ],
    relatedServiceSlugs: ["marketing", "data-analytics", "recurring-business-support"],
    faqs: [
      {
        question: "Is ad spend included in your fees?",
        answer:
          "No. Ad spend paid directly to the advertising platform is separate from AeroScale's service fees for strategy, setup, and management.",
      },
      {
        question: "Can you guarantee a certain number of leads or a specific cost per lead?",
        answer:
          "No. Advertising results depend on your market, offer, budget, and competition, among other factors. We do not guarantee leads, cost per result, or return on ad spend.",
      },
      {
        question: "What if our landing page or follow-up process needs work too?",
        answer:
          "We will tell you. Advertising performs best when the offer, tracking, landing page, and follow-up process all work together, so we may recommend improvements outside the ad platform itself.",
      },
    ],
  },
  {
    slug: "business-plans",
    name: "Business Plans",
    shortDescription:
      "Create professional business plans for launches, financing, growth, partnerships, or internal direction.",
    cardDescription:
      "Create professional business plans for launches, financing, growth, partnerships, or internal direction.",
    eyebrow: "BUSINESS PLAN CONSULTING",
    h1: "A business plan that helps you think clearly and communicate professionally.",
    metaTitle: "Business Plan Consultant and Writing Services | AeroScale",
    metaDescription:
      "A business plan consultant that helps small business owners create professional, well-organized plans for launches, financing, growth, or internal direction.",
    icon: FileText,
    engagementType: "project",
    intro: [
      "A good business plan does two things: it forces the owner to think clearly about the business, and it communicates that thinking professionally to a lender, partner, or internal team. AeroScale works as a business plan consultant to help organize your thinking, research, and numbers into a plan that actually holds up to scrutiny.",
      "We build plans for a range of purposes — a new launch, a lender conversation, a growth initiative, or simply an internal document to align a leadership team. The structure and depth of the plan is matched to its purpose.",
    ],
    problemsSolved: [
      "The business has never had a written plan",
      "An existing plan is outdated or was never finished",
      "The owner needs a professional plan for a lender or investor conversation",
      "A partnership or expansion requires a documented plan",
      "The leadership team needs a shared reference for direction and milestones",
      "Financial assumptions and narrative sections are scattered across separate documents",
    ],
    specificServices: [
      "Startup business plans",
      "Growth plans",
      "Internal operating plans",
      "Lender-oriented plan support",
      "Investor-oriented plan support",
      "Executive summaries",
      "Market analysis",
      "Competitive analysis",
      "Product and service strategy",
      "Marketing plans",
      "Operations plans",
      "Milestones and timelines",
      "Financial-assumption organization",
    ],
    deliverables: [
      "Complete written business plan",
      "Executive summary",
      "Market and competitive analysis section",
      "Operations and milestones section",
      "Organized financial-assumptions summary",
      "Plan formatted for its intended audience (lender, partner, or internal)",
    ],
    whoItsFor: [
      "Owners launching a new business or new location",
      "Companies preparing for a lender or investor conversation",
      "Businesses entering a partnership that requires a documented plan",
      "Leadership teams that want a shared written plan for direction",
      "Owners who started a plan themselves but need help finishing it professionally",
    ],
    exampleSituations: [
      "An entrepreneur needs a professional business plan to support a loan application.",
      "A growing company wants a written growth plan to guide the next two years of decisions.",
      "Two business partners want a documented plan to align on direction before formalizing their partnership.",
      "An owner has scattered notes, spreadsheets, and ideas that need to be organized into one coherent plan.",
    ],
    process: [
      {
        title: "Understand",
        description:
          "We learn the purpose of the plan, its intended audience, and the business details, research, and numbers already available.",
      },
      {
        title: "Prioritize",
        description:
          "We determine which sections need the most depth based on who will read the plan and why.",
      },
      {
        title: "Build or Improve",
        description:
          "We write and organize the plan, incorporating your financial assumptions and any supporting research.",
      },
      {
        title: "Support",
        description:
          "We revise the plan based on your feedback and help you prepare to present or submit it.",
      },
    ],
    relatedServiceSlugs: ["business-strategy", "market-research", "data-analytics"],
    faqs: [
      {
        question: "Does a business plan guarantee financing or investment?",
        answer:
          "No. A well-written plan improves how your business is presented, but it does not guarantee financing, investment, or approval from any lender or investor.",
      },
      {
        question: "Do you create the financial projections?",
        answer:
          "Financial assumptions and projections must be supplied or approved by the client. We help organize and present these figures clearly, but the underlying assumptions need to come from you or a qualified financial professional.",
      },
      {
        question: "Should we also talk to an accountant or attorney?",
        answer:
          "For legal, tax, accounting, investment, or other regulated financial matters connected to your plan, you should consult an appropriately qualified professional. AeroScale provides business consulting and writing support, not licensed financial or legal advice.",
      },
    ],
  },
  {
    slug: "market-research",
    name: "Market Research",
    shortDescription:
      "Understand customers, competitors, pricing, demand, markets, and new opportunities.",
    cardDescription:
      "Understand customers, competitors, pricing, demand, markets, and new opportunities.",
    eyebrow: "SMALL BUSINESS MARKET RESEARCH",
    h1: "Make important business decisions with better market information.",
    metaTitle: "Market Research for Small Businesses | AeroScale",
    metaDescription:
      "Small business market research covering competitors, customers, pricing, and demand — so owners can make important decisions with better information.",
    icon: Search,
    engagementType: "project",
    intro: [
      "Many important business decisions — pricing a new offer, entering a new market, evaluating an acquisition — get made on instinct because gathering real information feels out of reach for a small business. AeroScale's market research services are scoped to be practical and affordable for owners who need better information, not an enterprise research budget.",
      "We are careful to separate what the research actually shows from what it suggests. Every research project distinguishes verified facts from informed estimates, so you know how much confidence to place in each conclusion.",
    ],
    problemsSolved: [
      "The business is pricing based on guesswork rather than market data",
      "The owner does not have a clear picture of the competitive landscape",
      "A new market, location, or customer segment is being considered without research",
      "Demand for a new product or service idea is unclear",
      "The business is considering an acquisition without independent market context",
      "Decisions rely on assumptions that have never been tested",
    ],
    specificServices: [
      "Competitor research",
      "Customer research",
      "Industry research",
      "Market sizing",
      "Pricing research",
      "Geographic research",
      "Demand research",
      "Trend analysis",
      "Offer comparisons",
      "Location analysis",
      "Customer-interview planning",
      "Survey development",
      "Opportunity research",
      "Acquisition-market research",
    ],
    deliverables: [
      "Research summary",
      "Competitor matrix",
      "Pricing comparison",
      "Market map",
      "Customer insights summary",
      "Opportunity analysis",
      "Decision recommendations",
      "Source appendix",
    ],
    whoItsFor: [
      "Owners evaluating a new product, service, or market",
      "Businesses unsure whether their pricing is competitive",
      "Companies considering a new location or geographic expansion",
      "Owners evaluating an acquisition or partnership opportunity",
      "Teams that want to validate an idea before investing in it",
    ],
    exampleSituations: [
      "A business wants to know whether its prices are in line with competitors before raising or lowering them.",
      "An owner is considering a second location and wants research on the target neighborhood's demand and competition.",
      "A company wants to validate demand for a new service idea before building it out.",
      "A business is evaluating an acquisition and wants an independent look at the target market.",
    ],
    process: [
      {
        title: "Understand",
        description:
          "We clarify the decision you are trying to make and what information would actually change that decision.",
      },
      {
        title: "Prioritize",
        description:
          "We scope the research to the questions that matter most, given time and budget constraints.",
      },
      {
        title: "Build or Improve",
        description:
          "We gather and analyze the research, clearly separating verified facts, research-supported conclusions, assumptions, and estimates.",
      },
      {
        title: "Support",
        description:
          "We walk through the findings, answer questions, and help translate the research into a recommended next step.",
      },
    ],
    relatedServiceSlugs: ["business-strategy", "business-plans", "data-analytics"],
    faqs: [
      {
        question: "How is your research different from something we could Google ourselves?",
        answer:
          "We structure the research around the specific decision you are trying to make, synthesize it into a clear summary, and are explicit about what is a verified fact versus an estimate — rather than leaving you to sort through scattered search results.",
      },
      {
        question: "Can you guarantee the research will support our idea?",
        answer:
          "No, and you would not want us to. The value of market research is an honest picture of demand, competition, and pricing — even when the findings suggest caution rather than confirmation.",
      },
      {
        question: "Do you conduct customer interviews or surveys yourselves?",
        answer:
          "We can plan and design customer interviews or surveys, and depending on the project, help facilitate or analyze them alongside secondary research and competitive analysis.",
      },
    ],
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    shortDescription:
      "Turn scattered business information into useful dashboards, reports, trends, and decisions.",
    cardDescription:
      "Turn scattered business information into useful dashboards, reports, trends, and decisions.",
    eyebrow: "SMALL BUSINESS DATA ANALYTICS",
    h1: "Turn business data into clearer decisions.",
    metaTitle: "Small Business Data Analytics and Reporting | AeroScale",
    metaDescription:
      "Small business data analytics and reporting services that turn scattered spreadsheets and systems into clear dashboards, KPIs, and decisions.",
    icon: BarChart3,
    engagementType: "either",
    intro: [
      "Most small businesses are not short on data — they are short on time to make sense of it. Sales numbers live in one system, marketing data in another, and operational information in a spreadsheet nobody has updated in months. AeroScale helps organize that information into reporting you can actually use.",
      "We focus on a small number of meaningful KPIs rather than an overwhelming dashboard of numbers nobody checks, and we automate reporting wherever it reasonably can be automated.",
    ],
    problemsSolved: [
      "The business has data but no practical way to use it",
      "Reports require too much manual effort to produce",
      "Numbers conflict across different systems",
      "Marketing attribution and lead sources are unclear",
      "The owner cannot quickly see how the business is performing",
      "Important trends are noticed too late to act on",
    ],
    specificServices: [
      "KPI selection",
      "Dashboard design",
      "Sales reporting",
      "Marketing reporting",
      "Lead-conversion analysis",
      "Customer analysis",
      "Revenue analysis",
      "Operational reporting",
      "Employee-performance reporting",
      "Trend identification",
      "Data cleanup",
      "Spreadsheet analysis",
      "Automated reports",
      "Management summaries",
    ],
    deliverables: [
      "KPI framework",
      "Dashboard or reporting template",
      "Automated recurring reports",
      "Data-cleanup summary",
      "Trend and performance analysis",
      "Management summary report",
    ],
    whoItsFor: [
      "Owners who make decisions without a clear view of current performance",
      "Businesses whose reporting takes hours of manual work each week",
      "Companies whose numbers do not match across systems",
      "Teams that want a simple dashboard instead of scattered spreadsheets",
      "Businesses that want recurring reporting without hiring an analyst",
    ],
    exampleSituations: [
      "An owner wants a single weekly view of sales, leads, and marketing performance instead of checking five different systems.",
      "Two reports show different revenue numbers for the same month and nobody is sure which one is correct.",
      "A business wants to know which marketing channels are actually producing paying customers.",
      "A growing team needs a simple way to track operational or employee performance metrics over time.",
    ],
    process: [
      {
        title: "Understand",
        description:
          "We review your current data sources, systems, and the decisions your reporting needs to support.",
      },
      {
        title: "Prioritize",
        description:
          "We select the small number of KPIs that matter most, rather than reporting on everything available.",
      },
      {
        title: "Build or Improve",
        description:
          "We clean up the data, build the dashboard or report, and automate it wherever practical.",
      },
      {
        title: "Support",
        description:
          "We help you interpret the numbers, refine the reporting over time, and add new metrics as priorities change.",
      },
    ],
    relatedServiceSlugs: ["systems-automation", "marketing", "recurring-business-support"],
    faqs: [
      {
        question: "What if our data is messy or incomplete?",
        answer:
          "That is common. The quality, consistency, and completeness of your available data directly affects what analytics can reliably show — we will tell you honestly where the data is too thin to support a firm conclusion.",
      },
      {
        question: "Do you build dashboards in a specific tool?",
        answer:
          "We match the reporting tool to what your business already uses and can maintain, whether that is a spreadsheet-based dashboard, a reporting feature inside an existing platform, or a dedicated analytics tool.",
      },
      {
        question: "Can you set up reporting that updates automatically?",
        answer:
          "Where your data sources support it, yes — we build automated or semi-automated reports so you are not rebuilding the same report by hand every week or month.",
      },
    ],
  },
  {
    slug: "recurring-business-support",
    name: "Recurring Business Support",
    shortDescription:
      "Get ongoing strategy, implementation, planning, reporting, and project support.",
    cardDescription:
      "Get ongoing strategy, implementation, planning, reporting, and project support.",
    eyebrow: "ONGOING SMALL BUSINESS CONSULTING",
    h1: "Ongoing business support without hiring every role in-house.",
    metaTitle: "Ongoing Small Business Consulting and Support | AeroScale",
    metaDescription:
      "Ongoing small business consulting and support services covering strategy, marketing, reporting, systems, and implementation — without hiring every role in-house.",
    icon: Users,
    engagementType: "recurring",
    intro: [
      "Some businesses do not need a single project — they need an ongoing partner who can flex across strategy, marketing, operations, and reporting as priorities change month to month. Recurring business support is AeroScale's answer to that need: consistent access to consulting and implementation support without hiring a full internal team.",
      "The right plan depends on your business size, goals, work volume, required specialties, meeting frequency, implementation needs, and existing internal team. Some engagements function similarly to a fractional growth or operations resource for a specific area of the business, though AeroScale is not positioned as a fractional COO provider for the entire company.",
    ],
    problemsSolved: [
      "The business needs ongoing strategic input but not a full-time executive hire",
      "Marketing, reporting, and systems work keeps getting deprioritized",
      "Projects start but stall without dedicated follow-through",
      "The owner has no one to think through decisions with regularly",
      "Multiple specialties are needed but none justify a full-time role alone",
      "Priorities shift throughout the year and support needs to flex with them",
    ],
    specificServices: [
      "Monthly strategy sessions",
      "Quarterly planning",
      "Project coordination",
      "Marketing support",
      "Advertising management",
      "Reporting",
      "Dashboard maintenance",
      "Systems monitoring",
      "Automation improvement",
      "SOP updates",
      "Research",
      "Vendor coordination",
      "Owner decision support",
      "Priority-project execution",
    ],
    deliverables: [
      "Recurring strategy session cadence",
      "Quarterly planning sessions",
      "Ongoing marketing or advertising execution",
      "Maintained reporting and dashboards",
      "Updated SOPs and systems",
      "Prioritized project execution",
      "Ongoing owner advisory support",
    ],
    whoItsFor: [
      "Businesses that need multiple types of support but not multiple full-time hires",
      "Owners who want a consistent advisor for ongoing decisions",
      "Companies with recurring marketing, reporting, or systems needs",
      "Growing businesses that need priority projects actually completed",
      "Teams that want quarterly planning and accountability built in",
    ],
    exampleSituations: [
      "An owner wants a monthly strategy call to stay accountable to priorities instead of getting pulled into daily operations.",
      "A business needs ongoing marketing execution, reporting, and occasional project work, but not enough of any one thing to justify a full-time hire.",
      "A company wants quarterly planning sessions paired with support actually implementing what gets decided.",
      "A growing team needs someone coordinating vendors, systems, and priority projects across several departments.",
    ],
    process: [
      {
        title: "Understand",
        description:
          "We assess your business size, goals, existing team, and the mix of support that fits your current stage.",
      },
      {
        title: "Prioritize",
        description:
          "We agree on a recurring cadence and the priority areas — strategy, marketing, operations, or a combination — for the engagement.",
      },
      {
        title: "Build or Improve",
        description:
          "We execute the ongoing work: sessions, campaigns, reporting, systems updates, and priority projects.",
      },
      {
        title: "Support",
        description:
          "We revisit priorities regularly, report on progress, and adjust the engagement as your business changes.",
      },
    ],
    relatedServiceSlugs: ["business-strategy", "marketing", "data-analytics"],
    faqs: [
      {
        question: "What is the difference between advisory, growth, operations, and custom support?",
        answer:
          "These are sample engagement structures rather than fixed packages. Advisory support centers on prioritization and decision support. Growth support adds marketing, reporting, and implementation. Operations support focuses on systems, SOPs, and process work. Custom support blends multiple categories together based on your needs.",
      },
      {
        question: "How is this different from hiring a fractional COO?",
        answer:
          "Some recurring engagements function similarly to a fractional growth or operations resource for a specific area of the business. AeroScale is not positioned as a full fractional COO for the entire company — the scope is defined around the specific support your business needs.",
      },
      {
        question: "Can we change the scope of support over time?",
        answer:
          "Yes. Recurring engagements are designed to flex as your priorities shift, whether that means more marketing execution one quarter or more systems work the next.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: ServiceDefinition): ServiceDefinition[] {
  return service.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceDefinition => Boolean(s));
}
