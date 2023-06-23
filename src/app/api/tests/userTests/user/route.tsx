import { prisma } from '@/ulitiles/prisma/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const users = await prisma.user.findMany();
  //push 3
  return NextResponse.json(users);
};
