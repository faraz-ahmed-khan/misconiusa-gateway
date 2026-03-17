# MisconiUSA.com

MisconiUSA.com is the **Prime Agent's operational gateway**. It is not a marketing site, service catalog, or readiness intake tool. It has five responsibilities only:

1. Show opportunities (three opportunity cards and their subpages)
2. Show pathways (Business Readiness Pathways)
3. Show subscription (Subscription Gateway Pack)
4. Provide contact (General Contact Form and Supplier Interest Form)
5. Route users into GYBS for readiness (e.g. Start Intake)

Intent selection and authenticated experiences occur inside GYBS, not on MisconiUSA.com.

## Stack

- **Next.js** (latest stable) with App Router
- **TypeScript**
- **Tailwind CSS**
- **Dummy backend**: Next.js API route handlers only; no database. Mock data and typed payloads. Zoho integration is not implemented yet.

## Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

After `npm run dev`, open [http://localhost:3000](http://localhost:3000).

## Dummy backend

The app uses Next.js API route handlers as a dummy backend:

- **POST /api/contact/general** — General Contact Form. Validates required fields and returns a success message. No redirect. Placeholder for future Zoho integration.
- **POST /api/contact/supplier** — Supplier Interest Form. Same behavior; placeholder for Zoho.
- **GET /api/opportunities** — Returns three opportunity cards and minimal opportunity lists per lane (customer, product, supplier).
- **GET /api/pathways** — Returns all eight readiness pathways.
- **GET /api/subscription** — Returns the single Subscription Gateway Pack.

There is no real database and no real Zoho integration. Mock data lives in `lib/mock-data.ts`. Comments in the API routes indicate where a real backend or Zoho integration would replace the mock logic.

## Pages

- **/** — Homepage (hero, who we are, what makes us different, three opportunity cards, subscription gateway, readiness pathways, how it works, about, contact)
- **/opportunities** — Three opportunity cards with links to subpages
- **/opportunities/customer** — Customer opportunities list
- **/opportunities/product** — Product opportunities list
- **/opportunities/supplier** — Supplier opportunities list
- **/pathways** — All eight readiness pathways
- **/subscribe** — Subscription Gateway Pack (one pack only)
- **/#contact** — Contact section on homepage (nav “Contact” scrolls here)
- **/privacy** — Privacy Policy placeholder
- **/terms** — Terms of Use placeholder

## Environment

Optional:

- `NEXT_PUBLIC_GYBS_URL` — Base URL for GYBS (e.g. for “Start Intake”). Defaults to a placeholder if unset.

## License

Proprietary. © Misconi USA. All rights reserved.
