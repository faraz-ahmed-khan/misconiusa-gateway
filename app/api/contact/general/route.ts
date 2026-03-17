/**
 * POST /api/contact/general
 * General Contact Form submission.
 * Validates required fields, returns success message. No redirect.
 * TODO: Replace with real Zoho integration when backend is implemented.
 */

import { NextResponse } from "next/server";
import type { ApiResponse } from "@/lib/types";
import { validateGeneralContact } from "@/lib/validation";

export async function POST(request: Request): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    const result = validateGeneralContact(body);

    if (!result.valid) {
      return NextResponse.json(
        { success: false, message: "Validation failed.", errors: result.errors },
        { status: 400 }
      );
    }

    // Simulate sending to Zoho — no real integration
    // await sendToZohoGeneral(result.data);
    void result.data;

    return NextResponse.json({
      success: true,
      message: "Your message has been received. We will respond as soon as possible.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
