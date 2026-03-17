/**
 * Form validation for contact endpoints.
 * Required fields only; no conditional logic.
 */

import type { GeneralContactPayload, SupplierInterestPayload } from "./types";

export function validateGeneralContact(
  body: unknown
): { valid: true; data: GeneralContactPayload } | { valid: false; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  const obj = body as Record<string, unknown>;

  const name = typeof obj?.name === "string" ? obj.name.trim() : "";
  const email = typeof obj?.email === "string" ? obj.email.trim() : "";
  const message = typeof obj?.message === "string" ? obj.message.trim() : "";

  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email.";
  if (!message) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      name,
      email,
      message,
      phone: typeof obj?.phone === "string" ? obj.phone.trim() || undefined : undefined,
      company: typeof obj?.company === "string" ? obj.company.trim() || undefined : undefined,
    },
  };
}

export function validateSupplierInterest(
  body: unknown
): { valid: true; data: SupplierInterestPayload } | { valid: false; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  const obj = body as Record<string, unknown>;

  const str = (key: string) => (typeof obj?.[key] === "string" ? (obj[key] as string).trim() : "");
  const name = str("name");
  const email = str("email");
  const company = str("company");
  const interestArea = str("interestArea");
  const productLine = str("productLine");
  const phone = str("phone");
  const country = str("country");
  const state = str("state");
  const city = str("city");
  const shortDescription = str("shortDescription");

  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email.";
  if (!company) errors.company = "Company is required.";
  if (!interestArea) errors.interestArea = "Interest Area (Supplier) is required.";
  if (!productLine) errors.productLine = "Product Line is required.";
  if (!phone) errors.phone = "Phone is required.";
  if (!country) errors.country = "Country is required.";
  if (!state) errors.state = "State is required.";
  if (!city) errors.city = "City is required.";
  if (!shortDescription) errors.shortDescription = "Short Description is required.";

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      name,
      email,
      company,
      interestArea,
      productLine,
      phone,
      country,
      state,
      city,
      shortDescription,
    },
  };
}
