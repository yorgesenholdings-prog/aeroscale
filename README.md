# AeroScale

The public-facing website for **AeroScale** — a small business consulting and support
company that helps owners solve problems, complete important projects, and build stronger
businesses across strategy, marketing, advertising, systems and automation, SOPs, business
planning, market research, and data analytics, through one-time projects and ongoing monthly
support.

## Technology stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`)
- [Lucide React](https://lucide.dev) icons
- [Zod](https://zod.dev) for validation
- [Resend](https://resend.com) for production email delivery (optional — see below)
- ESLint

No database. No headless CMS. No external fonts fetched at build time — the site uses a system
font stack.

## Local setup

Requires Node.js 20.19+ or 22.13+ (Next.js 16's minimum supported versions).

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site runs at `http://localhost:3000`.

### Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Type-check the project |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |

The production build succeeds even with no environment variables set — see below.

## Environment variables

Copy `.env.example` to `.env.local` and fill in as needed:

```
CONTACT_FORM_MODE=console
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

| Variable | Purpose |
|---|---|
| `CONTACT_FORM_MODE` | `console` (default) or `resend`. See below. |
| `RESEND_API_KEY` | Required only when `CONTACT_FORM_MODE=resend`. |
| `CONTACT_TO_EMAIL` | Inbox that receives new lead notifications (Resend mode). |
| `CONTACT_FROM_EMAIL` | Verified sending address in Resend (Resend mode). |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used for metadata, sitemap, and structured data. Set this to your real domain in production. |

None of these are read at module load time in a way that can crash the build — the Resend
client is only instantiated inside the request handler, and only when `CONTACT_FORM_MODE=resend`.

## Contact form behavior

The contact form (`/contact`) and the Growth Scorecard lead form (`/growth-scorecard`) both post
to `src/app/api/contact/route.ts`.

**Console mode (default, `CONTACT_FORM_MODE=console` or unset):** submissions are validated with
the same Zod schema as production, logged to the server console, and the API returns a normal
success response. No email is sent. This is the default so the project builds and runs cleanly
in any environment without credentials.

**Resend mode (`CONTACT_FORM_MODE=resend`):** requires `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and
`CONTACT_FROM_EMAIL` to be set. The route sends:
1. An owner notification to `CONTACT_TO_EMAIL` with the full submission (contact details,
   business details, requested services, scorecard results if applicable, UTM/referrer data).
2. A confirmation email back to the person who submitted the form.

If `CONTACT_FORM_MODE=resend` is set but any of the three required variables is missing, the API
returns a clear `500` error instead of crashing.

### Resend setup

1. Create a [Resend](https://resend.com) account and verify a sending domain.
2. Generate an API key and set `RESEND_API_KEY`.
3. Set `CONTACT_FROM_EMAIL` to a verified address on that domain.
4. Set `CONTACT_TO_EMAIL` to the inbox that should receive lead notifications.
5. Set `CONTACT_FORM_MODE=resend`.

### Anti-spam and reliability

- A hidden honeypot field silently accepts (but discards) bot submissions.
- Requests are validated server-side with Zod regardless of what the client sent.
- A simple in-memory rate limiter caps requests per IP per minute (resets on server restart —
  there's no database backing this, by design; consider a durable rate limiter if you add one).
- All user-submitted content is HTML-escaped before being included in email bodies.
- The client disables the submit button while a request is in flight to prevent double submits.

## Growth Scorecard

`/growth-scorecard` is a fully client-side, database-free assessment: 24 questions across 8
categories (strategy, marketing, sales, operations, SOPs, data, owner dependence, growth
readiness). Scoring logic lives in `src/lib/scorecard-scoring.ts` and question/category data
lives in `src/config/scorecard.ts`.

Results (overall score, category breakdown, three weakest categories, and recommended service
links) are shown immediately in the browser — no email is required to see them. A lead form
below the results lets the visitor optionally request an emailed copy and/or a free business
assessment; that submission goes through the same `/api/contact` route as the main contact form,
tagged with `formType: "scorecard"` and the full scorecard results.

## Deployment (Vercel)

1. Push this repository to GitHub/GitLab/Bitbucket and import it into
   [Vercel](https://vercel.com/new).
2. Set the environment variables listed above in the Vercel project settings (at minimum,
   `NEXT_PUBLIC_SITE_URL`; add the Resend variables when you're ready to send real email).
3. Deploy. The build command (`next build`) and output are auto-detected.
4. Once the domain is live, update `NEXT_PUBLIC_SITE_URL` to match and redeploy so canonical
   URLs, Open Graph tags, the sitemap, and structured data all point at the right domain.

## Editing the site

### Services

All nine service categories are defined in `src/config/services.ts` (one `ServiceDefinition`
per service — intro copy, problems solved, deliverables, FAQs, related services, etc.). Each
service page under `src/app/services/<slug>/page.tsx` is a thin wrapper that pulls its data from
this file and renders the shared `src/components/services/ServicePageTemplate.tsx`. Edit the
config file to change copy; edit the template to change structure across all nine pages at once.

### Navigation

Primary nav links, the Services dropdown, the header CTA, and footer links are all defined in
`src/config/navigation.ts`. The Services dropdown is generated automatically from
`src/config/services.ts`, so adding a new service to that file also adds it to the nav.

### Site metadata & organization details

`src/config/site.ts` holds the site name, tagline, canonical URL, and the `organization` object
used for JSON-LD structured data (address, phone, founding date, `sameAs` social links, etc.).
Only fields that are actually true are included — leave fields `undefined` rather than inventing
values; the structured-data helpers in `src/components/seo/JsonLd.tsx` omit any field that isn't
set.

### Brand colors

Colors are defined once as CSS custom properties and Tailwind v4 `@theme` tokens in
`src/app/globals.css` (no `tailwind.config.js` — Tailwind v4 uses this CSS-first approach).
Update the hex values in the `:root` block and every `bg-brand-teal`, `text-brand-slate`, etc.
utility across the site updates automatically. `src/config/brand.ts` mirrors the same values as
plain hex strings for the few places (inline SVG diagrams) that need a raw color value instead of
a Tailwind class.

### Contact recipients

Set `CONTACT_TO_EMAIL` (see Environment variables above) to change where lead notifications are
sent. No code changes are required.

### Adding analytics later

`src/lib/analytics.ts` exports a single `trackEvent(name, properties)` function with a fixed set
of event names (hero CTA clicks, service card clicks, scorecard funnel events, contact form
funnel events, etc.) already called from the relevant components. It currently only logs to the
console in development and is a no-op in production. To wire up a real analytics provider, replace
the body of `trackEvent` with a call to that provider's SDK — no call sites elsewhere in the app
need to change.

UTM parameters are captured on first page load and persisted in `sessionStorage`
(`src/lib/utm.ts`), then attached to both the contact form and scorecard lead form submissions
automatically.

## Legal pages — action required before launch

`/privacy` and `/terms` contain **general placeholder content only**. They are not attorney-drafted
and must be reviewed by qualified legal counsel before this site is used for the live business.
Both pages include a visible on-page notice and a code comment saying the same thing — do not
remove either until real review has happened.

## Remaining business details to supply

The following are intentionally left as placeholders or omitted, since inventing them would be
inaccurate:

- **Founder story** — `/about` includes a clearly marked content-placeholder component where an
  authentic founder story should be added.
- **Business address, phone number, founding date, social profiles** — add real values to the
  `organization` object in `src/config/site.ts` once available; they'll automatically flow into
  structured data.
- **Legal review** of `/privacy` and `/terms`.
- **Resend credentials** (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`) once you're
  ready to send real email instead of console-logging submissions.
- **Production domain** — set `NEXT_PUBLIC_SITE_URL` once the site has a real domain.
- **Analytics provider**, if/when you want one — see "Adding analytics later" above.
