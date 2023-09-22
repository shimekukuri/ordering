import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { redirect } from 'next/navigation';
import MenuCard from './menuCard/MenuCard';

export default async function Menu({
  props: { title },
}: {
  props: { title: string };
}) {
  const permissionCheck = await getUserPermissions(['acessnet']);
  if (!permissionCheck) {
    return redirect('/unauthorized');
  }

  return (
    <>
      <h1 className="text-3xl text-center p-4">{title}</h1>
      <div className="w-full flex items-center justify-center">
        <div className="divider w-3/4"></div>
      </div>
      <div className="flex-1 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        <MenuCard title="Shop" link="./internal-order/shop">
          <div>Meep</div>
        </MenuCard>

        <MenuCard title="Create Item" link="./internal-ordering/createitem">
          <div>Meep</div>
        </MenuCard>

        <MenuCard title="Delete Item" link="./internal-ordering/delete-item">
          <div>Meep</div>
        </MenuCard>

        <MenuCard title="Change Item" link="./internal-ordering/change-item">
          <div>Meep</div>
        </MenuCard>
      </div>
    </>
  );
}
