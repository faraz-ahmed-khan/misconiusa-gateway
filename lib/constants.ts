/**
 * Site-wide routes, CTA labels, and GYBS env URLs.
 * Marketing CTAs for score/packages use lib/links.ts (LINKS).
 */

function trimTrailingSlash(url: string): string {
  return url.replace(/\/$/, "");
}

function envPublicUrl(name: string): string | undefined {
  const raw = process.env[name]?.trim();
  return raw ? trimTrailingSlash(raw) : undefined;
}

/** GYBS site root — NEXT_PUBLIC_GYBS_URL (legacy interior pages) */
export const GYBS_BASE_URL = envPublicUrl("NEXT_PUBLIC_GYBS_URL") ?? "";

export const GYBS_BUSINESS_INTAKE_URL =
  envPublicUrl("NEXT_PUBLIC_GYBS_BUSINESS_INTAKE_URL") ??
  (GYBS_BASE_URL ? `${GYBS_BASE_URL}/business-intake` : "");

export const GYBS_SUPPLIER_INTAKE_URL =
  envPublicUrl("NEXT_PUBLIC_GYBS_SUPPLIER_INTAKE_URL") ??
  (GYBS_BASE_URL ? `${GYBS_BASE_URL}/supplier-intake` : "");

export const GYBS_PARTNER_URL =
  envPublicUrl("NEXT_PUBLIC_GYBS_PARTNER_URL") ??
  (GYBS_BASE_URL ? `${GYBS_BASE_URL}/partner` : "");

export const GYBS_HOME_URL = GYBS_BASE_URL;
export const GYBS_INTAKE_URL = GYBS_BUSINESS_INTAKE_URL;

/** Prefer LINKS.gybsScore for new marketing CTAs */
export const GYBS_SCORE_URL =
  envPublicUrl("NEXT_PUBLIC_GYBS_SCORE_URL") ?? GYBS_BASE_URL;

export type SubscriptionTierSlug = "basic" | "consultation" | "full" | "enterprise";

export function gybsSubscribeUrl(tier: SubscriptionTierSlug): string {
  return GYBS_BASE_URL ? `${GYBS_BASE_URL}/subscribe?tier=${tier}` : "";
}

export const ROUTES = {
  home: "/",
  about: "/about",
  whoWeServe: "/who-we-serve",
  ecosystemReadiness: "/ecosystem-of-readiness",
  ecosystemOpportunities: "/ecosystem-of-opportunities",
  whatWeGovern: "/what-we-govern",
  capabilities: "/capabilities",
  investorRelations: "/investor-relations",
  opportunities: "/opportunities",
  opportunitiesCustomer: "/opportunities/customer",
  opportunitiesProduct: "/opportunities/product",
  opportunitiesSupplier: "/opportunities/supplier",
  pathways: "/pathways",
  subscribe: "/subscribe",
  subscriptionDetails: "/subscription-details",
  beginReadiness: "/begin-readiness",
  contact: "/contact",
  terms: "/terms",
  privacy: "/privacy",
  intakeBusiness: "/intake/business",
  intakeSupplier: "/intake/supplier",
  contactAnchor: "/#contact",
  forBusinesses: "/#for-businesses",
  forPartners: "/#for-partners",
  aboutAnchor: "/#about",
} as const;

export const CTA_TEXT = {
  getYourBusinessScore: "Get Your Business Score",
  getYourFreeBusinessScore: "Get Your Free Business Score",
  selectYourReadinessPackage: "Select Your Readiness Package",
  becomeAPartner: "Become a Partner",
  becomeAnAffiliate: "Become an Affiliate",
  sendMessage: "Send Message",
  // Legacy labels kept for interior pages pending client confirmation to remove those routes
  subscribeAndGetReady: "Select Your Readiness Package",
  subscribeAndBegin: "Select Your Readiness Package",
  startIntake: "Start Intake",
  businessIntake: "Business Intake",
  supplierIntake: "Supplier Intake",
  continueToGybs: "Continue to GYBS",
  viewOpportunities: "View Opportunities",
  learnMoreAboutReadiness: "Learn More About Readiness",
  beginReadinessJourney: "Get Your Free Business Score",
  startReadinessEvaluation: "Get Your Free Business Score",
  exploreOpportunityPathways: "Explore Opportunities",
  viewGovernanceStandards: "View Standards",
  exploreCapabilities: "Explore Capabilities",
  investorRelationsContact: "Investor Contact",
} as const;
