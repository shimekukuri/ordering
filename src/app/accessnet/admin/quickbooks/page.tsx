import { getUserPermissions } from "@/ulitiles/db/getUserPermissions/getUserPermissions";
import { redirect } from "next/navigation";

export default async function Page() {
  
const permissionCheck = await getUserPermissions(['admin', 'acessnet', 'changeUser']);
  if (!permissionCheck) {
    return redirect("/");
  };

  return <div>Base Quickbooks page</div>
}
