import { EncryptionService } from "@/ulitiles/encyption/EncyptionService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  let encrypt = new EncryptionService("ENCRYPTION_PASSPHRASE");
}

export async function POST(request: NextRequest, response: NextResponse) {
  const body = request.body;

  return NextResponse.json({ message: "Items Route" });
}

export const dynamic = "force-dynamic";
