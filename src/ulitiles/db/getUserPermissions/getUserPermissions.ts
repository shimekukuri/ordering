import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/ulitiles/prisma/db';
import { Permissions } from '@prisma/client';
import { getServerSession } from 'next-auth';

export const permissions = {
  createItem: 'createItem',
  deleteItem: 'deleteItem',
  deleteUser: 'deleteUser',
  changeUser: 'changeUser',
  viewOrder: 'viewOrder',
  completeOrder: 'completeOrder',
  changeOrder: 'changeOrder',
  acessnet: 'acessnet',
  admin: 'admin',
};

export const getUserPermissions = async (permission: typeof permissions) => {
  const session = await getServerSession(OPTIONS);
  if (!session?.user?.email) {
    return false;
  }

  const userPermissions = await prisma.user.findFirst({
    where: { email: session.user.email },
    include: { permissions: {} },
  });

  //@ts-expect-error
  return userPermissions?.permissions[permission];
};
