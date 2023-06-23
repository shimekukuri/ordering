import { prisma } from '@/ulitiles/prisma/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const cart = await prisma.order.findFirst();
  if (!cart) {
    return NextResponse.json({ message: 'Known or missing cart' });
  }
  const cartItems = await prisma.orderItem.findMany({
    where: { orderId: { equals: cart!.id } },
  });

  return NextResponse.json(cartItems);
};
