import { prisma } from '@/ulitiles/prisma/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const id = await prisma.order.findFirst();
  console.log(id);
  if (!id) {
    return NextResponse.json({ message: 'Uknown or Missing ID' });
  }

  const orderItems = await prisma.orderItem.findMany({
    where: { orderId: { contains: id.id } },
  });

  return NextResponse.json(orderItems);
}

export const dynamic = 'force-dynamic';
