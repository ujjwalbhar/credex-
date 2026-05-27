import { NextResponse } from "next/server";
import { generateAudit } from "@/src/lib/audit-engine";

export async function POST(req: Request) {
  const body = await req.json();
  const result = generateAudit(body);
  return NextResponse.json(result);
}
