/**
 * Shared types for MisconiUSA.com
 * Operational gateway — forms, cards, subscription, pathways only.
 */

// ——— Contact Form ———
export interface GeneralContactPayload {
  name: string;
  email: string;
  message: string;
  company: string;
  interestCategory: string;
  phone?: string;
}

// ——— Opportunity Cards (three only) ———
export type OpportunityLane = "customer" | "product" | "supplier";

export interface OpportunityCard {
  id: OpportunityLane;
  title: string;
  description: string;
  slug: string;
}

export interface OpportunityItem {
  id: string;
  title: string;
  description: string;
}

// ——— Readiness Pathways ———
export type PathwayColor = "blue" | "orange" | "green" | "purple";

export interface Pathway {
  id: string;
  name: string;
  description: string;
  color?: PathwayColor;
}

// ——— Subscription (single pack — legacy / optional) ———
export interface SubscriptionPack {
  id: string;
  name: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  features?: string[];
}

export interface SubscriptionFeatureRow {
  text: string;
  included: boolean;
}

export interface SubscriptionTier {
  id: string;
  badge: string;
  price: string;
  period?: string;
  title: string;
  description: string;
  features: SubscriptionFeatureRow[];
  ctaText: string;
  ctaHref: string;
  ctaVariant: "primary" | "secondary";
  highlighted?: boolean;
  tag?: string;
}

// ——— API responses ———
export interface ApiSuccess<T = unknown> {
  success: true;
  message: string;
  data?: T;
}

export interface ApiError {
  success: false;
  message: string;
  errors?: Record<string, string>;
}

export type ApiResponse<T = unknown> = ApiSuccess<T> | ApiError;
