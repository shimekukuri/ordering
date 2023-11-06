import FuzzyUserSearch from '@/components/accessnet/admin/user-maintenance/delete-user/FuzzyUserSearch';
import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { redirect } from 'next/navigation';

export default async function page() {
  const permissionCheck = await getUserPermissions([
    'admin',
    'changeUser',
    'deleteUser',
  ]);
  if (!permissionCheck) {
    return redirect('/unauthorized');
  }

  return (
    <div className="w-screen flex justify-center items-center min-h-screen max-w-[100vw]">
      <form className="h-1/2 bg-red-50 "></form>
      <FuzzyUserSearch />
    </div>
  );
}
