import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/ulitiles/prisma/db';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const session = await getServerSession(OPTIONS);
  const cart = await prisma.user.findFirst({
    where: { email: session?.user?.email },
    include: {
      accounts: {
        include: {
          Order: {
            include: {
              items: {
                include: {
                  item: { include: { OrderItem: {} } },
                },
              },
            },
            where: { submited: false },
          },
        },
      },
    },
  });

  const order = cart?.accounts[0].Order[0]?.items;

  if (!order?.[0]) {
    return (
      <div className="p-4 flex-1 flex items-center justify-center text-center flex-col">
        <div className="card w-96 bg-neutral text-neutral-content opacity-0 animate-fade-in-800">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cart Empty</h2>
            <p>Would you like to to go shopping? </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Take me shopping!</button>
              <button className="btn btn-ghost">Home</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      {order?.map((x, i) => {
        return (
          <div key={x.id}>
            <div>{x.item.id}</div>
            <div>{x.item.name}</div>
          </div>
        );
      })}
    </div>
  );
}
