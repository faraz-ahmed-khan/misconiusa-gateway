/**
 * Mock data for API routes.
 * No database; replace with real data/Zoho when backend is implemented.
 */

import type { OpportunityCard, OpportunityItem, Pathway, SubscriptionPack } from "./types";

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

// ——— Eight Readiness Pathways (official, complete) ———
export const PATHWAYS: Pathway[] = [
  { id: "business", name: "Business Readiness Pathway", description: "Core business readiness validation and routing." },
  { id: "documentation", name: "Documentation Readiness Pathway", description: "Documentation and compliance verification." },
  { id: "operational", name: "Operational Readiness Pathway", description: "Operational capacity and process validation." },
  { id: "financial", name: "Financial Readiness Pathway", description: "Financial standing and capability verification." },
  { id: "marketplace", name: "Marketplace Readiness Pathway", description: "Marketplace eligibility and listing readiness." },
  { id: "procurement", name: "Procurement Readiness Pathway", description: "Procurement governance and approval flow." },
  { id: "supplier", name: "Supplier Readiness Pathway", description: "Supplier qualification and satisfaction criteria." },
  { id: "compliance", name: "Compliance Readiness Pathway", description: "Regulatory and policy compliance validation." },
];

// ——— Single Subscription Gateway Pack ———
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
