import { getServerSession, Session } from 'next-auth';
import { prisma } from '@/ulitiles/prisma/db';
import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';

const getCart = async (session: Session | null) => {
  if (!session) {
    return [];
  }
  const cartData = await prisma.user.findFirst({
    where: { email: session?.user?.email },
    include: {
      accounts: {
        include: {
          Order: { where: { submited: false }, include: { items: {} } },
        },
      },
    },
  });
  return cartData?.accounts[0]?.Order[0]?.items ?? [];
};

export default async function CartCount() {
  const session = await getServerSession(OPTIONS);
  const cartData = await getCart(session);
  const cartQuantity = cartData.reduce((t, c) => {
    return (t += c.quantity);
  }, 0);

  return (
    <div className="card-body">
      <span className="font-bold text-lg">{cartQuantity} Items</span>
      <span className="text-info">Subtotal: $0</span>
      <div className="card-actions">
        <Link href={'/cart'}>
          <button className="btn btn-primary btn-block">View cart</button>
        </Link>
      </div>
    </div>
  );
}
