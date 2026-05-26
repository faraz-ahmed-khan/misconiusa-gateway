# MisconiUSA.com

MisconiUSA.com is the **Prime Agent's operational gateway**. It presents the business, readiness ecosystem, and opportunity lanes — and routes intake to GYBS. It does **not** host readiness or supplier intake forms.

## Responsibilities

1. Explain who Misconi USA is and what it offers
2. Show who the gateway serves (businesses, suppliers, partners, agencies)
3. Present opportunities (three opportunity cards and subpages)
4. Present readiness pathways (eight governed pathways)
5. Present subscription (Subscription Gateway Pack)
6. Route users to GYBS for intake and scoring
7. Provide Prime Agent contact (email only — no intake forms on this site)

Intent selection and authenticated readiness experiences occur in **GYBS**, not on MisconiUSA.com.

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- API routes for mock data; Zoho contact APIs exist but are not used by the public site UI

## Commands

```bash
npm install
npm run dev
npm run build
```

## Pages

- **/** — Homepage (Who We Are, What We Offer, Who We Serve, opportunities, subscription, pathways, How We Work, about, contact)
- **/intake/business** — Business intake gateway → continues to GYBS
- **/intake/supplier** — Supplier intake gateway → continues to GYBS
- **/opportunities** — Three opportunity cards
- **/opportunities/customer**, **/product**, **/supplier** — Lane opportunity explanations
- **/pathways** — All eight readiness pathways
- **/subscribe** — Subscription Gateway Pack
- **/#contact** — Contact & routing (email + intake links, no forms)
- **/privacy**, **/terms** — Legal placeholders

## Environment

Optional GYBS URLs (default for all: `https://get-your-business-score-com.vercel.app/`):

Env overrides:

- `NEXT_PUBLIC_GYBS_URL` — GYBS base URL
- `NEXT_PUBLIC_GYBS_BUSINESS_INTAKE_URL` — Business intake on GYBS (overrides default)
- `NEXT_PUBLIC_GYBS_SUPPLIER_INTAKE_URL` — Supplier intake on GYBS (overrides default)

## License

Proprietary. © Misconi USA. All rights reserved.
