import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/ulitiles/prisma/db';
import { getServerSession } from 'next-auth';

export enum permissions {
  createItem,
  deleteItem,
  deleteUser,
  changeUser,
  viewOrder,
  completeOrder,
  changeOrder,
  acessnet,
  admin,
}

export const getUserPermissions = async (permission: permissions) => {
  const session = await getServerSession(OPTIONS);
  console.log('session', session);
  if (!session?.user?.email) {
    return false;
  }

  const userPermissions = await prisma.user.findFirst({
    where: { email: session.user.email },
    include: { permissions: {} },
  });

  //@ts-expect-error
  return userPermissions?.permissions[permissions];
  console.log('user permissions', '=>', userPermissions);
};
