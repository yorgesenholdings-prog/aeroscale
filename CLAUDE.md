# AeroScale — Project Instructions

This file gives context for any Claude instance (chat or Claude Code) working on the AeroScale project. Read this before making changes to the site, marketing materials, or pricing.

## What AeroScale Is

AeroScale is a small-business growth agency built around a **single, productized system** rather than an à la carte service catalog or a multi-tier ladder. It positions itself as an alternative to hiring full in-house departments — owners get a done-for-you growth system instead of stitching together separate hires or vendors. Live site: https://getaeroscale.com/

**Strategic direction (as of this pivot):** AeroScale stays a general, no-niche brand. The single AeroScale Full System offer below is the core offer for every client regardless of industry. The long-term plan is to eventually spin up niche-specific **sub-agencies** that reuse this same pillar structure and delivery system with different front-end branding/copy — the pillars and delivery mechanics stay constant; only positioning changes per sub-agency. Do not build niche-specific assumptions into the core system unless explicitly told a sub-agency is being built.

## Delivery Constraints (apply to everything below)

- **GoHighLevel (GHL) only.** All delivery — automation, SMS/email, CRM, funnels, AI receptionist, remarketing — runs through AeroScale's own GHL instance, with each client run through it. Do not introduce other tools/platforms unless a specific client explicitly requests one.
- **No setup fee.** Once a system is built once, it's copy-paste to new clients — the pricing below assumes near-zero marginal setup cost per client.
- **Usage costs (SMS sends, AI voice minutes, phone numbers) are billed separately to clients**, not absorbed into the flat monthly price. This keeps margin predictable regardless of client volume.

## The Full System Offer (current core offer)

**One offer, one price, no tiers, no à la carte products.** The price is config-driven —
`src/config/offer.ts`'s `offerPricing` object is the single source of truth, read by the promo
banner, `/pricing`, the homepage teaser, and both `/lp/*` pages. Never hardcode the price
anywhere else.

- **Standard price:** $2,500/month.
- **Current limited-time price:** $1,199/month (struck-through against the standard price
  site-wide while `offerPricing.promoActive` is `true`). No countdown/expiration logic — the
  promo stays live until someone flips that one boolean off.
- No setup fee (see Delivery Constraints above — unchanged). Usage costs billed separately
  (unchanged).

This system is internally adapted from a validated agency framework (internal reference name:
"Aristotle System") — **never use that name anywhere client-facing.** Client-facing, it's always
"the AeroScale Full System" or "the Full System."

### The 7 Pillars

All copy below is a draft — edit freely in `src/config/offer.ts`, the single source of truth for
pillar name/headline/body/build-status/included/not-included content.

**Build status is tracked internally only — do not show "Live"/"Rolling Out" (or any other
build-status language) anywhere on the site.** All 7 pillars are presented publicly as available,
with no distinction between built and not-yet-built. This is a deliberate choice: the plan is to
have the remaining pillars actually built out before/as real client delivery happens, and the
site shouldn't undercut sales conversations by publicly flagging what isn't finished yet. The
`buildStatus`/`rollingOutNote` fields in `src/config/offer.ts` still exist as internal tracking
for whoever's building this out — just never surfaced in any UI.

1. **Website Fix** — *"A Website That Actually Converts."* Faster mobile load times and a
   low-friction opt-in in place of a bare contact form. **Status: Rolling Out — not yet built.**
2. **Database Reactivation** — *"Wake Up Your Old Leads."* Automatically re-engages dormant
   leads and past customers already in a client's list, with compliant win-back campaigns.
   **Status: Live** (carried over from the old Tier 2 component of the same name). **See the
   Compliance Policy below before this is built or sold for any client, in any niche.**
3. **Reputation Manager** — *"Reviews On Autopilot."* Every completed job automatically triggers
   a review request, with auto-response and a referral loop turning happy customers into new
   business. **Status: Rolling Out** — review follow-up and auto-response are live today;
   referral link tracking and incentive mechanics are still being built.
   **Never implement "review gating"** (routing low-star ratings away from public platforms,
   only pushing high stars to Google) — this violates Google's review policy (enforced since
   April 2026) and the FTC's Consumer Review Rule (16 CFR Part 465). Every customer gets the
   same public review request regardless of rating, and every review gets the same standard
   automated response regardless of rating — no differential treatment on either side, for every
   client, in every niche. Responses are auto-posted, not held for client approval; reviews
   needing a real resolution (e.g. a complaint) should be followed up on by the client directly,
   not through the automated reply.
