/**
 * POST /api/contact/supplier
 * Supplier Interest Form submission.
 * Validates required fields, returns success message. No redirect.
 * TODO: Replace with real Zoho integration when backend is implemented.
 */

import { NextResponse } from "next/server";
import type { ApiResponse } from "@/lib/types";
import { validateSupplierInterest } from "@/lib/validation";
import { zohoFetch } from "@/lib/zoho";

function splitName(fullName: string) {
  const cleaned = fullName.trim().replace(/\s+/g, " ");
  if (!cleaned) {
    return { firstName: "", lastName: "" };
  }

  const parts = cleaned.split(" ");
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" ") || "",
  };
}

export async function POST(request: Request): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    const result = validateSupplierInterest(body);
    console.log("Validation result:", result);
    
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
    const formLinkName = process.env.ZOHO_SUPPLIER_FORM_LINK_NAME!;

    const { firstName, lastName } = splitName(result.data.name);

    const zohoPayload = {
      data: [
        {
          // Replace these keys if your Zoho field link names are different
          Name: {
            first_name: firstName,
            last_name: lastName,
          },
          Email: result.data.email,
          Company: result.data.company,
          Interest_Area_Supplier: result.data.interestArea,
          Product_Line: result.data.productLine,
          Phone_Number: result.data.phone,
          Country: result.data.country,
          State: result.data.state,
          City: result.data.city,
          Short_Description: result.data.shortDescription,
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
      message: "Your supplier interest has been received. We will be in touch.",
    });
  } catch (error) {
    console.error("Supplier submit error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
