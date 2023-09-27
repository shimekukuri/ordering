import Menu from '@/components/LayoutComponents/menu/Menu';
import MenuCard from '@/components/LayoutComponents/menu/menuCard/MenuCard';
import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function page() {
  const permissionCheck = await getUserPermissions(['acessnet']);
  if (!permissionCheck) {
    return redirect('/unauthorized');
  }

  return (
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
  );

  return (
    <>
      <h1 className="text-3xl text-center p-4">Internal Ordering</h1>
      <div className="w-full flex items-center justify-center">
        <div className="divider w-3/4"></div>
      </div>
      <div className="flex-1 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 content-center">
        <Link
          href={'./internal-ordering/shop'}
          className="aspect-square w-full bg-red-500 rounded-2xl shadow-2xl text-3xl glass text-center flex justify-center items-center"
        >
          Shop
        </Link>
        <Link
          href={'./internal-ordering/createitem'}
          className="aspect-square w-full bg-red-500 rounded-2xl shadow-2xl text-3xl glass text-center flex justify-center items-center"
        >
          Create Item
        </Link>
        <Link
          href={'./internal-ordering/delete-item'}
          className="aspect-square w-full bg-red-500 rounded-2xl shadow-2xl text-3xl glass text-center flex justify-center items-center"
        >
          Delete Item
        </Link>
        <Link
          href={'./internal-ordering/change-item'}
          className="aspect-square w-full bg-red-500 rounded-2xl shadow-2xl text-3xl glass text-center flex justify-center items-center"
        >
          Change Item
        </Link>
      </div>
    </>
  );
}
