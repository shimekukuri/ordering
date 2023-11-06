import Menu from '@/components/LayoutComponents/menu/Menu';
import MenuCard from '@/components/LayoutComponents/menu/menuCard/MenuCard';
import Breadcrumbs from '@/components/utility/breadcumbs/BreadCrumbs';
import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { redirect } from 'next/navigation';

export default async function page() {
  const permissionCheck = await getUserPermissions(['acessnet']);
  if (!permissionCheck) {
    return redirect('/unauthorized');
  }

  return (
    <>
      <Breadcrumbs />
      <Menu title="Internal Ordering">
        <MenuCard
          title="Shop"
          link="./internal-ordering/shop"
          className="bg-red-200"
        />
        <MenuCard
          title="Create Item"
          link="./internal-ordering/createitem"
          className="bg-blue-200"
        />
        <MenuCard
          title="Delete Item"
          link="./internal-ordering/delete-item"
          className="bg-yellow-200"
        />
        <MenuCard
          title="Change Item"
          link="./internal-ordering/change-item"
          className="bg-green-200"
        />
      </Menu>
    </>
  );
}
