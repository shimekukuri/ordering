import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';

export default async function AdminPage() {
  await getUserPermissions();

  return <div>Admin page</div>;
}
