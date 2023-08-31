import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { prisma } from '@/ulitiles/prisma/db';
import { redirect } from 'next/navigation';

export default async function page({ id }: { id: string }) {
  const permissionCheck = await getUserPermissions([
    'admin',
    'changeUser',
    'deleteUser',
  ]);
  if (!permissionCheck) {
    return redirect('/unauthorized');
  }

  const user = await prisma.user.findFirst({
    where: { id: id },
    include: { permissions: { include: {} } },
  });

  let perms = user?.permissions;
  let arr = [];
  for (let permition in perms) {
    //@ts-ignore
    arr.push({ [permition]: perms[permition] });
  }

  console.log(arr);
  return (
    <form className="flex flex-1 flex-col items-center justify-center">
      {arr.map((x) => {
        console.log(x[Object.keys(x).toString()]);
        return (
          <div key={Object.keys(x).toString()}>
            <div>{Object.keys(x).toString()}</div>
            <div>{x[Object.keys(x).toString()].toString()}</div>
          </div>
        );
      })}
    </form>
  );
}
