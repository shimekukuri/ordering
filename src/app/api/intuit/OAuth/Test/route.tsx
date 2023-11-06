import { EncryptionService } from "@/ulitiles/encyption/EncyptionService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  let encrypt = new EncryptionService("ENCRYPTION_PASSPHRASE");
  let encrypted = encrypt.encrypt("Hello World");
  let decrypted = encrypt.decrypt(encrypted);
  return NextResponse.json({encrypted: encrypted, decrypted: decrypted});
}

export async function POST(request: NextRequest, response: NextResponse) {
  const body = request.body;

  return NextResponse.json({ message: "Items Route" });
}

export const dynamic = "force-dynamic";
