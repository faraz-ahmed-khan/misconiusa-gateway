/**
 * Shared site content — contact details and brand lockup.
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
  tagline: "The Readiness Company™",
  footerBaseline: "Misconi USA — The Readiness Company™",
  gatewayLine: "Readiness is the Gateway to Opportunity.",
} as const;

/** TODO(client): replace with approved legal text after client legal review */
export const TERMS_SECTIONS = [
  {
    title: "Terms of Use",
    body: "Content pending client legal review",
  },
] as const;

export const INTEREST_CATEGORIES = [
  "Business Readiness",
  "Partner",
  "Affiliate",
  "General Inquiry",
] as const;

export type InterestCategory = (typeof INTEREST_CATEGORIES)[number];
