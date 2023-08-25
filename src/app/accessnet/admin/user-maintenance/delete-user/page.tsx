import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { redirect } from 'next/navigation';

export default async function page() {
  if (
    !(await getUserPermissions([
      'admin',
      'acessnet',
      'changeUser',
      'deleteUser',
    ]))
  ) {
    return redirect('/unauthorized');
  }

  return (
    <div className="w-screen min-h-screen max-w-[100vw] flex justify-center items-center">
      Delete User
    </div>
  );
}
