/**
 * Form validation for contact endpoints.
 * Required fields only; no conditional logic.
 */

import type { GeneralContactPayload } from "./types";

export function validateGeneralContact(
  body: unknown
): { valid: true; data: GeneralContactPayload } | { valid: false; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  const obj = body as Record<string, unknown>;

  const name = typeof obj?.name === "string" ? obj.name.trim() : "";
  const email = typeof obj?.email === "string" ? obj.email.trim() : "";
  const message = typeof obj?.message === "string" ? obj.message.trim() : "";
  const company = typeof obj?.company === "string" ? obj.company.trim() : "";
  const interestCategory = typeof obj?.interestCategory === "string" ? obj.interestCategory.trim() : "";

  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email.";
  if (!company) errors.company = "Business/Organization is required.";
  if (!interestCategory) errors.interestCategory = "Interest category is required.";
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
      company,
      interestCategory,
      phone: typeof obj?.phone === "string" ? obj.phone.trim() || undefined : undefined,
    },
  };
}
