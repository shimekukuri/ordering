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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
        <div className="text-7xl">Cart Empty</div>
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
