import { prisma } from '@/ulitiles/prisma/db';
import { NextRequest, NextResponse } from 'next/server';

export interface UpdateCartSuccess {
  message: {
    id: string;
    quantity: number;
    itemId: string;
    orderId: string | null;
  };
  status: string;
}

export interface UpdateCartFailure {
  message: unknown;
  status: string;
}

export async function POST(request: NextRequest, response: NextResponse) {
  const { orderItemId, quantity }: { orderItemId: string; quantity: number } =
    await request.json();

  try {
    const result = await prisma.orderItem.update({
      where: { id: orderItemId },
      data: { quantity: quantity },
    });

    return NextResponse.json({ message: result, status: '200' });
  } catch (e) {
    return NextResponse.json({ message: e, status: '400' });
  }
}

export const dynamic = 'force-dynamic';