4. **Website Lead Nurturing** — *"Never Lose A Lead To Silence."* Instant automated response to
   new leads with ongoing follow-up until they book. **Status: Rolling Out** — instant follow-up
   and booking handoff are live today; automatically rescuing appointments before a no-show is
   still being built.
5. **AI Receptionist** — *"Someone's Always Answering."* Missed calls get an instant text-back;
   an AI voice line handles FAQs and books consults, even after hours. **Status: Live** (carried
   over from the old Tier 1 missed-call-text-back plus the old Tier 3 AI voice receptionist).
   Note: some states require disclosure that a caller is interacting with an AI, not a human —
   confirm applicable state rules before deploying to a client in a new state.
6. **AI Sales Coach** — *"Sharper Sales Conversations."* The team practices real call scenarios
   and gets objective grading feedback. **Status: Rolling Out — not yet built.**
7. **Paid Ads with AI Nurturing** — *"Ads That Get Managed, Not Just Launched."* Ongoing
   optimization of a client's existing ad campaigns — targeting, messaging, A/B testing — tied
   into the nurturing system above. **Status: Live** (carried over from the old standalone Ad
   Optimization offer). Does NOT include ad creative design/production or building a campaign
   from scratch — keep this exclusion explicit in any copy describing this pillar.

### Onboarding Requirements

