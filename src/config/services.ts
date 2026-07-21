import {
  Compass,
  Megaphone,
  Rocket,
  Search,
  FileText,
  ClipboardList,
  Workflow,
  LayoutDashboard,
  RefreshCw,
  Users,
  CalendarClock,
  Wrench,
  TrendingUp,
  BarChart3,
  Settings,
  Send,
  Target,
  Flag,
} from "lucide-react";
import type { ServiceDefinition } from "@/types";

export const services: ServiceDefinition[] = [
  // ─────────────────────────────────────────────────────────────
  // PROJECTS (one-time)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "strategic-planning",
    oneTimePrice: 550,
    category: "projects",
    name: "Strategic Planning",
    shortDescription: "A one-time engagement that turns a long list of ideas into a clear, prioritized plan.",
    cardDescription: "A one-time engagement that turns a long list of ideas into a clear, prioritized plan.",
    eyebrow: "STRATEGIC PLANNING",
    h1: "A strategic plan that turns a long list of ideas into a clear next move.",
    metaTitle: "Strategic Planning Consultant | AeroScale",
    metaDescription:
      "One-time strategic planning engagements that clarify priorities, evaluate opportunities, and produce a practical growth plan for your business.",
    icon: Compass,
    intro: [
      "Most small business owners do not lack ambition — they lack a clear, written answer to the question \"what matters most right now?\" A strategic planning engagement takes the long list of ideas, problems, and opportunities sitting in your head and turns it into a realistic plan the business can execute.",
      "This is a one-time project with a defined start and finish: we study the business, rank what matters, and hand you a working plan — not a strategy conversation that never gets written down.",
    ],
    problemsSolved: [
      "The owner is unsure what to prioritize",
      "Too many opportunities compete for attention",
      "Growth has stalled or flattened",
      "The company has never had a written plan",
      "The business is expanding without clear direction",
      "Decisions are being made reactively instead of strategically",
    ],
    specificServices: [
      "Opportunity evaluation",
      "Competitive positioning",
      "Offer development",
      "Revenue-stream analysis",
      "Goal setting",
      "Growth planning",
      "Business-model review",
      "Expansion planning",
      "Risk and constraint analysis",
      "Decision-framework design",
    ],
    deliverables: [
      "Strategic roadmap",
      "90-day action plan",
      "Annual priorities document",
      "Opportunity ranking",
      "Decision framework",
    ],
    whoItsFor: [
      "Owners who feel busy but unsure the business is moving forward",
      "Businesses considering a new offer, market, or location",
      "Companies whose growth has stalled and need a clear next step",
      "Leadership teams that disagree on priorities",
    ],
    exampleSituations: [
      "A business owner has five potential projects on their list and needs help deciding which one to tackle first.",
      "Revenue has plateaued for two years and the owner is not sure whether the problem is marketing, operations, or the offer itself.",
      "A company is evaluating whether to open a second location, add a product line, or expand into a new service area.",
    ],
    process: [
      {
        title: "Understand",
        description: "We review the business's current position, past performance, resources, and the goals the owner is working toward.",
      },
      {
        title: "Prioritize",
        description: "We rank the opportunities and problems on the table by expected impact, urgency, cost, and effort.",
      },
      {
        title: "Build or Improve",
        description: "We build the strategic roadmap and decision framework that turns priorities into a plan the business can execute.",
      },
      {
        title: "Support",
        description: "We walk through the plan with you and outline how to track progress once the engagement wraps up.",
      },
    ],
    relatedServiceSlugs: ["business-plans"],
    faqs: [
      {
        question: "Do you build a strategy from scratch or work with what we already have?",
        answer:
          "Both. Some clients want a full plan built from the ground up. Others already have goals or partial plans and want help prioritizing, stress-testing, or filling the gaps.",
      },
      {
        question: "Is this a one-time project or an ongoing service?",
        answer:
          "Strategic Planning is a one-time engagement. Many owners follow it with recurring Quarterly Planning to keep the plan current, or Monthly Strategy Support for ongoing strategic input.",
      },
      {
        question: "Will you tell us exactly what to do?",
        answer:
          "We provide clear, specific recommendations rather than vague advice. The final decisions remain with the business owner, but you will leave with a concrete, prioritized plan rather than a list of open-ended options.",
      },
    ],
  },
  {
    slug: "marketing-strategy",
    oneTimePrice: 550,
    category: "projects",
    name: "Marketing Strategy",
    shortDescription: "A one-time engagement to define your positioning, messaging, and marketing plan.",
    cardDescription: "A one-time engagement to define your positioning, messaging, and marketing plan.",
    eyebrow: "MARKETING STRATEGY",
    h1: "A marketing strategy built around who you serve and why they choose you.",
    metaTitle: "Small Business Marketing Strategy Consultant | AeroScale",
    metaDescription:
      "A one-time marketing strategy engagement covering positioning, messaging, and campaign planning — the foundation before execution begins.",
    icon: Megaphone,
    intro: [
      "Marketing only works when it starts with a clear understanding of who you serve and why they choose you. This is a one-time engagement focused on getting that foundation right: positioning, messaging, and a campaign plan you can hand to whoever executes it.",
      "This project builds the plan. If you want AeroScale to also run the campaigns month to month, that ongoing work lives under Marketing Execution.",
    ],
    problemsSolved: [
      "The business's messaging is unclear or inconsistent across channels",
      "Marketing efforts feel scattered without an underlying strategy",
      "Offers are not resonating with the intended customer",
      "The business does not have a clear picture of its ideal customer",
      "Campaigns get created without a plan behind them",
    ],
    specificServices: [
      "Customer definition",
      "Audience research",
      "Offer positioning",
      "Messaging development",
      "Campaign planning",
      "Content strategy",
      "Marketing calendar design",
      "Landing-page strategy",
    ],
    deliverables: [
      "Marketing strategy document",
      "Messaging and positioning guide",
      "Campaign plan and calendar",
      "Landing-page recommendations",
    ],
    whoItsFor: [
      "Businesses whose marketing feels inconsistent or disconnected from strategy",
      "Owners who are not sure their messaging speaks to the right customer",
      "Companies about to invest in campaigns without an underlying plan",
      "Businesses that already work with an agency but need strategic direction first",
    ],
    exampleSituations: [
      "A business has a website and social accounts but no underlying marketing strategy connecting them.",
      "An owner is unsure whether their pricing, offer, or messaging is the reason leads are not converting.",
      "A business already works with a freelance designer or agency but wants a strategist to guide the overall plan first.",
    ],
    process: [
      {
        title: "Understand",
        description: "We learn about your customers, current marketing efforts, offers, and what has and hasn't worked before.",
      },
      {
        title: "Prioritize",
        description: "We identify whether the biggest opportunity is positioning, messaging, or a specific channel.",
      },
      {
        title: "Build or Improve",
        description: "We develop the messaging, positioning, and campaign plan your business needs to move forward.",
      },
      {
        title: "Support",
        description: "We walk through the strategy with you and outline how to hand it off for execution, in-house or through AeroScale.",
      },
    ],
    relatedServiceSlugs: ["advertising-setup"],
    faqs: [
      {
        question: "Will you guarantee more leads or sales?",
        answer:
          "No. Marketing performance depends on many factors outside any single consultant's control, including your market, offer, and execution. We focus on sound strategy rather than guarantees we cannot back up.",
      },
      {
        question: "Does this include running the campaigns?",
        answer:
          "No — Marketing Strategy is the planning engagement. Ongoing execution, including email, SMS, content, and retention campaigns, is covered under the separate Marketing Execution service.",
      },
      {
        question: "Do you replace our existing marketing vendor or agency?",
        answer:
          "Not necessarily. We regularly build strategy that a client's existing agency, freelancer, or internal team then executes.",
      },
    ],
  },
  {
    slug: "advertising-setup",
    oneTimePrice: 550,
    category: "projects",
    name: "Advertising Setup",
    shortDescription: "A one-time launch of paid advertising, connected to your offer, tracking, and follow-up.",
    cardDescription: "A one-time launch of paid advertising, connected to your offer, tracking, and follow-up.",
    eyebrow: "ADVERTISING SETUP",
    h1: "A paid advertising launch connected to your offer, tracking, and follow-up.",
    metaTitle: "Advertising Setup for Small Businesses | AeroScale",
    metaDescription:
      "A one-time advertising setup engagement — strategy, tracking, creative, and launch — so your first (or next) campaign starts on solid footing.",
    icon: Rocket,
    intro: [
      "Paid advertising rarely fails because of the platform — it usually fails because the offer, landing page, tracking, or follow-up process was never properly connected to the campaign. This engagement builds that foundation and gets your campaign launched correctly.",
      "This is a one-time setup project. Ongoing day-to-day management of a live campaign — monitoring, optimizing, reporting — is covered separately under Advertising Management.",
    ],
    problemsSolved: [
      "The business has never run paid advertising and doesn't know where to start",
      "A previous ad campaign launched without proper tracking",
      "Ad spend has no clear connection to a business objective",
      "Landing pages don't align with what the ad promises",
    ],
    specificServices: [
      "Advertising strategy",
      "Campaign planning",
      "Audience research",
      "Creative direction",
      "Ad-copy development",
      "Landing-page coordination",
      "Conversion-tracking setup",
      "Budget planning",
    ],
    deliverables: [
      "Advertising strategy and budget plan",
      "Campaign structure and targeting plan",
      "Ad creative and copy direction",
      "Conversion-tracking setup",
    ],
    whoItsFor: [
      "Businesses launching paid advertising for the first time",
      "Owners who tried ads before without proper tracking in place",
      "Companies about to invest ad budget who want the setup done right",
    ],
    exampleSituations: [
      "A business wants to launch its first paid campaign but has no tracking in place to measure results.",
      "An owner ran ads previously and cannot say which campaigns actually produced customers.",
      "A company has budget approved for advertising but nothing built yet to launch it correctly.",
    ],
    process: [
      {
        title: "Understand",
        description: "We review your offer, audience, budget, and any past advertising history.",
      },
      {
        title: "Prioritize",
        description: "We determine which platform, audience, and campaign structure gives the clearest path to your objective.",
      },
      {
        title: "Build or Improve",
        description: "We build the campaign structure, tracking, and creative, and coordinate the landing page it points to.",
      },
      {
        title: "Support",
        description: "We launch the campaign and confirm tracking is firing correctly before handing off or transitioning to ongoing management.",
      },
    ],
    relatedServiceSlugs: ["marketing-strategy"],
    faqs: [
      {
        question: "Is ad spend included in your fees?",
        answer:
          "No. Ad spend paid directly to the advertising platform is separate from AeroScale's setup fee.",
      },
      {
        question: "Who manages the campaign after it launches?",
        answer:
          "Advertising Setup covers the launch. Ongoing monitoring, optimization, and reporting are handled through the separate Advertising Management service, or by your own team if you prefer.",
      },
      {
        question: "Can you guarantee a certain number of leads?",
        answer:
          "No. Advertising results depend on your market, offer, budget, and competition. We do not guarantee leads, cost per result, or return on ad spend.",
      },
    ],
  },
  {
    slug: "market-research",
    oneTimePrice: 1100,
    category: "projects",
    name: "Market Research",
    shortDescription: "Understand customers, competitors, pricing, demand, markets, and new opportunities.",
    cardDescription: "Understand customers, competitors, pricing, demand, markets, and new opportunities.",
    eyebrow: "SMALL BUSINESS MARKET RESEARCH",
    h1: "Make important business decisions with better market information.",
    metaTitle: "Market Research for Small Businesses | AeroScale",
    metaDescription:
      "Small business market research covering competitors, customers, pricing, and demand — so owners can make important decisions with better information.",
    icon: Search,
    intro: [
      "Many important business decisions — pricing a new offer, entering a new market, evaluating an acquisition — get made on instinct because gathering real information feels out of reach for a small business. This engagement is scoped to be practical and affordable for owners who need better information, not an enterprise research budget.",
      "We are careful to separate what the research actually shows from what it suggests. Every project distinguishes verified facts from informed estimates, so you know how much confidence to place in each conclusion.",
    ],
    problemsSolved: [
      "The business is pricing based on guesswork rather than market data",
      "The owner does not have a clear picture of the competitive landscape",
      "A new market, location, or customer segment is being considered without research",
      "Demand for a new product or service idea is unclear",
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
      "Customer-interview planning",
      "Survey development",
    ],
    deliverables: [
      "Research summary",
      "Competitor matrix",
      "Pricing comparison",
      "Market map",
      "Opportunity analysis",
      "Source appendix",
    ],
    whoItsFor: [
      "Owners evaluating a new product, service, or market",
      "Businesses unsure whether their pricing is competitive",
      "Companies considering a new location or geographic expansion",
      "Teams that want to validate an idea before investing in it",
    ],
    exampleSituations: [
      "A business wants to know whether its prices are in line with competitors before raising or lowering them.",
      "An owner is considering a second location and wants research on the target neighborhood's demand and competition.",
      "A company wants to validate demand for a new service idea before building it out.",
    ],
    process: [
      {
        title: "Understand",
        description: "We clarify the decision you are trying to make and what information would actually change that decision.",
      },
      {
        title: "Prioritize",
        description: "We scope the research to the questions that matter most, given time and budget constraints.",
      },
      {
        title: "Build or Improve",
        description: "We gather and analyze the research, clearly separating verified facts from assumptions and estimates.",
      },
      {
        title: "Support",
        description: "We walk through the findings, answer questions, and help translate the research into a recommended next step.",
      },
    ],
    relatedServiceSlugs: ["data-dashboards"],
    faqs: [
      {
        question: "How is your research different from something we could Google ourselves?",
        answer:
          "We structure the research around the specific decision you are trying to make and synthesize it into a clear summary, rather than leaving you to sort through scattered search results.",
      },
      {
        question: "Can you guarantee the research will support our idea?",
        answer:
          "No, and you would not want us to. The value of market research is an honest picture of demand, competition, and pricing — even when the findings suggest caution.",
      },
      {
        question: "Do you conduct customer interviews or surveys yourselves?",
        answer:
          "We can plan and design customer interviews or surveys, and depending on the project, help facilitate or analyze them alongside secondary research.",
      },
    ],
  },
  {
    slug: "business-plans",
    oneTimePrice: 1650,
    category: "projects",
    name: "Business Plans",
    shortDescription: "Create professional business plans for launches, financing, growth, partnerships, or internal direction.",
    cardDescription: "Create professional business plans for launches, financing, growth, partnerships, or internal direction.",
    eyebrow: "BUSINESS PLAN CONSULTING",
    h1: "A business plan that helps you think clearly and communicate professionally.",
    metaTitle: "Business Plan Consultant and Writing Services | AeroScale",
    metaDescription:
      "A business plan consultant that helps small business owners create professional, well-organized plans for launches, financing, growth, or internal direction.",
    icon: FileText,
    intro: [
      "A good business plan does two things: it forces the owner to think clearly about the business, and it communicates that thinking professionally to a lender, partner, or internal team. We help organize your thinking, research, and numbers into a plan that actually holds up to scrutiny.",
      "We build plans for a range of purposes — a new launch, a lender conversation, a growth initiative, or simply an internal document to align a leadership team. The structure and depth of the plan is matched to its purpose.",
    ],
    problemsSolved: [
      "The business has never had a written plan",
      "An existing plan is outdated or was never finished",
      "The owner needs a professional plan for a lender or investor conversation",
      "A partnership or expansion requires a documented plan",
      "Financial assumptions and narrative sections are scattered across separate documents",
    ],
    specificServices: [
      "Startup business plans",
      "Growth plans",
      "Internal operating plans",
      "Lender-oriented plan support",
      "Investor-oriented plan support",
      "Executive summaries",
      "Market and competitive analysis",
      "Milestones and timelines",
      "Financial-assumption organization",
    ],
    deliverables: [
      "Complete written business plan",
      "Executive summary",
      "Market and competitive analysis section",
      "Organized financial-assumptions summary",
      "Plan formatted for its intended audience",
    ],
    whoItsFor: [
      "Owners launching a new business or new location",
      "Companies preparing for a lender or investor conversation",
      "Businesses entering a partnership that requires a documented plan",
      "Owners who started a plan themselves but need help finishing it professionally",
    ],
    exampleSituations: [
      "An entrepreneur needs a professional business plan to support a loan application.",
      "A growing company wants a written growth plan to guide the next two years of decisions.",
      "An owner has scattered notes, spreadsheets, and ideas that need to be organized into one coherent plan.",
    ],
    process: [
      {
        title: "Understand",
        description: "We learn the purpose of the plan, its intended audience, and the business details and numbers already available.",
      },
      {
        title: "Prioritize",
        description: "We determine which sections need the most depth based on who will read the plan and why.",
      },
      {
        title: "Build or Improve",
        description: "We write and organize the plan, incorporating your financial assumptions and any supporting research.",
      },
      {
        title: "Support",
        description: "We revise the plan based on your feedback and help you prepare to present or submit it.",
      },
    ],
    relatedServiceSlugs: ["strategic-planning"],
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
          "For legal, tax, accounting, investment, or other regulated financial matters connected to your plan, you should consult an appropriately qualified professional.",
      },
    ],
  },
  {
    slug: "sop-development",
    oneTimePrice: 1650,
    category: "projects",
    name: "SOP Development",
    shortDescription: "Turn what's in your head into written SOPs, checklists, and training materials.",
    cardDescription: "Turn what's in your head into written SOPs, checklists, and training materials.",
    eyebrow: "SOP DEVELOPMENT",
    h1: "Turn what's in your head into SOPs your team can actually follow.",
    metaTitle: "SOP Development Services | AeroScale",
    metaDescription:
      "One-time SOP development that turns the owner's tribal knowledge into clear, written processes, checklists, and training materials your team can follow.",
    icon: ClipboardList,
    intro: [
      "In many small businesses, the real process for getting work done only exists in the owner's head — or in the memory of one long-tenured employee. This engagement turns that tribal knowledge into clear, written SOPs, checklists, and training materials your team can actually use.",
      "This is a one-time documentation project — writing down how work should be done today. Keeping those documents current as the business changes is covered separately under Process Improvement.",
    ],
    problemsSolved: [
      "Work is completed differently by each employee",
      "Knowledge exists only in the owner's head",
      "Training new employees takes too long",
      "Employees ask the same questions over and over",
      "Delegation is difficult because nothing is written down",
    ],
    specificServices: [
      "SOP writing",
      "Employee checklists",
      "Training documentation",
      "Employee onboarding materials",
      "Role clarification",
      "Approval-process documentation",
      "Knowledge-base development",
    ],
    deliverables: [
      "SOP library",
      "Checklists",
      "Training guides",
      "Responsibility matrix",
      "Internal knowledge base",
    ],
    whoItsFor: [
      "Owners who are the only person who knows how certain tasks get done",
      "Businesses onboarding new employees regularly",
      "Companies preparing to delegate more responsibility to staff",
      "Businesses planning to add locations or shifts",
    ],
    exampleSituations: [
      "A new hire asks the same setup questions that three previous employees also asked, because nothing was ever written down.",
      "An owner wants to take a real vacation but worries daily operations will fall apart without them.",
      "A business is opening a second location and needs the first location's processes documented so they can be repeated.",
    ],
    process: [
      {
        title: "Understand",
        description: "We observe or discuss how work currently happens, including the informal steps that are not written anywhere.",
      },
      {
        title: "Prioritize",
        description: "We identify which processes cause the most training pain or delegation risk first.",
      },
      {
        title: "Build or Improve",
        description: "We document clear SOPs, checklists, and training materials in a format your team will actually use.",
      },
      {
        title: "Support",
        description: "We help roll the documentation out to your team and gather feedback before wrapping up the project.",
      },
    ],
    relatedServiceSlugs: ["process-improvement"],
    faqs: [
      {
        question: "Do you interview our employees to write the SOPs?",
        answer:
          "Often, yes. The most accurate SOPs usually come from watching or talking with the people who do the work daily, combined with the owner's expectations for how it should be done.",
      },
      {
        question: "What format do the SOPs come in?",
        answer:
          "We match the format to how your team already works — a simple shared document, a checklist app, or a structured internal knowledge base.",
      },
      {
        question: "What happens as our processes change after this project?",
        answer:
          "This engagement documents your processes as they stand today. Keeping them updated as your team and workflows evolve is covered under the separate, recurring Process Improvement service.",
      },
    ],
  },
  {
    slug: "automation-implementation",
    oneTimePrice: 1650,
    category: "projects",
    name: "Automation Implementation",
    shortDescription: "Build the automations and integrations that stop leads and tasks from falling through the cracks.",
    cardDescription: "Build the automations and integrations that stop leads and tasks from falling through the cracks.",
    eyebrow: "AUTOMATION IMPLEMENTATION",
    h1: "Build the automations that stop leads and tasks from falling through the cracks.",
    metaTitle: "Automation Implementation for Small Businesses | AeroScale",
    metaDescription:
      "One-time automation implementation — CRM setup, workflow automation, and software integrations built and configured for your business.",
    icon: Workflow,
    intro: [
      "This engagement looks at where information, tasks, and customers fall through the cracks between tools, people, and steps — then builds the automations that close those gaps. That might mean connecting two pieces of software, automating a follow-up sequence, or configuring a CRM properly for the first time.",
      "This is a one-time build project. Once automations are live, ongoing monitoring and troubleshooting are covered separately under Automation Maintenance.",
    ],
    problemsSolved: [
      "Leads or customer requests are not followed up on consistently",
      "The same information is entered into multiple systems by hand",
      "Software tools do not talk to each other",
      "Tasks depend on someone remembering to do them",
    ],
    specificServices: [
      "Workflow automation",
      "CRM setup and configuration",
      "Lead follow-up automation",
      "Appointment workflows",
      "Customer communication systems",
      "Software integrations",
      "Task automation",
      "AI-assisted workflows",
      "Internal notifications",
      "Data synchronization",
    ],
    deliverables: [
      "Configured CRM or workflow tool",
      "Documented automation map",
      "Connected software integrations",
      "Automated follow-up sequences",
      "Internal notification system",
    ],
    whoItsFor: [
      "Businesses with growing lead volume and inconsistent follow-up",
      "Teams using multiple tools that do not share information",
      "Owners spending hours a week on repetitive administrative work",
      "Companies that have outgrown spreadsheets and manual tracking",
    ],
    exampleSituations: [
      "New leads sometimes go three or four days without a response because follow-up depends on one person remembering.",
      "A business uses separate tools for scheduling, invoicing, and customer communication, and staff re-enter the same information into each one.",
      "A company wants to explore whether an AI-assisted workflow could handle routine customer questions without losing a personal touch.",
    ],
    process: [
      {
        title: "Understand",
        description: "We map your current tools, workflows, and the points where handoffs break down or manual work piles up.",
      },
      {
        title: "Prioritize",
        description: "We identify which workflow gaps cost the most time or create the most risk first.",
      },
      {
        title: "Build or Improve",
        description: "We configure the automations and integrations, choosing the simplest reliable solution.",
      },
      {
        title: "Support",
        description: "We test the system with real use and document how it works before handing off or transitioning to maintenance.",
      },
    ],
    relatedServiceSlugs: ["automation-maintenance"],
    faqs: [
      {
        question: "Do we need to buy new software?",
        answer:
          "Not necessarily. We often start by getting more value out of tools you already own. When a new tool is genuinely the right fit, we will recommend it and explain why.",
      },
      {
        question: "Who pays for software, messaging, and AI tool costs?",
        answer:
          "Clients generally pay their own software, messaging, and AI or platform usage expenses directly to the providers. AeroScale's fee covers the strategy and setup work.",
      },
      {
        question: "Who monitors the automations after launch?",
        answer:
          "This engagement covers the build. Ongoing monitoring, troubleshooting, and adjustments as tools change are covered separately under Automation Maintenance.",
      },
    ],
    notes: [
      "AI is used only when it is a practical and reliable solution for the specific workflow.",
      "Many problems are better solved through clear rules, integrations, and well-designed processes than through added software.",
    ],
  },
  {
    slug: "data-dashboards",
    oneTimePrice: 1650,
    category: "projects",
    name: "Data Dashboards",
    shortDescription: "Build the dashboard that finally answers how the business is actually performing.",
    cardDescription: "Build the dashboard that finally answers how the business is actually performing.",
    eyebrow: "DATA DASHBOARDS",
    h1: "A dashboard that finally answers \"how is the business doing?\"",
    metaTitle: "Small Business Data Dashboards | AeroScale",
    metaDescription:
      "One-time dashboard and reporting-template builds that turn scattered spreadsheets and systems into a clear view of business performance.",
    icon: LayoutDashboard,
    intro: [
      "Most small businesses are not short on data — they are short on a clean, organized way to see it. This engagement selects the KPIs that actually matter, cleans up the underlying data, and builds a dashboard or reporting template you can rely on.",
      "This is a one-time build project. Ongoing interpretation and recurring reporting from that dashboard are covered separately under Reporting & Analytics.",
    ],
    problemsSolved: [
      "The business has data but no practical way to use it",
      "Reports require too much manual effort to produce",
      "Numbers conflict across different systems",
      "The owner cannot quickly see how the business is performing",
    ],
    specificServices: [
      "KPI selection",
      "Dashboard design",
      "Data cleanup",
      "Spreadsheet analysis",
      "Sales reporting templates",
      "Marketing reporting templates",
      "Operational reporting templates",
      "Automated report setup",
    ],
    deliverables: [
      "KPI framework",
      "Dashboard or reporting template",
      "Data-cleanup summary",
      "Automated recurring reports",
    ],
    whoItsFor: [
      "Owners who make decisions without a clear view of current performance",
      "Businesses whose reporting takes hours of manual work each week",
      "Companies whose numbers do not match across systems",
      "Teams that want a simple dashboard instead of scattered spreadsheets",
    ],
    exampleSituations: [
      "An owner wants a single view of sales, leads, and marketing performance instead of checking five different systems.",
      "Two reports show different revenue numbers for the same month and nobody is sure which one is correct.",
      "A business wants to know which marketing channels are actually producing paying customers.",
    ],
    process: [
      {
        title: "Understand",
        description: "We review your current data sources, systems, and the decisions your reporting needs to support.",
      },
      {
        title: "Prioritize",
        description: "We select the small number of KPIs that matter most, rather than reporting on everything available.",
      },
      {
        title: "Build or Improve",
        description: "We clean up the data and build the dashboard or report, automating it wherever practical.",
      },
      {
        title: "Support",
        description: "We walk through how to read the dashboard and outline next steps for ongoing use.",
      },
    ],
    relatedServiceSlugs: ["market-research"],
    faqs: [
      {
        question: "What if our data is messy or incomplete?",
        answer:
          "That is common. The quality, consistency, and completeness of your available data directly affects what a dashboard can reliably show — we will tell you honestly where the data is too thin to support a firm conclusion.",
      },
      {
        question: "Do you build dashboards in a specific tool?",
        answer:
          "We match the reporting tool to what your business already uses and can maintain, whether that is a spreadsheet-based dashboard or a reporting feature inside an existing platform.",
      },
      {
        question: "Who maintains the dashboard after it's built?",
        answer:
          "This engagement delivers the initial build. Ongoing analysis, interpretation, and recurring reporting are covered separately under Reporting & Analytics.",
      },
    ],
  },
  {
    slug: "process-redesign",
    oneTimePrice: 1650,
    category: "projects",
    name: "Process Redesign",
    shortDescription: "A focused project to fix a specific process that keeps causing errors, delays, or dropped handoffs.",
    cardDescription: "A focused project to fix a specific process that keeps causing errors, delays, or dropped handoffs.",
    eyebrow: "PROCESS REDESIGN",
    h1: "Redesign the process that keeps causing errors, delays, or dropped handoffs.",
    metaTitle: "Business Process Redesign Consultant | AeroScale",
    metaDescription:
      "A one-time process redesign engagement for a specific broken workflow — mapping the current state and rebuilding it so it actually works.",
    icon: RefreshCw,
    intro: [
      "Sometimes the issue isn't that a process was never written down — it's that the process itself no longer works. This engagement focuses on one specific process that is causing real problems: mapping how it actually runs today, then rebuilding it so it holds up.",
      "This is different from SOP Development, which documents a process that already works well. Process Redesign is for the process that is currently broken and needs to change.",
    ],
    problemsSolved: [
      "A specific process consistently causes errors",
      "Handoffs between people or tools regularly get dropped",
      "A workflow has grown complicated and slow over time",
      "Quality varies depending on who handles a step in the process",
    ],
    specificServices: [
      "Process mapping",
      "Workflow redesign",
      "Handoff improvement",
      "Quality-control procedure redesign",
      "Bottleneck elimination",
      "Approval-process streamlining",
    ],
    deliverables: [
      "Current-state and future-state process maps",
      "Redesigned workflow documentation",
      "Updated handoff and approval procedures",
      "Implementation plan",
    ],
    whoItsFor: [
      "Businesses where one specific process keeps breaking down",
      "Companies experiencing recurring quality issues tied to a single workflow",
      "Teams that have grown past the point their original process still works",
    ],
    exampleSituations: [
      "Customer complaints keep tracing back to the same step in an order or service process.",
      "A handoff between two departments regularly gets dropped, causing delays customers notice.",
      "A process that worked fine with five employees has become a bottleneck at twenty.",
    ],
    process: [
      {
        title: "Understand",
        description: "We map the process as it actually runs today, including the informal workarounds people use to make it function.",
      },
      {
        title: "Prioritize",
        description: "We identify exactly where the process breaks down and what fixing it would actually save.",
      },
      {
        title: "Build or Improve",
        description: "We redesign the workflow, handoffs, and approval steps, and document the new version clearly.",
      },
      {
        title: "Support",
        description: "We help roll out the redesigned process and confirm it holds up under real use.",
      },
    ],
    relatedServiceSlugs: ["process-improvement"],
    faqs: [
      {
        question: "How is this different from SOP Development?",
        answer:
          "SOP Development documents a process that already works, so it can be repeated consistently. Process Redesign is for a process that is currently broken and needs to be rebuilt before it's worth documenting.",
      },
      {
        question: "Do you talk to the employees involved in the process?",
        answer:
          "Yes, typically. Understanding where a process actually breaks down usually requires input from the people who run it day to day, not just the owner's view of how it should work.",
      },
      {
        question: "What if more than one process needs fixing?",
        answer:
          "We scope Process Redesign around one process at a time so the fix gets real attention. If ongoing, ranging improvement across multiple processes is what you need, the recurring Process Improvement service may be a better fit.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // SUPPORT (recurring)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "owner-advisory-support",
    tierPricing: { base: 350, mid: 475, high: 625 },
    category: "support",
    name: "Owner Advisory Support",
    shortDescription: "A recurring sounding board for the decisions only the owner can make.",
    cardDescription: "A recurring sounding board for the decisions only the owner can make.",
    eyebrow: "OWNER ADVISORY SUPPORT",
    h1: "A regular sounding board for the decisions only the owner can make.",
    metaTitle: "Owner Advisory Support for Small Business Owners | AeroScale",
    metaDescription:
      "Recurring owner advisory support — a consistent outside perspective, decision support, and accountability for the owner personally.",
    icon: Users,
    intro: [
      "Running a business alone means every hard decision lands on one person, with no one above them to think it through with. Owner Advisory Support is a recurring relationship built around the owner personally — a consistent outside perspective for the decisions that are hard to talk through with staff.",
      "This is lighter-touch and more personal than Monthly Strategy Support, which is focused on strategic direction across the whole business rather than the owner's individual decision-making.",
    ],
    problemsSolved: [
      "The owner has no one to think through decisions with regularly",
      "Important decisions get made in isolation, under pressure",
      "The owner feels stretched across every role with no outside perspective",
      "There's no accountability structure above the owner",
    ],
    specificServices: [
      "Recurring advisory sessions",
      "Decision support",
      "Vendor and partner coordination on the owner's behalf",
      "Accountability check-ins",
      "Sounding-board conversations for high-stakes decisions",
    ],
    deliverables: [
      "Recurring advisory session cadence",
      "Decision-support notes",
      "Ongoing accountability check-ins",
    ],
    whoItsFor: [
      "Owners without a leadership team to think through decisions with",
      "Solo owners who feel isolated in day-to-day decision-making",
      "Owners who want a consistent outside perspective on hard calls",
    ],
    exampleSituations: [
      "An owner is weighing whether to fire an underperforming employee and wants an outside perspective before acting.",
      "A big vendor contract is up for renewal and the owner wants someone to think through it with before signing.",
      "An owner realizes they haven't had an honest conversation about the business's direction with anyone in months.",
    ],
    process: [
      {
        title: "Understand",
        description: "We learn about the owner's role, responsibilities, and the kinds of decisions they're navigating regularly.",
      },
      {
        title: "Prioritize",
        description: "We agree on a session cadence and the decisions or topics that matter most right now.",
      },
      {
        title: "Build or Improve",
        description: "We hold recurring advisory sessions and provide support between them as decisions come up.",
      },
      {
        title: "Support",
        description: "We revisit what's working, adjust the cadence if needed, and stay available as new decisions arise.",
      },
    ],
    relatedServiceSlugs: ["monthly-strategy-support"],
    faqs: [
      {
        question: "How is this different from Monthly Strategy Support?",
        answer:
          "Owner Advisory Support is centered on the owner personally — a sounding board for individual decisions. Monthly Strategy Support looks at strategic direction across the whole business, including cross-functional priorities.",
      },
      {
        question: "How often do sessions happen?",
        answer:
          "Cadence is scoped to what the owner needs — commonly a recurring monthly call plus availability for ad hoc questions between sessions.",
      },
      {
        question: "Do you make the final decisions?",
        answer:
          "No. Our role is to help you think clearly and consider angles you might not have time to weigh alone. The decisions and the business remain entirely yours.",
      },
    ],
  },
  {
    slug: "quarterly-planning",
    tierPricing: { base: 250, mid: 350, high: 450 },
    category: "support",
    name: "Quarterly Planning",
    shortDescription: "A recurring quarterly rhythm that keeps the business focused on what matters most.",
    cardDescription: "A recurring quarterly rhythm that keeps the business focused on what matters most.",
    eyebrow: "QUARTERLY PLANNING",
    h1: "A quarterly rhythm that keeps the business focused on what matters most.",
    metaTitle: "Quarterly Business Planning Support | AeroScale",
    metaDescription:
      "Recurring quarterly planning sessions that keep goals current, review progress, and reset priorities every quarter.",
    icon: CalendarClock,
    intro: [
      "A plan that only gets set once tends to go stale within a few months. Quarterly Planning is a recurring cadence — every quarter, we revisit goals, review what's working, and reset priorities based on where the business actually stands.",
      "This is different from Strategic Planning, which is a one-time deep-dive project. Quarterly Planning is the ongoing rhythm that keeps a plan — whether built with us or already in place — current quarter after quarter.",
    ],
    problemsSolved: [
      "Goals get set once and never revisited",
      "Priorities drift without a regular check-in",
      "Quarters pass without a clear read on progress",
      "Plans go stale within a few months of being written",
    ],
    specificServices: [
      "Quarterly goal reviews",
      "KPI and progress check-ins",
      "Priority resets",
      "Accountability sessions",
      "Quarter-over-quarter planning documentation",
    ],
    deliverables: [
      "Quarterly planning sessions",
      "Updated quarterly priorities document",
      "Progress review summaries",
    ],
    whoItsFor: [
      "Businesses that already have a plan but need a cadence to keep it current",
      "Owners who want built-in accountability each quarter",
      "Growing teams that need a regular strategic check-in without a full re-plan every time",
    ],
    exampleSituations: [
      "A business completed a strategic planning project a year ago and the plan hasn't been looked at since.",
      "An owner wants quarterly checkpoints to make sure the year's priorities are still on track.",
      "A leadership team wants a recurring structure for resetting goals as the market shifts.",
    ],
    process: [
      {
        title: "Understand",
        description: "We review progress since the last quarter and what's changed in the business or market.",
      },
      {
        title: "Prioritize",
        description: "We re-rank priorities for the upcoming quarter based on current performance and constraints.",
      },
      {
        title: "Build or Improve",
        description: "We update the quarterly priorities document and confirm what success looks like for the next 90 days.",
      },
      {
        title: "Support",
        description: "We check in on progress through the quarter and come back to repeat the cycle at the next one.",
      },
    ],
    relatedServiceSlugs: ["owner-advisory-support"],
    faqs: [
      {
        question: "Do we need a Strategic Planning engagement first?",
        answer:
          "It helps but isn't required. If you already have goals or a plan in place, Quarterly Planning can start from where you are and build a cadence around it.",
      },
      {
        question: "How long is each quarterly session?",
        answer:
          "Sessions are scoped to your business, but most quarterly planning sessions run as a focused half-day or a series of shorter working sessions.",
      },
      {
        question: "What happens between quarters?",
        answer:
          "The core cadence is quarterly, though many clients pair this with Owner Advisory Support or Monthly Strategy Support for check-ins in between.",
      },
    ],
  },
  {
    slug: "automation-maintenance",
    tierPricing: { base: 350, mid: 475, high: 625 },
    category: "support",
    name: "Automation Maintenance",
    shortDescription: "Ongoing monitoring and upkeep so the automations you rely on keep working.",
    cardDescription: "Ongoing monitoring and upkeep so the automations you rely on keep working.",
    eyebrow: "AUTOMATION MAINTENANCE",
    h1: "Keep the automations you rely on working as your tools and team change.",
    metaTitle: "Automation Maintenance for Small Businesses | AeroScale",
    metaDescription:
      "Recurring automation maintenance — monitoring, troubleshooting, and updates so the workflows you depend on keep working as tools and needs change.",
    icon: Wrench,
    intro: [
      "Automations that worked perfectly at launch can quietly stop working months later — a software update changes a field, an integration silently disconnects, nobody notices until a lead falls through. Automation Maintenance is the recurring service that keeps watching so you don't have to.",
      "This builds on top of automations already in place, whether they were set up through Automation Implementation or configured some other way.",
    ],
    problemsSolved: [
      "Automations that worked at launch start silently breaking",
      "Software updates disrupt integrations without warning",
      "Nobody is monitoring whether automations are still firing correctly",
      "Workflows need adjusting as the business grows or tools change",
    ],
    specificServices: [
      "Automation monitoring",
      "Periodic automation audits",
      "Troubleshooting and fixes",
      "Workflow adjustments as tools or needs change",
      "Reporting-automation upkeep",
    ],
    deliverables: [
      "Recurring automation audit",
      "Maintenance and troubleshooting log",
      "Updated automation documentation",
    ],
    whoItsFor: [
      "Businesses with automations already in place but no one watching them",
      "Companies that have had automations quietly break before",
      "Owners who don't want to be the one who notices something stopped working",
    ],
    exampleSituations: [
      "A lead-notification automation stopped firing three weeks ago and nobody noticed until a customer complained.",
      "A software provider changed its interface and an integration that used to work now silently fails.",
      "A business keeps adding new tools and wants someone making sure the automations connecting them still make sense.",
    ],
    process: [
      {
        title: "Understand",
        description: "We review the automations currently in place and how critical each one is to daily operations.",
      },
      {
        title: "Prioritize",
        description: "We set a monitoring and audit cadence based on which automations carry the most risk if they fail.",
      },
      {
        title: "Build or Improve",
        description: "We monitor, troubleshoot, and adjust automations as tools update or business needs shift.",
      },
      {
        title: "Support",
        description: "We report on what's been checked, fixed, or adjusted, and flag anything that needs your input.",
      },
    ],
    relatedServiceSlugs: ["automation-implementation"],
    faqs: [
      {
        question: "Do you maintain automations you didn't build?",
        answer:
          "In many cases, yes. We'll review what's currently in place first to understand how it's configured before taking on ongoing maintenance.",
      },
      {
        question: "How often do you check on things?",
        answer:
          "Cadence depends on how critical the automations are — some businesses want monthly audits, others want closer to real-time monitoring on high-stakes workflows like lead follow-up.",
      },
      {
        question: "What if something needs a bigger rebuild, not just maintenance?",
        answer:
          "We'll tell you. If an automation needs a significant rebuild rather than a fix, that's scoped as a separate Automation Implementation project.",
      },
    ],
  },
  {
    slug: "monthly-strategy-support",
    tierPricing: { base: 400, mid: 550, high: 700 },
    category: "support",
    name: "Monthly Strategy Support",
    shortDescription: "Ongoing strategic direction for the whole business, not just the owner.",
    cardDescription: "Ongoing strategic direction for the whole business, not just the owner.",
    eyebrow: "MONTHLY STRATEGY SUPPORT",
    h1: "Ongoing strategic direction for the whole business, not just the owner.",
    metaTitle: "Monthly Strategy Support for Small Businesses | AeroScale",
    metaDescription:
      "Recurring monthly strategy sessions covering business-wide direction, cross-functional priorities, and project coordination.",
    icon: TrendingUp,
    intro: [
      "Strategic direction tends to get lost in daily operations. Monthly Strategy Support is a recurring engagement that keeps the business's broader strategy connected to what's actually happening across marketing, operations, and any other priority area — not just a conversation with the owner, but coordination across the business.",
      "This is broader than Owner Advisory Support, which centers on the owner's personal decision-making. Monthly Strategy Support looks at strategic direction for the business as a whole.",
    ],
    problemsSolved: [
      "Strategic direction gets lost in daily operations",
      "The business needs ongoing strategic input but not a full-time executive hire",
      "Priorities shift monthly without anyone tracking the through-line",
      "Cross-functional work isn't coordinated toward the same goals",
    ],
    specificServices: [
      "Monthly strategy sessions",
      "Cross-functional priority alignment",
      "Project coordination",
      "Strategic check-ins tied to broader goals",
      "Research support for emerging questions",
    ],
    deliverables: [
      "Recurring monthly strategy sessions",
      "Updated priority tracking",
      "Cross-functional coordination notes",
    ],
    whoItsFor: [
      "Businesses that need continuous strategic input across the team",
      "Companies juggling multiple initiatives that need to stay aligned",
      "Owners who want monthly strategic accountability beyond personal advisory",
    ],
    exampleSituations: [
      "A business has priorities in marketing, operations, and hiring all moving at once, with no one connecting the dots.",
      "An owner wants a monthly strategic check-in that includes input from department leads, not just themselves.",
      "A company completed a strategic plan but needs ongoing help keeping cross-functional work aligned to it.",
    ],
    process: [
      {
        title: "Understand",
        description: "We assess the business's current priorities, team structure, and where strategic alignment is breaking down.",
      },
      {
        title: "Prioritize",
        description: "We agree on the recurring cadence and which cross-functional priorities need the most attention.",
      },
      {
        title: "Build or Improve",
        description: "We run monthly strategy sessions and coordinate priorities across whichever areas of the business are involved.",
      },
      {
        title: "Support",
        description: "We track progress, report back monthly, and adjust priorities as the business's needs change.",
      },
    ],
    relatedServiceSlugs: ["owner-advisory-support"],
    faqs: [
      {
        question: "How is this different from Owner Advisory Support?",
        answer:
          "Monthly Strategy Support looks at strategic direction across the business — coordinating priorities across marketing, operations, and other areas. Owner Advisory Support is a personal, lighter-touch sounding board for the owner specifically.",
      },
      {
        question: "Does this include executing the strategy?",
        answer:
          "This engagement covers strategic direction and coordination. Hands-on execution in a specific area, like marketing or automation, is scoped through that area's own recurring service.",
      },
      {
        question: "Can this replace a full-time strategy role?",
        answer:
          "For many small businesses, yes — this gives you consistent strategic input without the cost of a full-time executive hire. For larger or more complex needs, it can complement an internal leader instead.",
      },
    ],
  },
  {
    slug: "reporting-analytics",
    tierPricing: { base: 400, mid: 550, high: 700 },
    category: "support",
    name: "Reporting & Analytics",
    shortDescription: "Ongoing reporting that tells you how the business is actually performing.",
    cardDescription: "Ongoing reporting that tells you how the business is actually performing.",
    eyebrow: "REPORTING & ANALYTICS",
    h1: "Ongoing reporting that tells you how the business is actually performing.",
    metaTitle: "Small Business Reporting and Analytics Support | AeroScale",
    metaDescription:
      "Recurring reporting and analytics support — trend analysis, performance reviews, and management summaries built on your existing data.",
    icon: BarChart3,
    intro: [
      "A dashboard is only useful if someone is actually reading and interpreting it. Reporting & Analytics is the recurring service that keeps your numbers current, flags what's changing, and turns raw reports into a plain-language read on performance.",
      "This builds on top of reporting already in place, whether from a Data Dashboards project or your own existing tools.",
    ],
    problemsSolved: [
      "Reports exist but nobody has time to interpret them",
      "Marketing attribution stays unclear month to month",
      "Trends get noticed too late to act on",
      "Numbers still occasionally conflict across systems",
    ],
    specificServices: [
      "Recurring sales reporting",
      "Recurring marketing reporting",
      "Lead-conversion analysis",
      "Customer analysis",
      "Revenue analysis",
      "Trend identification",
      "Management summaries",
    ],
    deliverables: [
      "Recurring management reports",
      "Trend and performance analysis",
      "Updated KPI tracking",
    ],
    whoItsFor: [
      "Businesses that already have some reporting but need ongoing interpretation",
      "Owners who want a recurring read on performance without hiring an analyst",
      "Companies wanting recurring insight into marketing attribution",
    ],
    exampleSituations: [
      "A business has a dashboard but nobody reviews it regularly enough to catch changes early.",
      "An owner wants a monthly summary of what's working and what's not, in plain language.",
      "A company wants ongoing tracking of which marketing channels are producing paying customers.",
    ],
    process: [
      {
        title: "Understand",
        description: "We review your existing reporting setup and the decisions it needs to keep supporting.",
      },
      {
        title: "Prioritize",
        description: "We agree on a reporting cadence and which trends matter most to track closely.",
      },
      {
        title: "Build or Improve",
        description: "We produce recurring reports and analysis, flagging meaningful changes as they appear.",
      },
      {
        title: "Support",
        description: "We walk through the numbers with you regularly and adjust what's tracked as priorities shift.",
      },
    ],
    relatedServiceSlugs: ["data-dashboards"],
    faqs: [
      {
        question: "Do we need a Data Dashboards project first?",
        answer:
          "It helps but isn't required. If you already have usable reporting in place, we can start Reporting & Analytics from your existing setup.",
      },
      {
        question: "How often will we get reports?",
        answer:
          "Cadence is scoped to your business — commonly monthly, with some clients wanting a lighter weekly pulse check as well.",
      },
      {
        question: "What if our data is messy or incomplete?",
        answer:
          "The quality of your available data directly affects what analytics can reliably show. We'll flag where the data is too thin to support a firm conclusion rather than overstate what the numbers say.",
      },
    ],
  },
  {
    slug: "process-improvement",
    tierPricing: { base: 450, mid: 600, high: 800 },
    category: "support",
    name: "Process Improvement",
    shortDescription: "Ongoing refinement so processes and SOPs keep working as the business grows.",
    cardDescription: "Ongoing refinement so processes and SOPs keep working as the business grows.",
    eyebrow: "PROCESS IMPROVEMENT",
    h1: "Keep refining how work gets done as the business grows.",
    metaTitle: "Ongoing Process Improvement for Small Businesses | AeroScale",
    metaDescription:
      "Recurring process improvement — auditing and updating SOPs, handoffs, and quality control as your team and workflows evolve.",
    icon: Settings,
    intro: [
      "Processes that work well at one team size quietly stop working as a business grows. Process Improvement is the recurring service that keeps auditing, updating, and refining how work gets done — so quality doesn't slowly drift and SOPs don't go stale.",
      "This is different from SOP Development, the initial one-time documentation project, and Process Redesign, a one-time fix for a currently broken process. Process Improvement is the ongoing upkeep after either of those.",
    ],
    problemsSolved: [
      "Processes that worked at one size stop working as the team grows",
      "SOPs go stale and stop matching how work actually happens",
      "Quality slowly drifts without regular review",
      "New bottlenecks appear as the business changes",
    ],
    specificServices: [
      "Recurring process audits",
      "SOP updates",
      "Handoff refinement",
      "Quality-control monitoring",
      "Training-material updates",
    ],
    deliverables: [
      "Updated SOPs and process maps",
      "Recurring process-audit summaries",
      "Ongoing improvement recommendations",
    ],
    whoItsFor: [
      "Businesses that already have documented processes but need them kept current",
      "Growing teams whose workflows keep needing adjustment",
      "Companies that want continuous improvement rather than a one-time fix",
    ],
    exampleSituations: [
      "SOPs written a year ago no longer match how the team actually works today.",
      "A business has grown from five to twenty employees and processes that used to work now feel strained.",
      "An owner wants someone regularly checking whether quality is holding steady as new staff join.",
    ],
    process: [
      {
        title: "Understand",
        description: "We review current SOPs and processes against how work is actually happening today.",
      },
      {
        title: "Prioritize",
        description: "We identify which processes are drifting furthest from documentation or causing the most friction.",
      },
      {
        title: "Build or Improve",
        description: "We update SOPs, refine handoffs, and adjust quality-control steps on a recurring basis.",
      },
      {
        title: "Support",
        description: "We report on what's changed and keep the cadence going as the business continues to evolve.",
      },
    ],
    relatedServiceSlugs: ["sop-development"],
    faqs: [
      {
        question: "Do we need SOP Development first?",
        answer:
          "It helps to have SOPs in place already, but if you don't, we can document current processes as part of getting Process Improvement started.",
      },
      {
        question: "How is this different from Process Redesign?",
        answer:
          "Process Redesign is a one-time project to fix a specific process that's currently broken. Process Improvement is the ongoing, ranging upkeep that keeps already-working processes from drifting out of date.",
      },
      {
        question: "How often do you review our processes?",
        answer:
          "Cadence is scoped to your business, typically a recurring quarterly or monthly audit depending on how quickly your team and workflows are changing.",
      },
    ],
  },
  {
    slug: "marketing-execution",
    tierPricing: { base: 600, mid: 800, high: 1050 },
    category: "support",
    name: "Marketing Execution",
    shortDescription: "Ongoing marketing execution that turns a strategy into consistent action.",
    cardDescription: "Ongoing marketing execution that turns a strategy into consistent action.",
    eyebrow: "MARKETING EXECUTION",
    h1: "Ongoing marketing execution that turns a strategy into consistent action.",
    metaTitle: "Marketing Execution Services for Small Businesses | AeroScale",
    metaDescription:
      "Recurring marketing execution — email, SMS, content, retention campaigns, and performance reviews run on an ongoing basis.",
    icon: Send,
    intro: [
      "A marketing plan is only as good as the follow-through behind it. Marketing Execution is the recurring service that runs the campaigns, sends the emails, and keeps content and retention efforts moving on a calendar instead of happening whenever there's time.",
      "This builds on a strategy — whether from a Marketing Strategy engagement or your own existing plan — and focuses on the doing, not the planning.",
    ],
    problemsSolved: [
      "A marketing plan exists but nobody has time to execute it consistently",
      "Campaigns happen sporadically instead of on a calendar",
      "Past customers aren't hearing from the business regularly",
      "Content and campaigns stall without dedicated execution",
    ],
    specificServices: [
      "Email marketing",
      "SMS marketing",
      "Lead-nurture execution",
      "Customer-retention campaigns",
      "Referral-program management",
      "Content execution",
      "Conversion-improvement testing",
      "Marketing performance reviews",
    ],
    deliverables: [
      "Ongoing campaign execution",
      "Email and SMS nurture sequences",
      "Retention and referral program management",
      "Recurring marketing performance reviews",
    ],
    whoItsFor: [
      "Businesses with a strategy but no one to execute it consistently",
      "Owners who want marketing running on a calendar instead of ad hoc",
      "Companies with an audience but no consistent nurture cadence",
    ],
    exampleSituations: [
      "A business has a marketing strategy document that's been sitting untouched for months.",
      "An owner wants a consistent email and SMS cadence but doesn't have time to build and send it.",
      "A company wants past customers hearing from them regularly instead of only during slow months.",
    ],
    process: [
      {
        title: "Understand",
        description: "We review your marketing strategy, audience, and current execution gaps.",
      },
      {
        title: "Prioritize",
        description: "We identify which channels and campaigns will move the needle fastest given your resources.",
      },
      {
        title: "Build or Improve",
        description: "We execute campaigns on a recurring calendar — email, SMS, content, and retention work.",
      },
      {
        title: "Support",
        description: "We review performance regularly and adjust the execution plan as results come in.",
      },
    ],
    relatedServiceSlugs: ["advertising-management"],
    faqs: [
      {
        question: "Will you guarantee more leads or sales?",
        answer:
          "No. Marketing performance depends on many factors outside execution alone, including your market, offer, and pricing. We focus on disciplined, consistent execution rather than guarantees we cannot back up.",
      },
      {
        question: "Do we need a Marketing Strategy engagement first?",
        answer:
          "It helps, but if you already have a strategy or clear direction, we can start executing from that.",
      },
      {
        question: "Do you replace our existing marketing vendor or agency?",
        answer:
          "Not necessarily. We regularly coordinate with a client's existing agencies, freelancers, or internal marketing staff.",
      },
    ],
  },
  {
    slug: "advertising-management",
    tierPricing: { base: 600, mid: 800, high: 1050 },
    category: "support",
    name: "Advertising Management",
    shortDescription: "Ongoing management of paid campaigns already up and running.",
    cardDescription: "Ongoing management of paid campaigns already up and running.",
    eyebrow: "ADVERTISING MANAGEMENT",
    h1: "Ongoing management of paid campaigns already up and running.",
    metaTitle: "Advertising Management for Small Businesses | AeroScale",
    metaDescription:
      "Recurring advertising management — monitoring, optimizing, and reporting on live paid campaigns so ad spend keeps working.",
    icon: Target,
    intro: [
      "A launched campaign still needs someone watching it — adjusting targeting, refreshing creative, catching declining performance before it wastes budget. Advertising Management is the recurring service that keeps live campaigns actively managed instead of running unattended.",
      "This picks up where Advertising Setup leaves off, or takes over management of campaigns that are already running through another provider.",
    ],
    problemsSolved: [
      "Campaigns are running but nobody is optimizing them",
      "Ad spend keeps going out without clear reporting",
      "Retargeting and audience refinement are missing",
      "Performance is declining without anyone noticing",
    ],
    specificServices: [
      "Meta advertising management",
      "Google Ads management",
      "Lead tracking",
      "Campaign reporting",
      "Retargeting",
      "Performance optimization",
      "Ongoing budget management",
    ],
    deliverables: [
      "Monthly campaign reporting",
      "Retargeting audience management",
      "Performance-optimization recommendations",
    ],
    whoItsFor: [
      "Businesses with live campaigns that need ongoing management",
      "Owners who don't have time to log in and adjust ads weekly",
      "Companies that want consistent reporting on ad performance",
    ],
    exampleSituations: [
      "A campaign launched months ago and hasn't been touched or optimized since.",
      "An owner is spending on ads monthly but has no regular reporting on what's working.",
      "A business wants retargeting set up for website visitors who haven't converted yet.",
    ],
    process: [
      {
        title: "Understand",
        description: "We review current campaign performance, budget, and tracking setup.",
      },
      {
        title: "Prioritize",
        description: "We identify the highest-impact adjustments to targeting, creative, or budget allocation.",
      },
      {
        title: "Build or Improve",
        description: "We manage the campaigns on an ongoing basis, adjusting as performance data comes in.",
      },
      {
        title: "Support",
        description: "We report on results regularly and keep refining the campaigns as the market and business evolve.",
      },
    ],
    relatedServiceSlugs: ["marketing-execution"],
    faqs: [
      {
        question: "Is ad spend included in your management fee?",
        answer:
          "No. Ad spend paid directly to the advertising platform is separate from AeroScale's management fee.",
      },
      {
        question: "Do we need Advertising Setup first?",
        answer:
          "Not necessarily. We can take over management of campaigns that are already live, whether we set them up or not.",
      },
      {
        question: "Can you guarantee a specific return on ad spend?",
        answer:
          "No. Advertising results depend on your market, offer, budget, and competition. We do not guarantee leads, cost per result, or return on ad spend.",
      },
    ],
  },
  {
    slug: "priority-project-execution",
    tierPricing: { base: 600, mid: 800, high: 1050 },
    category: "support",
    name: "Priority-Project Execution",
    shortDescription: "Dedicated monthly capacity for whatever matters most right now.",
    cardDescription: "Dedicated monthly capacity for whatever matters most right now.",
    eyebrow: "PRIORITY-PROJECT EXECUTION",
    h1: "Dedicated monthly capacity for whatever matters most right now.",
    metaTitle: "Priority-Project Execution for Small Businesses | AeroScale",
    metaDescription:
      "Recurring, flexible execution capacity applied to your single most valuable initiative each month — not tied to one specialty.",
    icon: Flag,
    intro: [
      "Some of the most important work in a business doesn't fit neatly into marketing, operations, or any one specialty — it's just the thing that matters most this month. Priority-Project Execution is dedicated, flexible capacity applied wherever the priority actually is, month after month.",
      "This isn't ongoing support in one specialty area — it's a recurring commitment of execution time that moves to whatever the business needs most right now.",
    ],
    problemsSolved: [
      "Important projects keep getting bumped by daily operations",
      "Priorities shift month to month and none stay owned long enough to finish",
      "The business needs execution help but the need doesn't fit one specialty",
      "Initiatives stall without dedicated capacity behind them",
    ],
    specificServices: [
      "Monthly priority-setting",
      "Dedicated execution hours",
      "Project coordination",
      "Cross-functional problem-solving",
      "Progress reporting on the active priority",
    ],
    deliverables: [
      "Monthly priority-project plan",
      "Completed or advanced priority initiative",
      "Progress reporting",
    ],
    whoItsFor: [
      "Businesses with a rotating list of important-but-stalled projects",
      "Owners who need flexible execution capacity rather than a fixed specialty",
      "Companies whose top priority changes from month to month",
    ],
    exampleSituations: [
      "A business has a list of five \"someday\" projects that never actually get worked on.",
      "An owner needs execution help but isn't sure yet whether next month's priority will be marketing, operations, or something else entirely.",
      "A one-off initiative doesn't fit any specific recurring service but still needs dedicated attention this month.",
    ],
    process: [
      {
        title: "Understand",
        description: "We review what's on the business's list of important, unfinished work.",
      },
      {
        title: "Prioritize",
        description: "We agree each month on the single initiative that deserves dedicated capacity.",
      },
      {
        title: "Build or Improve",
        description: "We apply the month's execution hours directly to advancing or completing that priority.",
      },
      {
        title: "Support",
        description: "We report on progress and reset the priority for the following month.",
      },
    ],
    relatedServiceSlugs: ["process-improvement"],
    faqs: [
      {
        question: "What kinds of projects qualify?",
        answer:
          "Anything that's an important priority but doesn't have dedicated capacity behind it — this flexes by month rather than being scoped to one specialty area.",
      },
      {
        question: "How is this different from the specialty recurring services?",
        answer:
          "Services like Marketing Execution or Automation Maintenance apply ongoing capacity to one specific area every month. Priority-Project Execution moves to whatever the single most valuable initiative is, which can change from month to month.",
      },
      {
        question: "What if the priority needs more time than the month allows?",
        answer:
          "We'll tell you honestly if a priority needs more hours than the engagement provides, and can discuss adjusting scope or carrying the initiative into the next month.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceDefinition["category"]): ServiceDefinition[] {
  return services.filter((service) => service.category === category);
}

export function getRelatedServices(service: ServiceDefinition): ServiceDefinition[] {
  return service.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceDefinition => Boolean(s));
}
