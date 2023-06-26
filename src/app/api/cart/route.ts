import { prisma } from '@/ulitiles/prisma/db';
import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '../auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(options);
  if (!session || !session?.user?.email) {
    return NextResponse.json({ message: 'No valid session' });
  }

  const user = await prisma.user.findFirst({
    where: { email: session?.user?.email },
  });
  if (!user || !user.id) {
    return NextResponse.json({ message: 'No valid User' });
  }

  const id = await prisma.account.findFirst({ where: { userId: user.id } });
  console.log(id);
  if (!id) {
    return NextResponse.json({ message: 'Uknown or Missing ID' });
  }

  const order = await prisma.order.findFirst({
    where: { accountId: id.id },
  });
  if (!order) {
    return NextResponse.json({ message: 'Uknown Order' });
  }

  const orderItems = await prisma.orderItem.findMany({
    where: { orderId: { equals: order.id } },
    include: { item: {} },
  });

  return NextResponse.json(orderItems);
}

export async function POST() {
  const session = await getServerSession();
}

export const dynamic = 'force-dynamic';
