import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import { getUserPermissions } from "@/ulitiles/db/getUserPermissions/getUserPermissions";
import { prisma } from "@/ulitiles/prisma/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const permissionCheck = await getUserPermissions([]);
  if (!permissionCheck) {
    return  redirect("/");
  }

  const session = await getServerSession(OPTIONS);
  const order = await prisma.user.findFirst({
    where: { email: session?.user?.email },
    include: {
      accounts: {
        include: {
          Order: {
            where: { submited: false },
            include: { items: { include: { item: {} } } },
          },
        },
      },
    },
  });

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      <div className="col-span-3 bg-red-50">
        <div></div>
        <div>{order?.accounts[0].Order[0].items.map((x, i) => {


          return <div key={x.id + i}>d</div>
          })}</div>
      </div>
      <div></div>
    </div>
  );
}
