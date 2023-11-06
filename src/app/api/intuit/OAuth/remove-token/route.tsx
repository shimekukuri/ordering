import { prisma } from "@/ulitiles/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await prisma.quickbookToken.deleteMany(); 
  return NextResponse.json({});
}

export async function POST(request: NextRequest, response: NextResponse) {
  const body = request.body;

  return NextResponse.json({ message: "Items Route" });
}

export const dynamic = "force-dynamic";
