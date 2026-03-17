/**
 * Site-wide constants.
 *
 * External operational endpoints:
 * - GYBS (Get Your Business Score): https://get-your-business-score-com.vercel.app/
 * - Misconi USA: https://misocniusa.vercel.app/
 * - Misconi USA Network: https://misconi-usa-network.vercel.app/
 */

// Start Intake always routes into GYBS; env can override.
export const GYBS_INTAKE_URL =
  process.env.NEXT_PUBLIC_GYBS_URL ?? "https://get-your-business-score-com.vercel.app/";

export const ROUTES = {
  home: "/",
  opportunities: "/opportunities",
  opportunitiesCustomer: "/opportunities/customer",
  opportunitiesProduct: "/opportunities/product",
  opportunitiesSupplier: "/opportunities/supplier",
  pathways: "/pathways",
  subscribe: "/subscribe",
  contactAnchor: "/#contact",
} as const;

export const CTA_TEXT = {
  subscribeAndBegin: "Subscribe & Begin",
  startIntake: "Start Intake",
  viewOpportunities: "View Opportunities",
} as const;
