/**
 * Site-wide constants.
 *
 * External operational endpoints:
 * - GYBS (Get Your Business Score): readiness intake and scoring (external)
 * - Misconi USA: https://misocniusa.vercel.app/
 * - Misconi USA Network: https://misconi-usa-network.vercel.app/
 *
 * MisconiUSA.com explains the ecosystem and routes intake to GYBS — it does not host intake forms.
 */

function trimTrailingSlash(url: string): string {
  return url.replace(/\/$/, "");
}

const gybsBase =
  process.env.NEXT_PUBLIC_GYBS_URL ?? "https://get-your-business-score-com.vercel.app";

/** GYBS base URL (no trailing slash). */
export const GYBS_BASE_URL = trimTrailingSlash(gybsBase);

/** Business intake — routes to GYBS homepage */
export const GYBS_BUSINESS_INTAKE_URL =
  process.env.NEXT_PUBLIC_GYBS_BUSINESS_INTAKE_URL ?? GYBS_BASE_URL;

/** Supplier intake — routes to GYBS homepage */
export const GYBS_SUPPLIER_INTAKE_URL =
  process.env.NEXT_PUBLIC_GYBS_SUPPLIER_INTAKE_URL ?? GYBS_BASE_URL;

/** Partner entry on GYBS — national readiness gateway home */
export const GYBS_PARTNER_URL =
  process.env.NEXT_PUBLIC_GYBS_PARTNER_URL ?? GYBS_BASE_URL;

/** General GYBS navigation (homepage) */
export const GYBS_HOME_URL = GYBS_BASE_URL;

/** @deprecated Use GYBS_HOME_URL or GYBS_BUSINESS_INTAKE_URL */
export const GYBS_INTAKE_URL = GYBS_BASE_URL;

export const ROUTES = {
  home: "/",
  opportunities: "/opportunities",
  opportunitiesCustomer: "/opportunities/customer",
  opportunitiesProduct: "/opportunities/product",
  opportunitiesSupplier: "/opportunities/supplier",
  pathways: "/pathways",
  subscribe: "/subscribe",
  intakeBusiness: "/intake/business",
  intakeSupplier: "/intake/supplier",
  contactAnchor: "/#contact",
} as const;

export const CTA_TEXT = {
  subscribeAndBegin: "Subscribe & Begin",
  startIntake: "Start Intake",
  businessIntake: "Business Intake",
  supplierIntake: "Supplier Intake",
  continueToGybs: "Continue to GYBS",
  getYourBusinessScore: "Get Your Business Score",
  viewOpportunities: "View Opportunities",
} as const;
