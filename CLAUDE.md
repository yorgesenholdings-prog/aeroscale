# AeroScale — Project Instructions

This file gives context for any Claude instance (chat or Claude Code) working on the AeroScale project. Read this before making changes to the site, marketing materials, or pricing.

## What AeroScale Is

AeroScale is a small-business growth agency built around a **productized, tiered system** rather than an à la carte service catalog. It positions itself as an alternative to hiring full in-house departments — owners get a done-for-you growth system instead of stitching together separate hires or vendors. Live site: https://getaeroscale.com/

**Strategic direction (as of this pivot):** AeroScale stays a general, no-niche brand. The 3-tier system below is the core offer for every client regardless of industry. The long-term plan is to eventually spin up niche-specific **sub-agencies** that reuse this same tier structure and delivery system with different front-end branding/copy — the tiers and delivery mechanics stay constant; only positioning changes per sub-agency. Do not build niche-specific assumptions into the core system unless explicitly told a sub-agency is being built.

## Delivery Constraints (apply to everything below)

- **GoHighLevel (GHL) only.** All delivery — automation, SMS/email, CRM, funnels, AI receptionist, remarketing — runs through AeroScale's own GHL instance, with each client run through it. Do not introduce other tools/platforms unless a specific client explicitly requests one.
- **No setup fee.** Once a system is built once, it's copy-paste to new clients — the pricing below assumes near-zero marginal setup cost per client.
- **Usage costs (SMS sends, AI voice minutes, phone numbers) are billed separately to clients**, not absorbed into the flat monthly price. This keeps margin predictable regardless of client volume.

## The 3-Tier System (current core offer)

### Tier 1 — Foundation — $499/month
The low-commitment entry point. Proves value fast, lowest delivery complexity.
- Review Follow-Up & Review Response Automation (see standalone offer details below)
- Campaign Management (ads running + optimized — see Ad Optimization standalone offer below)
- **Missed Call Text-Back** — automatically texts anyone whose call goes unanswered, so no inbound lead goes silent.
  - Included: automatic SMS trigger on any missed inbound call, customizable text template, immediate (near-instant) send, routes into the same GHL contact/lead record as everything else, basic reporting (missed calls captured, response rate).
  - Not included: calling the lead back, or handling the conversation beyond the initial text (that escalates into Tier 2's AI Lead Nurturing or Tier 3's AI Receptionist).
  - **This is exclusive to the tier — not sold as a standalone offer** — it's part of what makes Tier 1 worth choosing over buying the two standalone offers separately, not just a price discount.
- Effectively a bundle of AeroScale's two standalone offers (at a discount vs. buying separately) plus one tier-exclusive automation.

### Tier 2 — Growth System — $999/month
Everything in Tier 1, plus:

**Database Reactivation** — re-engages a client's existing contacts (old leads, inactive/canceled customers) to generate fast bookings before any ad spend. **See compliance policy below before this is built or sold.**
- Included: contact list import, consent audit against the compliance policy below, one written offer/sequence built per list, campaign deployment, **monthly re-run against newly-inactive contacts** (rolling, not a single blast), basic results reporting (sends, opens/clicks, bookings).
- Not included: guaranteed response/booking rates, legal review of the client's historical consent records (client confirms; AeroScale applies the policy but doesn't audit their paperwork), cleaning a genuinely unusable list (flag as a separate one-time upsell if needed).

**AI Lead Nurturing** — instant automated response to new inbound leads, with follow-up until the lead books or opts out. The value driver is speed-to-lead, not message content quality.
- Included: auto-response target under 5 minutes via SMS/email, automated follow-up sequence (e.g., day 1/3/7 touches) for non-responders, automated booking handoff, escalation notification to client/staff when a lead is ready or needs a human.
- Not included: live human chat (this is automated messaging, not a staffed inbox), lead generation itself (nurtures leads the client already has — pairs with but is separate from the Ad Optimization offer).

### Tier 3 — Full System — $2,199/month
Everything above, plus:

**AI Receptionist/Intake** — AI voice on the client's business line, handling missed calls, FAQs, and automatic consult booking.
- Included: AI voice on client's existing number or a new tracking number (client's choice), custom FAQ script from client-provided info (capped around 15 topics to keep setup templated), automatic calendar booking, required AI-disclosure language where the client's state mandates it, monthly call volume/summary reporting.
- Not included: handling complex/sensitive calls (billing disputes, complaints — these fall back to a message or human transfer, not AI resolution), custom voice/personality design beyond AeroScale's standard options, 24/7 live human backup.

**Full Remarketing Sequences** — multi-touch re-engagement across the *entire* funnel, distinct from Tier 2's short-term new-lead nurture: cold leads who never converted, past customers who haven't returned, and ad/site visitors who didn't convert.
- Included: cold-lead re-engagement sequences, post-purchase/repeat-business sequences, coordination with the Ad Optimization retargeting audience, quarterly sequence refresh (updated offers/messaging, not left on autopilot indefinitely).
- Not included: new ad creative for remarketing (same boundary as the core Ad Optimization offer — existing creative is reused/retargeted, not redesigned).
- **On the site, distinguish this clearly from Tier 2's AI Lead Nurturing** (new leads, short-term) to avoid reading as redundant — a simple funnel-stage visual works well here.

