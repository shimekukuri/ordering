import { options } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/ulitiles/prisma/db';
import { getServerSession } from 'next-auth';

interface ProductCardInterface {
  name: string;
  image: string;
  description: string;
  categoryId: string;
  id: string;
}

const addToCart = async (data: FormData) => {
  'use server';
  const id = data.get('id') as string;
  if (!id) {
    return;
  }

  const session = await getServerSession(options);
  if (!session) {
    return;
  }
  const user = await prisma.user.findFirst({
    where: { email: { equals: session.user?.email } },
  });
  const account = await prisma.account.findFirst({
    where: { userId: { equals: user?.id } },
  });

  const cart =
    (await prisma.order.findFirst({ where: { accountId: account?.id } })) ??
    (await prisma.order.create({
      data: {
        items: { create: { quantity: 1, itemId: id } },
        accountId: account?.id as string,
      },
    }));

  const cartItems = await prisma.orderItem.findMany({
    where: { orderId: { equals: cart.id }, itemId: { equals: id } },
  });

  if (cartItems.length === 0) {
    await prisma.orderItem.create({
      data: { quantity: 1, itemId: id, orderId: cart.id },
    });
  } else {
    await prisma.orderItem.update({
      where: { id: cartItems[0].id },
      data: { quantity: { increment: 1 } },
    });
  }

  prisma.orderItem.update({ where: { id }, data: {} });
};

export default async function ProductCard({
  name,
  image,
  description,
  categoryId,
  id,
}: ProductCardInterface) {
  const session = await getServerSession(options);

  return (
    <div className="card w-96 bg-base-100 shadow-xl p-4">
      <figure>
        <img src={image} alt="Shoes" className="h-40" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between items-center">
          <div className="badge badge-secondary">{categoryId}</div>
          <form action={addToCart}>
            <input
              className="hidden"
              type={'text'}
              name="id"
              defaultValue={id}
            />
            <button
              type="submit"
              className={`btn ${session ? 'btn-primary' : 'btn-disabled'}`}
            >
              Add To Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
