import { prisma } from '@/ulitiles/prisma/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const category = await prisma.category.createMany({
    data: [
      {
        name: 'drinks',
        description: 'Any liquid that goes into your mouth for pleasure',
      },
      {
        name: 'specialty',
        description: 'Anything that doesnt fit neatly',
      },
    ],
  });

  const res = await prisma.item.createMany({
    data: [
      {
        name: 'Spark Watermellon 10.5 0Z',
        description: 'Gives you Energy',
        image:
          'https://m.media-amazon.com/images/I/61ZN2AUSrOL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        categoryId: 'drinks',
      },
      {
        name: 'Spark Fruit Punch 10.5 0Z',
        image:
          'https://m.media-amazon.com/images/I/812RSE2FBHL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        description: 'Gives you fruit punch Energy',
        categoryId: 'specialty',
      },
      {
        name: 'Red Bull',
        description: 'Gives you wings!',
        image: 'https://m.media-amazon.com/images/I/51lJaotT9PL._SL1000_.jpg',
        categoryId: 'drinks',
      },
    ],
  });

  return NextResponse.json(res);
}

export const dynamic = 'force-dynamic';
