import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/ulitiles/prisma/db';
import { getServerSession } from 'next-auth';

const addToCart = async (data: FormData) => {
  'use server';
  const id = data.get('id') as string;
  if (!id) {
    return;
  }

  const session = await getServerSession(OPTIONS);
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
    (await prisma.order.findFirst({
      where: { accountId: account?.id, submited: false },
    })) ??
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

export default async function Page({ params }: { params: { id: string } }) {
  const item = await prisma.item.findUnique({ where: { id: params.id } });
  const session = await getServerSession(OPTIONS);

  return (
    <>
      <div className="flex items-center justify-center flex-col md:flex-row max-w-[100vw] p-4 gap-4">
        <img
          src={item?.image}
          alt={item?.description}
          loading="lazy"
          className="rounded-2xl shadow-2xl w-[90%] md:w-auto md:max-w-3xl md:max-h-96"
        />
        <div className="flex flex-col gap-4">
          <div className="card-title justify-center">{item?.name}</div>
          <div className="text-center">{item?.price}</div>
          {!item?.department ? <div>{item?.department}</div> : ''}
          <div className="flex gap-4 w-56 flex-wrap justify-center">
            {item?.tags.map((x, i) => {
              return (
                <div className="badge badge-primary" key={x + i}>
                  {x}
                </div>
              );
            })}
          </div>
          <form action={addToCart} className="flex items-center justify-center">
            <input
              className="hidden"
              type={'text'}
              name="id"
              defaultValue={item?.id}
            />
            <button
              type="submit"
              className={`btn ${
                session ? 'btn-primary' : 'btn-disabled'
              } active:animate-none focus:animate-cart-confirm-200`}
            >
              Add To Cart
            </button>
          </form>
        </div>
      </div>
      <div className="p-4 flex justify-center items-center">
        <div className="bg-red-200 rounded-2xl shadow-2xl flex-1 p-4 flex justify-between items-center max-w-4xl">
          <div>{item?.description}</div>
        </div>
      </div>
      <div className="p-4 flex justify-center items-center">
        <div className="bg-blue-200 rounded-2xl shadow-2xl flex-1 p-4 flex justify-between items-center max-w-4xl">
          <div>{item?.description}</div>
        </div>
      </div>
      <div className="p-4 flex justify-center items-center">
        <div className="bg-yellow-200 rounded-2xl shadow-2xl flex-1 p-4 flex justify-between items-center max-w-4xl">
          <div>{item?.description}</div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  let params = await prisma.item.findMany();

  return params.map((item) => ({ id: item.id }));
}
