/**
 * Site-wide constants.
 * GYBS URLs from .env.local — see .env.example
 */

import type { Pathway } from "./types";

function trimTrailingSlash(url: string): string {
  return url.replace(/\/$/, "");
}

function envPublicUrl(name: string): string | undefined {
  const raw = process.env[name]?.trim();
  return raw ? trimTrailingSlash(raw) : undefined;
}

/** GYBS site root — NEXT_PUBLIC_GYBS_URL */
export const GYBS_BASE_URL = envPublicUrl("NEXT_PUBLIC_GYBS_URL") ?? "";

/** Business intake — NEXT_PUBLIC_GYBS_BUSINESS_INTAKE_URL, else {base}/business-intake */
export const GYBS_BUSINESS_INTAKE_URL =
  envPublicUrl("NEXT_PUBLIC_GYBS_BUSINESS_INTAKE_URL") ??
  (GYBS_BASE_URL ? `${GYBS_BASE_URL}/business-intake` : "");

/** Supplier intake — NEXT_PUBLIC_GYBS_SUPPLIER_INTAKE_URL, else {base}/supplier-intake */
export const GYBS_SUPPLIER_INTAKE_URL =
  envPublicUrl("NEXT_PUBLIC_GYBS_SUPPLIER_INTAKE_URL") ??
  (GYBS_BASE_URL ? `${GYBS_BASE_URL}/supplier-intake` : "");

/** Partner — NEXT_PUBLIC_GYBS_PARTNER_URL, else {base}/partner */
export const GYBS_PARTNER_URL =
  envPublicUrl("NEXT_PUBLIC_GYBS_PARTNER_URL") ??
  (GYBS_BASE_URL ? `${GYBS_BASE_URL}/partner` : "");

export const GYBS_HOME_URL = GYBS_BASE_URL;
export const GYBS_INTAKE_URL = GYBS_BUSINESS_INTAKE_URL;

/** Score gateway — NEXT_PUBLIC_GYBS_SCORE_URL, else GYBS_BASE_URL */
export const GYBS_SCORE_URL = envPublicUrl("NEXT_PUBLIC_GYBS_SCORE_URL") ?? GYBS_BASE_URL;

export type SubscriptionTierSlug = "basic" | "consultation" | "full" | "enterprise";

export function gybsSubscribeUrl(tier: SubscriptionTierSlug): string {
  return GYBS_BASE_URL ? `${GYBS_BASE_URL}/subscribe?tier=${tier}` : "";
}

// ——— Readiness pathways (six) ———
export const PATHWAYS: Pathway[] = [
  {
    id: "1",
    name: "Business Readiness",
    description: "Understand your business foundation and operational readiness.",
    color: "blue",
  },
  {
    id: "2",
    name: "Supplier Readiness",
    description: "Assess your readiness to work with suppliers and enter supply chains.",
    color: "orange",
  },
  {
    id: "3",
    name: "Marketplace Readiness",
    description: "Evaluate your readiness to enter marketplaces and sell products or services.",
    color: "green",
  },
  {
    id: "4",
    name: "Distribution Readiness",
    description: "Measure your readiness to distribute products and expand channels.",
    color: "purple",
  },
  {
    id: "5",
    name: "Contract Readiness",
    description: "Check your readiness to pursue contracts and structured opportunities.",
    color: "blue",
  },
  {
    id: "6",
    name: "SBA Readiness",
    description: "Review your readiness for SBA pathways and federal programs.",
    color: "orange",
  },
];

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
  contactAnchor: "/contact",
} as const;

export const CTA_TEXT = {
  subscribeAndGetReady: "Subscribe & Get Ready",
  subscribeAndBegin: "Subscribe & Get Ready",
  startIntake: "Start Intake",
  businessIntake: "Business Intake",
  supplierIntake: "Supplier Intake",
  continueToGybs: "Continue to GYBS",
  getYourBusinessScore: "Get Your Business Score",
  viewOpportunities: "View Opportunities",
  learnMoreAboutReadiness: "Learn More About Readiness",
  beginReadinessJourney: "Begin Your Readiness Journey",
  startReadinessEvaluation: "Start Readiness Evaluation",
  exploreOpportunityPathways: "Explore Opportunity Pathways",
  viewGovernanceStandards: "View Governance Standards",
  exploreCapabilities: "Explore Capabilities",
  investorRelationsContact: "Investor Relations Contact",
} as const;
