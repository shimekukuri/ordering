import Menu from '@/components/LayoutComponents/menu/Menu';
import MenuCard from '@/components/LayoutComponents/menu/menuCard/MenuCard';
import Breadcrumbs from '@/components/utility/breadcumbs/BreadCrumbs';
import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  let val = await getUserPermissions(['admin', 'acessnet']);

  if (!val) {
    return redirect('/unauthorized');
  }

  return (
    <>
      <Breadcrumbs />
      <Menu title="Adminstration">
        <MenuCard title="User Maintenance" link="admin/user-maintenance" />
        <MenuCard title="IT Tickets" link="admin/it-ticket-open" />
        <MenuCard
          title="Maintenance Tickets"
          link="admin/maintenance-ticket-open"
        />
        <MenuCard
          title="Universal Item Management"
          link="admin/item-management/change-item"
        />
      </Menu>
    </>
  );
}
