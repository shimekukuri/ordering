import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/ulitiles/prisma/db';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const session = await getServerSession(OPTIONS);
  const cart = await prisma.user.findFirst({
    where: { email: session?.user?.email },
    include: { accounts: { include: { Order: { include: { items: {} } } } } },
  });

  const order = cart?.accounts[0].Order[0].items;
  console.log(cart);

  return (
    <div>
      {order?.map((x, i) => {
        return <div key={x.id}>{x.id}</div>;
      })}
    </div>
  );
}
