/**
 * Mock data for API routes.
 * No database; replace with real data/Zoho when backend is implemented.
 */

import { GYBS_SCORE_URL, gybsSubscribeUrl } from "./constants";
import type {
  OpportunityCard,
  OpportunityItem,
  SubscriptionPack,
  SubscriptionTier,
} from "./types";

// Pathways are defined in constants (single source of truth).
export { PATHWAYS } from "./constants";

// ——— Three Opportunity Cards (exact content from spec) ———
export const OPPORTUNITY_CARDS: OpportunityCard[] = [
  {
    id: "customer",
    title: "Customer Opportunities",
    description:
      "Readiness Driven Only — Customers unlock opportunities after completing GYBS, receiving a Business Score, subscribing, and reaching Level 2 Readiness.",
    slug: "customer",
  },
  {
    id: "product",
    title: "Product Opportunities",
    description:
      "Readiness Driven + Procurement Driven — Products unlock opportunities after readiness validation, procurement approval, and marketplace validation.",
    slug: "product",
  },
  {
    id: "supplier",
    title: "Supplier Opportunities",
    description:
      "Readiness Driven + Procurement Driven — Suppliers unlock opportunities after readiness validation, procurement satisfaction, and supplier satisfaction.",
    slug: "supplier",
  },
];

// ——— Minimal opportunity lists per lane (for subpages) ———
export const CUSTOMER_OPPORTUNITIES: OpportunityItem[] = [
  { id: "c1", title: "Customer Program A", description: "Readiness-validated customer program access." },
  { id: "c2", title: "Customer Program B", description: "Level 2 readiness and subscription required." },
  { id: "c3", title: "Customer Program C", description: "Business Score and pathway completion required." },
];

export const PRODUCT_OPPORTUNITIES: OpportunityItem[] = [
  { id: "p1", title: "Product Marketplace Entry", description: "Post readiness and procurement validation." },
  { id: "p2", title: "Product Listing Program", description: "Marketplace validation required." },
  { id: "p3", title: "Product Compliance Lane", description: "Readiness and procurement approval required." },
];

export const SUPPLIER_OPPORTUNITIES: OpportunityItem[] = [
  { id: "s1", title: "Supplier Registry", description: "Readiness and procurement satisfaction required." },
  { id: "s2", title: "Supplier Program Access", description: "Supplier satisfaction validation required." },
  { id: "s3", title: "Supplier Compliance Lane", description: "Full validation pathway required." },
];

// ——— Legacy single pack (optional consumers) ———
export const SUBSCRIPTION_PACK: SubscriptionPack = {
  id: "gateway-pack",
  name: "Subscription Gateway Pack",
  description:
    "Your subscription activates your readiness routing, unlocks your pathway, and enables opportunity eligibility. Subscription is required for all customers entering the readiness system.",
  ctaText: "Subscribe & Begin",
  ctaHref: "/subscribe",
  features: [
    "Activates your readiness routing immediately",
    "Unlocks your assigned pathway",
    "Enables full opportunity eligibility",
  ],
};

// ——— Subscription tiers (homepage + subscribe) ———
export const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: "free",
    badge: "FREE",
    price: "$0",
    title: "Score Only",
    description: "See your lane. View your score, readiness level, pack, and corrections.",
    features: [
      { text: "Business Score (0–100)", included: true },
      { text: "Readiness Level (1–3)", included: true },
      { text: "Recommended Lane", included: true },
      { text: "Assigned Pack", included: true },
      { text: "Corrections List", included: true },
      { text: "Education & Templates", included: false },
      { text: "Team Access", included: false },
    ],
    ctaText: "Start Free",
    ctaHref: GYBS_SCORE_URL,
    ctaVariant: "secondary",
  },
  {
    id: "basic",
    badge: "BASIC",
    price: "$49",
    period: "/mo",
    title: "Education & Support",
    description: "Unlock education, templates, document support, and limited team access.",
    features: [
      { text: "Everything in Free", included: true },
      { text: "Education & Templates", included: true },
      { text: "Document Upload & Review", included: true },
      { text: "Internal Scoring", included: true },
      { text: "Team Access (Limited)", included: true },
      { text: "Routing Eligibility", included: false },
      { text: "Opportunity Eligibility", included: false },
    ],
    ctaText: "Upgrade to Basic",
    ctaHref: gybsSubscribeUrl("basic"),
    ctaVariant: "secondary",
  },
  {
    id: "enterprise",
    badge: "ENTERPRISE",
    tag: "Most Complete",
    price: "$199",
    period: "/mo",
    title: "Full Readiness Infrastructure",
    description: "Unlock all lane features including Opportunity Lane, eligibility, and CUBE suite.",
    features: [
      { text: "Everything in Basic", included: true },
      { text: "Unlimited Team Access", included: true },
      { text: "Full Business Score Report", included: true },
      { text: "Routing Eligibility", included: true },
      { text: "Opportunity Eligibility", included: true },
      { text: "CUBE Enterprise Suite", included: true },
      { text: "Advanced Monitoring", included: true },
    ],
    ctaText: "Upgrade to Enterprise",
    ctaHref: gybsSubscribeUrl("enterprise"),
    ctaVariant: "primary",
    highlighted: true,
  },
];
