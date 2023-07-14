import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/ulitiles/prisma/db';
import { getServerSession } from 'next-auth';

export const getUserPermissions = async () => {
  const session = await getServerSession(OPTIONS);
  if (!session?.user?.email) {
    return new Error('Session Not Found');
  }
  const userPermissions = await prisma.user.findFirst({
    where: { email: session.user.email },
    include: { permissions: {} },
  });
  console.log(userPermissions?.permissions);
};
