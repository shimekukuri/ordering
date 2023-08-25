import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/ulitiles/prisma/db';
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

export const getUserPermissions = async (permission: perms[]) => {
  const session = await getServerSession(OPTIONS);
  if (!session?.user?.email) {
    return false;
  }

  let userPermissions = await prisma.user.findFirst({
    where: { email: session.user.email },
  });

  if (!userPermissions?.permissionsId ?? false) {
    await prisma.user.update({
      where: { email: session.user.email },
      data: { permissionsId: 'cljylywen0006pmxa260pksr3' },
    });
  }

  userPermissions = await prisma.user.findFirst({
    where: { email: session.user.email },
    include: { permissions: {} },
  });

  for (let val of permission) {
    //@ts-expect-error
    if (!userPermissions?.permissions[val] ?? false) {
      return false;
    }
  }

  return true;
};
