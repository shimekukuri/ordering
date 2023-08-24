import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/ulitiles/prisma/db';
import { getServerSession } from 'next-auth';

export const getUserPermissions = async () => {
  console.log('holo');
  const session = await getServerSession(OPTIONS);
  console.log('session', session);
  if (!session?.user?.email) {
    return new Error('Session Not Found');
  }
  console.log('meep');
  const userPermissions = await prisma.user.findFirst({
    where: { email: session.user.email },
    include: { permissions: {} },
  });
  console.log('user permissions', '=>', userPermissions);
};
