import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { prisma } from '@/ulitiles/prisma/db';
import { redirect } from 'next/navigation';

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log(id);
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

  console.log(user?.permissions);

  let perms = user?.permissions;
  let arr = [];
  for (let permition in perms) {
    //@ts-ignore
    arr.push({ [permition]: perms[permition] });
  }

  console.log(arr);
  return (
    <form className="flex flex-1 flex-col items-center justify-center">
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-slate-200 rounded-2xl shadow-2xl p-4">
          {arr.map((x) => {
            console.log(x[Object.keys(x).toString()]);
            return (
              <>
                <div
                  key={Object.keys(x).toString()}
                  className="flex justify-between w-72"
                >
                  <div>{Object.keys(x).toString()}</div>
                  <select
                    defaultValue={x[Object.keys(x).toString()].toString()}
                  >
                    <option value={'true'}>True</option>
                    <option value={'false'}>False</option>
                  </select>
                  <div>{x[Object.keys(x).toString()].toString()}</div>
                </div>
                <div className="divider "></div>
              </>
            );
          })}
          <div className="flex items-center justify-center w-full">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
