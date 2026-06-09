/**
 * Governed corporate copy — single source of truth for content pages.
 */

export const CONTACT = {
  company: "Misconi USA Inc.",
  address: "9234 Kingston Pike #457",
  city: "Knoxville, TN 37922",
  email: "info@misconiusainc.com",
  phone: "(865) 298-7731",
  location: "Knoxville, Tennessee",
  investorEmail: "investor@misconiusainc.com",
} as const;

export const BRAND = {
  tagline: "The Readiness Authority™",
  footerBaseline: "MISCONI USA — The Readiness Authority™",
} as const;

export const TERMS_SECTIONS = [
  { title: "Platform use standards", body: "Users must engage with Misconi USA platforms in accordance with governed readiness and opportunity standards. Misuse, misrepresentation, or attempts to bypass readiness requirements may result in restricted access." },
  { title: "Data handling", body: "Misconi USA processes business information submitted through readiness evaluations, subscriptions, and contact forms. Data is handled in accordance with applicable privacy standards and used to support readiness, governance, and opportunity routing." },
  { title: "Accuracy & updates", body: "Users are responsible for providing accurate business information. Misconi USA may update platform content, governance standards, and subscription offerings as the national ecosystem evolves." },
  { title: "User responsibilities", body: "Organizations entering the ecosystem are responsible for maintaining accurate documentation, completing required readiness steps, and adhering to governance standards before opportunity activation." },
  { title: "Intellectual property", body: "All platform content, frameworks, governance structures, and branded materials are the intellectual property of Misconi USA Inc. Unauthorized reproduction or distribution is prohibited." },
  { title: "External links", body: "Misconi USA may link to external systems including GetYourBusinessScore.com and payment processors. Users are subject to the terms and policies of those external platforms when engaging with them." },
  { title: "Limitation of liability", body: "Misconi USA provides governance, readiness, and routing frameworks. Opportunity access, procurement outcomes, and third-party transactions remain subject to separate review, approval, and compliance requirements." },
] as const;
