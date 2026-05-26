/**
 * POST /api/contact/general
 * General Contact Form submission.
 * Validates required fields, returns success message. No redirect.
 * TODO: Replace with real Zoho integration when backend is implemented.
 */

import { NextResponse } from "next/server";
import { zohoFetch } from "@/lib/zoho";
import type { ApiResponse } from "@/lib/types";
import { validateGeneralContact } from "@/lib/validation";

function splitName(fullName: string) {
  const cleaned = fullName.trim().replace(/\s+/g, " ");
  if (!cleaned) {
    return { firstName: "", lastName: "" };
  }

  const parts = cleaned.split(" ");
  const firstName = parts[0] || "";
  const lastName = parts.slice(1).join(" ") || "";

  return { firstName, lastName };
}

export async function POST(request: Request): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    const result = validateGeneralContact(body);

    if (!result.valid) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: result.errors,
        },
        { status: 400 }
      );
    }

    const ownerName = process.env.ZOHO_OWNER_NAME!;
    const appLinkName = process.env.ZOHO_APP_LINK_NAME!;
    const formLinkName = process.env.ZOHO_GENERAL_FORM_LINK_NAME!;

    const { firstName, lastName } = splitName(result.data.name);

    const zohoPayload = {
      data: [
        {
          // Adjust these field link names if your Zoho form uses different ones
          Name: {
            first_name: firstName,
            last_name: lastName,
          },
          Email: result.data.email,
          Phone_Number: result.data.phone || "",
          Company: result.data.company || "",
          Message: result.data.message,
        },
      ],
    };

    const zohoRes = await zohoFetch(
      `/creator/v2.1/data/${ownerName}/${appLinkName}/form/${formLinkName}`,
      {
        method: "POST",
        body: JSON.stringify(zohoPayload),
      }
    );

    const zohoData = await zohoRes.json();

    if (!zohoRes.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Zoho submit failed.",
          details: zohoData,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been received. We will respond as soon as possible.",
    });
  } catch (error) {
    console.error("General contact submit error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "An error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}