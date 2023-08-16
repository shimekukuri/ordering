import { prisma } from '@/ulitiles/prisma/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const items = await prisma.item.findMany();

  return NextResponse.json(items);
}

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();
  const { tags } = body;

  if (!tags) {
    return NextResponse.json({ message: 'Bad Request', status: 400 });
  }

  return NextResponse.json({ message: 'Items Route' });
}

export const dynamic = 'force-dynamic';
