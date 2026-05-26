/**
 * Site-wide constants. External GYBS URL: NEXT_PUBLIC_GYBS_URL in .env.local
 */

function trimTrailingSlash(url: string): string {
  return url.replace(/\/$/, "");
}

/** Single GYBS site URL from env — used for all GYBS / intake / partner links */
export const GYBS_BASE_URL = trimTrailingSlash(process.env.NEXT_PUBLIC_GYBS_URL?.trim() ?? "");

export const GYBS_BUSINESS_INTAKE_URL = GYBS_BASE_URL;
export const GYBS_SUPPLIER_INTAKE_URL = GYBS_BASE_URL;
export const GYBS_PARTNER_URL = GYBS_BASE_URL;
export const GYBS_HOME_URL = GYBS_BASE_URL;
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
