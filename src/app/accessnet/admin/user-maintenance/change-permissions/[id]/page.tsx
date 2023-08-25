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

  return <div>USer</div>;
}
