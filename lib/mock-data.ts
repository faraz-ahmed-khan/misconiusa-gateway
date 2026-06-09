/**
 * Mock data for API routes.
 * No database; replace with real data/Zoho when backend is implemented.
 */

import { gybsSubscribeUrl } from "./constants";
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
    id: "basic",
    badge: "BASIC",
    price: "$59.99",
    title: "Basic Readiness Gateway",
    description: "Educational access for businesses building foundational readiness.",
    features: [
      { text: "Templates", included: true },
      { text: "Checklists", included: true },
      { text: "Readiness literacy resources", included: true },
      { text: "Does not include opportunity access", included: false },
    ],
    ctaText: "Subscribe & Get Ready",
    ctaHref: gybsSubscribeUrl("basic"),
    ctaVariant: "secondary",
  },
  {
    id: "consultation",
    badge: "CONSULTATION",
    price: "$249",
    title: "Consultation Gateway",
    description: "Advisory support for businesses needing guided corrections and expert review.",
    features: [
      { text: "Document review", included: true },
      { text: "Correction guidance", included: true },
      { text: "Readiness roadmap support", included: true },
      { text: "Does not include opportunity access", included: false },
    ],
    ctaText: "Subscribe & Get Ready",
    ctaHref: gybsSubscribeUrl("consultation"),
    ctaVariant: "secondary",
  },
  {
    id: "full",
    badge: "FULL PACKAGING",
    tag: "Done-With-You",
    price: "$2,499",
    title: "Full Readiness Packaging Gateway",
    description: "Done-With-You support for businesses needing full readiness packaging.",
    features: [
      { text: "Document assembly", included: true },
      { text: "Capability mapping", included: true },
      { text: "Scoring", included: true },
      { text: "Routing", included: true },
      {
        text: "Unlocks access to the full opportunity landscape on MisconiUSA.com once readiness is confirmed and approved by a Misconi USA representative",
        included: true,
      },
    ],
    ctaText: "Subscribe & Get Ready",
    ctaHref: gybsSubscribeUrl("full"),
    ctaVariant: "primary",
    highlighted: true,
  },
  {
    id: "enterprise",
    badge: "ENTERPRISE",
    price: "$4,999",
    title: "Enterprise DSCM Gateway",
    description: "Enterprise-level readiness for multi-department or multi-location organizations.",
    features: [
      { text: "Enterprise routing", included: true },
      { text: "DSCM integration", included: true },
      { text: "Advanced readiness scoring", included: true },
      {
        text: "Unlocks access to the full opportunity landscape on MisconiUSA.com once readiness is confirmed and approved by a Misconi USA representative",
        included: true,
      },
    ],
    ctaText: "Subscribe & Get Ready",
    ctaHref: gybsSubscribeUrl("enterprise"),
    ctaVariant: "primary",
  },
];

export const SUBSCRIPTION_GATEWAY_INTRO =
  "Activate your business services and begin working with Misconi USA. Your subscription options appear after you complete your Initial Business Score on GetYourBusinessScore.com.";

export const SUBSCRIPTION_APPROVAL_NOTE =
  "Opportunity access requires a formal review by a Misconi USA representative. Approval ensures your business meets readiness, documentation, and compliance standards before entering the opportunity ecosystem.";

export const SUBSCRIPTION_SUPPORT_NOTE =
  "Subscriptions are processed securely through our external payment system. Once activated, your readiness services begin immediately.";
