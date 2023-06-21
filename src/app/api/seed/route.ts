import { prisma } from '@/ulitiles/prisma/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await prisma.item.createMany({
    data: [
      {
        name: 'Spark Watermellon 10.5 0Z',
        description: 'Gives you Energy',
        image:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FAdvoCare-Flavors-Canister-Pouches-Watermelon%2Fdp%2FB00TUBAVO0&psig=AOvVaw3U-qWP7vo4gQBbKZAu2sFJ&ust=1687449141328000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjE_Ibc1P8CFQAAAAAdAAAAABAE',
      },
      {
        name: 'Spark Fruit Punch 10.5 0Z',
        image:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FAdvoCare-Spark-Canister-Fruit-Punch%2Fdp%2FB0038NEQHO&psig=AOvVaw3U-qWP7vo4gQBbKZAu2sFJ&ust=1687449141328000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjE_Ibc1P8CFQAAAAAdAAAAABAJ',
        description: 'Gives you fruit punch Energy',
      },
    ],
  });

  return NextResponse.json(res);
}
