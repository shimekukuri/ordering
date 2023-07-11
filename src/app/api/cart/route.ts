import { prisma } from '@/ulitiles/prisma/db';
import { getServerSession } from 'next-auth';

import { NextRequest, NextResponse } from 'next/server';
import { OPTIONS } from '../auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(OPTIONS);
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

  if (!id) {
    return NextResponse.json({ message: 'Uknown or Missing ID' });
  }

  const order = await prisma.order.findFirst({
    where: { accountId: id.id, submited: false },
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

export async function POST(request: NextRequest, response: NextResponse) {
  const session = await getServerSession(OPTIONS);

  const { orderItemId, quantity } = await request.json();
  //@ts-ignore
  const updatedItem = await prisma.orderItem.update({
    where: { id: orderItemId },
    data: { quantity: quantity },
  });

  return NextResponse.json({ message: { updatedItem } });
}

export const dynamic = 'force-dynamic';
