import { prisma } from '@/ulitiles/prisma/db';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export const GET = async (request: Request) => {
  const cart = await prisma.order.findFirst();
  if (!cart) {
    return NextResponse.json({ message: 'Known or missing cart' });
  }
  const cartItems = await prisma.orderItem.findMany({
    where: { orderId: { equals: cart!.id } },
  });
  //test
  return NextResponse.json(cartItems);
};

export const dynamic = 'force-dynamic';
