/**
 * GET /api/opportunities
 * Returns three opportunity card objects and minimal opportunity lists per lane.
 * Mock data only; no database.
 */

import { NextResponse } from "next/server";
import {
  OPPORTUNITY_CARDS,
  CUSTOMER_OPPORTUNITIES,
  PRODUCT_OPPORTUNITIES,
  SUPPLIER_OPPORTUNITIES,
} from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    cards: OPPORTUNITY_CARDS,
    customer: CUSTOMER_OPPORTUNITIES,
    product: PRODUCT_OPPORTUNITIES,
    supplier: SUPPLIER_OPPORTUNITIES,
  });
}