**Coaching/Consulting** — direct strategic input layered on top of the automated systems. Low incremental delivery cost since it draws on AeroScale's own expertise, but it's the one component that scales with personal time, not automation — watch this against total Tier 3 client count.
- Included: recurring monthly 1:1 call (30–45 min) reviewing performance across all systems and general growth advice, async access for quick questions between calls (reasonable response window, not real-time on-call).
- Not included: hands-on implementation outside existing system scope (not a hiring, financial, or legal advisor), guaranteed outcomes tied to advice given.

**Referral Program Automation** — turns happy current customers into a growth channel, the counterpart to Tier 2's Database Reactivation (which mines lapsed customers) — Tier 3 rounds this out with the full-funnel story: new leads, lapsed customers, *and* referrals from active ones.
- Included: automated referral ask (triggered off a schedule or a positive event, e.g., X days after a completed job), unique referral link/code per customer for tracking, notification to the client when a referral converts, basic reporting (asks sent, referrals generated, conversions).
- Not included: reward/incentive fulfillment — AeroScale tracks and automates the ask/attribution, but the client handles actually giving out the discount/gift; designing complex multi-tier incentive structures beyond one standard offer.

Note: some states require disclosure that a caller is interacting with an AI, not a human — confirm applicable state rules before deploying the AI Receptionist to a client in a new state.

### Updated tier contents summary
- **Tier 1 ($499/mo):** Review Follow-Up & Review Response Automation + Ad Optimization Service + Missed Call Text-Back
- **Tier 2 ($999/mo):** everything in Tier 1 + Database Reactivation + AI Lead Nurturing
- **Tier 3 ($2,199/mo):** everything in Tier 2 + AI Receptionist/Intake + Full Remarketing Sequences + Coaching/Consulting + Referral Program Automation

### Standalone Offers (still sold independently, also form the base of Tier 1)
- **Review Follow-Up & Review Response Automation** — $200/month. Builds and maintains an automated workflow that asks every customer for a review after a completed job, **plus an automated public response posted to every review as it comes in** (positive or negative). **Never implement "review gating"** (routing low-star ratings away from public platforms, only pushing high stars to Google) — this violates Google's review policy (enforced since April 2026) and the FTC's Consumer Review Rule (16 CFR Part 465). Every customer gets the same public review request regardless of rating, and every review gets the same standard automated response regardless of rating — no differential treatment on either side of this offer, in every tier, for every client, in every niche. Responses are auto-posted, not held for client approval; reviews needing a real resolution (e.g. a complaint) should be followed up on by the client directly, not through the automated reply.
- **Ad Optimization Service** — $400/month. Client already has an ad campaign with their own creative; AeroScale optimizes audience targeting, ad copy/messaging, and campaign settings, plus ongoing A/B testing and monthly reporting. Does NOT include ad creative design/production or building a campaign from scratch — make this exclusion explicit in any copy describing the offer.
- **Missed Call Text-Back is NOT part of this standalone list** — see Tier 1 above. It is tier-exclusive only, never sold à la carte.

### Onboarding Requirements (scale with tier)
- **Tier 1:** minimal — client's Google Business listing access, existing ad account access.
- **Tier 2 adds:** client's existing contact list, plus written confirmation of their consent status for that list (see compliance policy).
- **Tier 3 adds:** business phone number access, FAQ content for the AI receptionist script.

List these clearly per tier on the pricing page so prospects know upfront what they need to provide.

## Compliance Policy — Database Reactivation (Tier 2+)

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

**The 3-tier system (Foundation / Growth System / Full System) plus the two standalone offers (Review Follow-Up & Review Response Automation, Ad Optimization Service) are now the entire service offering.** Do not reference, link to, or resurrect the old catalog/bundles/instant-quote anywhere on the site — nav, footer, sitemap, or internal links.

## Ad Landing Pages (Ad Traffic Only — Not Linked From Main Site)

Unaffected by this pivot — still built around the two standalone offers:
- `/lp/automation` — Review Follow-Up & Review Response Automation, **$200/month only** (no tiers, no setup fee). No site nav/footer, noindex, excluded from sitemap.
- `/lp/marketing-management` — Ad Optimization Service, **$400/month only**, single campaign + A/B testing on an existing ad (not ad creation). Same no-nav/noindex rules.

Each landing page includes: benefit headline matching ad copy, problem framing, plain pricing, 3-step "how it works," a clear "What's Included / Not Included" section, a short FAQ addressing objections, a trust/credibility section, and one repeated CTA (top/middle/bottom) to a contact form or booking calendar.

## Other Site Features
- **Blog** at `/blog`: standard listing layout (title, excerpt, date, read more), structure in place even before posts exist.
- **Homepage:** Hero → "The AeroScale System" (condensed 3-tier summary, links to `/pricing`) → "Why Owners Call Us" → rest of page.
- **`/services`:** trimmed to just the two standalone offers + a short FAQ — the lighter, non-tier entry point.
- **`/pricing`:** the 3-tier system's home page, fully built — header, three tier cards (dark-card treatment on Growth System), a per-tier "See full details" accordion (included/not-included breakdowns, reusing the standalone offers' data from `config/landing-pages.ts` for Tier 1's two non-exclusive pieces), an onboarding-requirements-by-tier section, a "prefer to start smaller" section linking to `/services` (never directly to `/lp/*` — those are ad-only), a 5-question FAQ, and a closing CTA. Data lives in `config/pricing-tiers.ts` and `config/pricing-tier-details.ts`.

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
- This project has undergone one major pivot already (18-service catalog → 3-tier system). When in doubt about whether something reflects the old model or the new one, ask rather than assume.
