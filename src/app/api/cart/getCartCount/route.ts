import { getServerSession } from 'next-auth';
import { options } from '../../auth/[...nextauth]/route';
import { prisma } from '@/ulitiles/prisma/db';

export async function GET() {
  const session = await getServerSession(options);
  if (!session) {
    return [];
  }
  const userData = await prisma.user.findFirst({
    where: { email: session?.user?.email },
    include: { accounts: { include: { Order: { include: { items: {} } } } } },
  });
  return userData?.accounts[0]?.Order[0]?.items ?? [];
}
