import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function page() {
  const permissionCheck = await getUserPermissions(['acessnet']);

  if (!permissionCheck) {
    return redirect('/unauthorized');
  }

  return (
    <div className="flex-1 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      <Link
        href={'./accessnet/internal-ordering'}
        className="aspect-square w-full bg-red-500 rounded-2xl shadow-2xl text-3xl glass text-center flex justify-center items-center"
      >
        Order For Your Store
      </Link>
      <Link
        href={'./accessnet/admin'}
        className="aspect-square w-full bg-red-500 rounded-2xl shadow-2xl text-3xl glass text-center flex justify-center items-center"
      >
        Administration
      </Link>
      <Link
        href={'./accessnet/it-ticket/new-ticket'}
        className="aspect-square w-full bg-red-500 rounded-2xl shadow-2xl text-3xl glass text-center flex justify-center items-center"
      >
        New IT Ticket
      </Link>
      <Link
        href={'./accessnet/maintenance-ticket/new-ticket'}
        className="aspect-square w-full bg-red-500 rounded-2xl shadow-2xl text-3xl glass text-center flex justify-center items-center"
      >
        New Maintenance Ticket
      </Link>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div></div>
    </div>
  );
}
