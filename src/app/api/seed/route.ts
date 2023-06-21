import { prisma } from '@/ulitiles/prisma/db';
import { NextResponse } from 'next/server';

export async function GET() {
  await prisma.item.deleteMany();

  const res = await prisma.item.createMany({
    data: [
      {
        name: 'Spark Watermellon 10.5 0Z',
        description: 'Gives you Energy',
        image:
          'https://m.media-amazon.com/images/I/61ZN2AUSrOL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      },
      {
        name: 'Spark Fruit Punch 10.5 0Z',
        image:
          'https://m.media-amazon.com/images/I/812RSE2FBHL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        description: 'Gives you fruit punch Energy',
      },
    ],
  });

  return NextResponse.json(res);
}
