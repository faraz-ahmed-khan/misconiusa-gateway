/**
 * GET /api/subscription
 * Returns the single Subscription Gateway Pack data.
 * Mock data only; no database.
 */

import { NextResponse } from "next/server";
import { SUBSCRIPTION_PACK } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(SUBSCRIPTION_PACK);
}
