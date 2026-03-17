/**
 * POST /api/contact/supplier
 * Supplier Interest Form submission.
 * Validates required fields, returns success message. No redirect.
 * TODO: Replace with real Zoho integration when backend is implemented.
 */

import { NextResponse } from "next/server";
import type { ApiResponse } from "@/lib/types";
import { validateSupplierInterest } from "@/lib/validation";

export async function POST(request: Request): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    const result = validateSupplierInterest(body);

    if (!result.valid) {
      return NextResponse.json(
        { success: false, message: "Validation failed.", errors: result.errors },
        { status: 400 }
      );
    }

    // Simulate sending to Zoho — no real integration
    // await sendToZohoSupplier(result.data);
    void result.data;

    return NextResponse.json({
      success: true,
      message: "Your supplier interest has been received. We will be in touch.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
