import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  let val = await getUserPermissions(['admin', 'acessnet']);

  if (!val) {
    return redirect('/unauthorized');
  }

  return <div>Admin page</div>;
}
