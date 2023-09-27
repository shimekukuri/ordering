import Menu from '@/components/LayoutComponents/menu/Menu';
import MenuCard from '@/components/LayoutComponents/menu/menuCard/MenuCard';
import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { redirect } from 'next/navigation';

export default async function page() {
  const permissionCheck = await getUserPermissions(['acessnet']);

  if (!permissionCheck) {
    return redirect('/unauthorized');
  }

  return (
    <Menu title="Access Net">
      <MenuCard
        title="Order For Your Store"
        link="./accessnet/internal-ordering"
        className="bg-red-200"
      />
      <MenuCard
        title="Administration"
        link="./accessnet/admin"
        className="bg-blue-200"
      />
      <MenuCard
        title="New IT Ticket"
        link="./accessnet/it-ticket/new-ticket"
        className="bg-yellow-200"
      />
      <MenuCard
        title="New Maintenance Ticket"
        link="./accessnet/maintenance-ticket/new-ticket"
        className="bg-green-200"
      />
    </Menu>
  );
}
