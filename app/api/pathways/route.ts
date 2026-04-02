/**
 * GET /api/pathways
 * Returns all six readiness pathways.
 * Mock data only; no database.
 */

import { NextResponse } from "next/server";
import { PATHWAYS } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ pathways: PATHWAYS });
}
