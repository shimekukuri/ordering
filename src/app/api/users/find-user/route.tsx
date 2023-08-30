import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { prisma } from '@/ulitiles/prisma/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const items = await prisma.item.findMany();

  return NextResponse.json(items);
}

export async function POST(request: NextRequest, response: NextResponse) {
  let permCheck = await getUserPermissions([
    'admin',
    'acessnet',
    'changeUser',
    'deleteUser',
  ]);
  if (!permCheck) {
    NextResponse.json({ message: 'NAHAHAHAHA_NOPE' });
    return;
  } else {
    const body = await request.json();
    const { user } = body;

    if (user === undefined) {
      return NextResponse.json({ message: 'Bad Request', status: 400 });
    }

    let found = await prisma.user.findFirst({
      where: { email: user },
    });

    return NextResponse.json({ found });
  }
}

export const dynamic = 'force-dynamic';
