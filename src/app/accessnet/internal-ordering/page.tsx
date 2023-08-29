import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function page() {
  const permissionCheck = await getUserPermissions(['acessnet']);
  if (!permissionCheck) {
    return redirect('/unauthorized');
  }

  return (
    <>
      <h1 className="text-3xl text-center p-4">Internal Ordering</h1>
      <div className="w-full flex items-center justify-center">
        <div className="divider w-3/4"></div>
      </div>
      <div className="flex-1 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
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
        <div>test</div>
        <div>test</div>
      </div>
    </>
  );
}
