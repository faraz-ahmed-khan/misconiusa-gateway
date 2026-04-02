/**
 * Site-wide constants.
 *
 * External operational endpoints:
 * - GYBS (Get Your Business Score): https://get-your-business-score-com.vercel.app/
 * - Misconi USA: https://misocniusa.vercel.app/
 * - Misconi USA Network: https://misconi-usa-network.vercel.app/
 */

import type { Pathway } from "./types";

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

// Start Intake always routes into GYBS; env can override.
export const GYBS_INTAKE_URL =
  process.env.NEXT_PUBLIC_GYBS_URL ?? "https://get-your-business-score-com.vercel.app/";

/** Primary national readiness gateway (score) */
export const GYBS_SCORE_URL = "https://getyourbusinessscore.com";

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
