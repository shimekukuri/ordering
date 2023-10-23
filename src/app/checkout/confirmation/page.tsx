import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/ulitiles/prisma/db";
import { getServerSession } from "next-auth";

export default async function Page() {
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
      <div className="col-span-3 bg-red-50">d</div>
      <div></div>
    </div>
  );
}
