import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/ulitiles/prisma/db';
import { Permissions } from '@prisma/client';
import { getServerSession } from 'next-auth';

type perms =
  | 'createItem'
  | 'deleteItem'
  | 'deleteUser'
  | 'changeUser'
  | 'viewOrder'
  | 'completeOrder'
  | 'changeOrder'
  | 'acessnet'
  | 'admin';

export const getUserPermissions = async (permission: perms) => {
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
