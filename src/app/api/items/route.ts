import { prisma } from '@/ulitiles/prisma/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const items = await prisma.item.findMany();

  return NextResponse.json(items);
}

export const dynamic = 'force-dynamic';
