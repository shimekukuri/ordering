import { prisma } from '@/ulitiles/prisma/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const users = await prisma.user.findMany();
  //push 4
  return NextResponse.json(users);
};

export const dynamic = 'force-dynamic';
