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
      {
        name: 'snacks',
        description: 'PUT IT IN YOUR FACE HOLE',
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
        tags: ['spark', 'watermellon', 'energy', '10.5', 'OZ'],
      },
      {
        name: 'Spark Fruit Punch 10.5 0Z',
        image:
          'https://m.media-amazon.com/images/I/812RSE2FBHL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        description: 'Gives you fruit punch Energy',
        categoryId: 'specialty',
        tags: ['spark', 'fruit', 'fruit punch', 'energy', '10.5', 'OZ'],
      },
      {
        name: 'Red Bull',
        description: 'Gives you wings!',
        image: 'https://m.media-amazon.com/images/I/51lJaotT9PL._SL1000_.jpg',
        categoryId: 'drinks',
        tags: ['red', 'bull', 'energy', 'drink'],
      },
      {
        name: 'Red Bull Tropical',
        description: 'Gives you tropical wings!',
        image: 'https://m.media-amazon.com/images/I/51SRGpgFL0L._SY879_.jpg',
        categoryId: 'drinks',
        tags: ['red', 'bull', 'energy', 'drink', 'tropical'],
      },
      {
        name: 'Biolyte Mixed Pack',
        description: 'MEGA HYDRAAAAATION',
        image:
          'https://m.media-amazon.com/images/I/51QUIvVQd9L._SX300_SY300_QL70_FMwebp_.jpg',
        categoryId: 'drinks',
        tags: ['biolyte', 'mixed', 'pack', 'hydration'],
      },
      {
        name: 'Coke Zero Sugar',
        description:
          'Just like coke, just without the thing that makes it good',
        image:
          'https://m.media-amazon.com/images/I/71XuArFYdvL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg',
        categoryId: 'drinks',
        tags: ['coke', 'zero', 'sugar', 'drinks', 'soda', 'cola'],
      },
      {
        name: 'Assorted Pringles',
        description: 'Pringles that are sorted',
        image:
          'https://m.media-amazon.com/images/I/91eqI6SxrpL._SX679_PIbundle-60,TopRight,0,0_SX679SY509SH20_.jpg',
        categoryId: 'snacks',
        tags: ['chips', 'assorted', 'pringles', 'snack', 'pack'],
      },
      {
        name: 'Assorted Skinny Pop',
        description: 'The superior form of bagged popcorn',
        image:
          'https://m.media-amazon.com/images/I/91trs-s3C5L._AC_UL800_FMwebp_QL65_.jpg',
        categoryId: 'snacks',
        tags: ['chips', 'popcorn', 'assorted', 'skinny', 'pop', 'bag'],
      },
      {
        name: 'Gold Fish Packs',
        description: 'The snack that fights back...',
        image:
          'https://m.media-amazon.com/images/I/51ieFoeg-rL._SX300_SY300_QL70_FMwebp_.jpg',
        categoryId: 'snacks',
        tags: ['gold', 'fish', 'snack', 'pack', 'assorted', 'cheese'],
      },
      {
        name: 'Cheese It Packs',
        description: 'Its cheese',
        image:
          'https://m.media-amazon.com/images/I/41dviaIX8KL._SX300_SY300_QL70_FMwebp_.jpg',
        categoryId: 'snacks',
        tags: ['cheese', 'it', 'snack', 'pack'],
      },
      {
        name: 'Assorted Lays',
        description:
          'They barely have flavor but hey they are still pretty good',
        image:
          'https://m.media-amazon.com/images/I/81mABE1sNhL._SX679_PIbundle-40,TopRight,0,0_AA679SH20_.jpg',
        categoryId: 'snacks',
        tags: ['assorted', 'lays', 'chips', 'snack', 'bag'],
      },
    ],
  });

  return NextResponse.json(res);
}

export const dynamic = 'force-dynamic';