One list, not scaled by tier (there's only one offer): client's Google Business listing access,
existing ad account access, existing contact list, written confirmation of that list's consent
status (see compliance policy below), business phone number access, FAQ content for the AI
receptionist script.

## Compliance Policy — Database Reactivation (Pillar 2)

**This is the highest-risk piece of the system and applies to every client in every niche. Read before building or selling this.**

The core problem: reactivation messages ("here's an offer, come back") are **marketing/promotional SMS**, which requires **Prior Express Written Consent (PEWC)** under the TCPA — not just "they used to be a customer." Most inactive/canceled customers gave their phone number for a transactional reason (booking, account setup), which does not carry implied consent for a win-back marketing text years later. Violations carry **$500–$1,500 in statutory damages per text message**, and consumers can sue directly — this is the exact fact pattern that generates TCPA class actions at scale.

Since every client runs through AeroScale's own GHL instance, AeroScale's own A2P 10DLC registration and carrier trust score is also exposed — one client's non-compliant list can hurt deliverability for every other client on the same shared sending infrastructure.

**Required policy for every client, every tier, every niche:**
1. **Default to email-first for cold/inactive list reactivation.** Email is governed by CAN-SPAM (opt-out based, no prior consent required) — this achieves the "fast, cheap win" without TCPA exposure.
2. **Only move a contact to SMS after a fresh, affirmative action** on their part (reply to the email, click a link, text in a keyword). That action creates new, documented, first-party consent for the SMS conversation that follows.
3. **Before running SMS on a client's existing list**, require written confirmation from the client on whether their original intake captured marketing SMS consent specifically. If they can't produce that, do not run outbound marketing texts on that list — email-first only.
4. **Build a compliant SMS consent checkbox into every client's own new-customer intake going forward** (via GHL forms) so future lists aren't stuck in the same gap.
5. This policy must be reflected in the standard service agreement/SOW template so liability expectations are explicit with every client from day one.
6. This is not legal advice — a one-time paid review with a TCPA-experienced attorney on the exact consent-capture flow is strongly recommended before scaling this across clients, given it's a flagship tactic rather than an edge case.

## Retired: Old Catalog, Bundles, and Instant Quote Tool

**Decision confirmed — the old à la carte model is fully retired, not kept alongside the tiers.** As of this pivot, the following have been removed from the site entirely:
- The 18-service catalog (`/services/projects/*`, `/services/support/*`) and its category overview pages
- The old one-time-project and recurring-tier pricing formulas tied to that catalog
- The 3 "Most Popular" bundles (Growth Marketing, Strategic Operator, Systems & Insights) — their component services no longer map to the new tier contents
- The `/instant-quote` multi-service discount calculator

All old URLs (`/services/projects/*`, `/services/support/*`, `/bundles`, `/instant-quote`) 308-redirect to `/pricing` (see `next.config.ts`).

**The 3-tier system (Foundation / Growth System / Full System) plus the two standalone offers (Review Follow-Up & Review Response Automation, Ad Optimization Service) were the entire service offering — see the next section for what replaced them.** Do not reference, link to, or resurrect the old catalog/bundles/instant-quote anywhere on the site — nav, footer, sitemap, or internal links.

## Retired: The 3-Tier System and Standalone Offers

**Decision confirmed — the 3-tier system and the two standalone offers are retired, replaced by
the single Full System offer above.** As of this pivot, the following are no longer sold or
referenced as products:
- The Foundation ($499/mo), Growth System ($999/mo), and Full System ($2,199/mo) tiers
- The Review Follow-Up & Review Response Automation ($200/mo) and Ad Optimization Service
  ($400/mo) standalone offers as separately-purchasable products (their capabilities live on as
  pillars 3 and 7 of the Full System, and their `/lp/*` ad landing pages stay live — see below)

Old `/onboarding/foundation`, `/onboarding/growth-system`, `/onboarding/full-system`,
`/onboarding/automation`, and `/onboarding/marketing-management` URLs 308-redirect to the single
`/onboarding` route (see `next.config.ts`). Do not reference, link to, or resurrect the 3-tier or
standalone-offer model anywhere on the site — nav, footer, sitemap, or internal links.

## Ad Landing Pages (Ad Traffic Only — Not Linked From Main Site)

Both URLs stay live (real Meta ad traffic is pointed at them) but now sell the single Full System
offer instead of their original standalone products:
- `/lp/automation` — hooks on **pillar 3, Reputation Manager**. No site nav/footer, noindex,
  excluded from sitemap.
- `/lp/marketing-management` — hooks on **pillar 7, Paid Ads with AI Nurturing**. Same
  no-nav/noindex/excluded-from-sitemap rules.

Each page leads with a "Spotlight" on its specific hook pillar (so the page still matches
whatever the ad promised), then presents the same price, pillar list, and included/not-included
breakdown as `/pricing` — the two pages and `/pricing` share the same `PillarDetailAccordion`
component specifically so they can't drift apart on what's actually included. Updating the ad
creative/copy that drives traffic to these URLs (it currently still promises the old $200/$400
standalone pricing) is a separate, not-yet-done task — flag it, don't assume it's handled.

Each landing page includes: benefit headline matching its hook pillar, problem framing, plain
pricing, a spotlight on the hook pillar, the shared "What's Included / Not Included" breakdown, a
short FAQ addressing objections, a trust/credibility section, and one repeated CTA (top/middle/
bottom) straight to checkout.

## Other Site Features
- **Blog** at `/blog`: standard listing layout (title, excerpt, date, read more), structure in place even before posts exist.
- **Homepage:** Hero → "The AeroScale System" (single-offer teaser, links to `/pricing`) → "Why Owners Call Us" → rest of page.
- **`/services`:** repurposed as a general, non-pricing "what we do" overview of all 7 pillars — no products, no pricing shown, links to `/pricing` for detail/price/CTA.
- **`/pricing`:** the Full System's home page, fully built — header, a single offer card (struck-through price, condensed pillar list, checkout CTA), a `PillarDetailAccordion` (included/not-included breakdown per pillar), a single onboarding-requirements list, a FAQ, and a closing CTA. Data lives in `config/offer.ts` (pillars, pricing, the offer itself) and `config/landing-pages.ts` (the two `/lp/*` pages' hook copy only).
- **`/onboarding`:** single static route (no per-plan slug — there's only one plan). Data lives in `config/offer.ts`.

## Visual Design System

**Do not change these values without the person's explicit sign-off — they were chosen after multiple rounds of review.**

### Color Palette (charcoal + cobalt)
| Role | Hex |
|---|---|
| Background (light sections) | `#F6F7F9` |
| Primary dark (ink/text/dark sections) | `#14141A` |
| Secondary dark (card variant in dark sections) | `#24242E` |
| Accent (CTAs, links, highlights) | `#3E63F0` |
| Accent light (tag backgrounds, subtle highlights) | `#A6B8FB` |
| Accent pale (very light tag/badge backgrounds) | `#E7ECFE` |
| Body/secondary text | `#5B5F6B` |
| Muted/border text | `#A8ACB8` |
| White | `#FFFFFF` |

### Limited-Time Offer Banner
- Site-wide, mounted in `src/app/layout.tsx` directly (not inside `SiteChrome`) so it renders
  unconditionally on every route, including `/lp/*` — above the nav, not sticky.
- Background: `bg-brand-slate` (`#14141A`), matching Footer's dark treatment.
- **Contrast rule (already established elsewhere in this codebase):** raw cobalt
  (`text-teal-text` / `#3E63F0`) only reaches ~3.7:1 contrast on the dark ink background —
  reserved for large text. Price and link text on the banner use `text-teal-on-slate`
  (`#A6B8FB`) instead, same as every other dark-surface cobalt usage on this site.
- Dismissible via an X button; dismissal persists in `localStorage`
  (`aeroscale_promo_banner_dismissed`); no expiration/countdown logic — reappears if the browser's
  storage is cleared, that's fine.
- Price is always sourced from `offerPricing` in `config/offer.ts`, never hardcoded — flipping
  `offerPricing.promoActive` to `false` removes the banner site-wide and drops the strikethrough
  on every other price display at the same time.

### Typography
- **Display/headlines:** Space Grotesk (Bold), tight letter-spacing, oversized clamp()-based sizing
- **Body:** Inter (Regular/Medium/SemiBold as needed)

### Layout/Feel Principles (established during redesign, keep consistent)
- Soft shadows over hard borders; rounded corners (16–20px) rather than sharp edges
- Asymmetry where sensible — not every section centered/symmetric
- Subtle scroll-reveal animations on section/card entrance (fade + slight upward movement, staggered for grids)
- Featured/primary pricing or offer cards get a dark-card treatment to stand out from standard white cards
- Generous whitespace between sections
- Visual style loosely referenced https://www.urbanwindowwash.com for **layout/structure only** — never copy its wording or content

### Signature Visual Language (avoid generic node/circle-and-path diagrams — they read as "cheap" per prior feedback)
Prefer visuals that resemble real product moments over abstract flow diagrams:
- **Hero visual:** a "live activity feed" panel (dark card, pulsing "Live" indicator, rows of real-sounding automated actions cycling in/out, small stat footer).
- **Automation offer visual:** a looping chat-thread mockup — automated message → customer reply → 5-star fill animation → "Posted to Google ✓" badge.
- **Ad Optimization offer visual:** a small live dashboard — two ad variants with animated performance bars, winning variant highlighted with a badge.
- These will likely need Tier 2/Tier 3-specific equivalents (e.g., a visual for AI receptionist, database reactivation, missed-call text-back, referral tracking) once tier pages are built — follow the same "real product moment, not abstract diagram" principle.

### Logo Direction (in progress, not finalized)
- Wordmark **"AeroScale"** in two-tone treatment ("Aero" white / "Scale" cobalt) is approved and in use in the nav.
- For a standalone icon (profile picture/favicon use), direction is **ascending bars in a "stock rising" style** — bars combined with a trend line/arrow, NOT abstract node/shape marks (those were explicitly rejected). Most recent candidates worth building on: bars with a trend line + arrowhead across the tops, or a candlestick-chart-style mark. Final icon has not yet been chosen — confirm with the person before finalizing.

## Content & Marketing Notes
- Organic social and ad copy should stay benefit-led. Keep language niche-agnostic (no gym-specific or other vertical-specific language) since AeroScale is the general no-niche brand — vertical-specific copy belongs to future sub-agencies, not this brand.
- Do not fabricate client results, testimonials, or specific statistics (e.g., review counts, CTR lifts) — use placeholder/template language until real numbers are provided.
- When generating on-brand images (social posts, logos), build them precisely from the color/type tokens above using direct rendering (PIL/HTML-CSS) rather than open-ended AI image generation — prior attempts using unconstrained generation tools did not match the brand and were rejected.

## Working Norms
- When restructuring site pages, always confirm current file/folder structure before making changes.
- When a request could be read multiple ways (e.g., "add pricing" — tiered vs. flat), state the assumption and confirm before building rather than guessing silently.
- Flag legal/compliance concerns (like review gating or TCPA/SMS consent) proactively rather than only on request.
- This project has undergone two major pivots (18-service catalog → 3-tier system → single Full System offer). When in doubt about whether something reflects an old model or the current one, ask rather than assume.
