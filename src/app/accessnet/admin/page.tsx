import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  let val = await getUserPermissions('admin');

  if (!val) {
    redirect('/unauthorized');
    return;
  }

  return <div>Admin page</div>;
}
