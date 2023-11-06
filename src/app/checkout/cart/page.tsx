import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import CartCard from "@/components/checkout/cart/CartCard/CartCard";
import Breadcrumbs from "@/components/utility/breadcumbs/BreadCrumbs";
import { getUserPermissions } from "@/ulitiles/db/getUserPermissions/getUserPermissions";
import { prisma } from "@/ulitiles/prisma/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const permissionCheck = await getUserPermissions([]);
  if (!permissionCheck) {
    return redirect("/");
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

  const total = () => {
    const totalInt = order?.accounts[0].Order[0].items.reduce(
      (total: any, current) => {
        return (total +=
          current.quantity * Number.parseInt(current.item.price));
      },
      0,
    );

    return `$${`${totalInt}`.slice(totalInt.length - 3)}.${`${totalInt}`.slice(
      -2,
    )}`;
  };

  console.log(order?.accounts[0].Order[0].items);

  if (!order) {
    return (
      <div className="p-4 flex-1 flex items-center justify-center text-center flex-col">
        <div className="card w-96 bg-neutral text-neutral-content opacity-0 animate-fade-in-800">
          <div className="card-body items-center text-center p-4">
            <h2 className="card-title">Cart Empty</h2>
            <p>Would you like to to go shopping? </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Take me shopping!</button>
              <button className="btn btn-ghost">Home</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs />
      <div className="fixed bottom-5 right-0 lg:right-5 join p-4 z-10">
        <div className="join-item bg-slate-200 flex justify-center items-center h-12 px-12">
          Total: {total()}
        </div>
        <button className="join-item btn btn-primary h-12">Checkout</button>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {order?.accounts[0].Order[0].items.map((x, _i) => {
          return (
            <CartCard
              id={x.id}
              name={x.item.name}
              price={x.item.price}
              key={x.item.id}
              quantity={x.quantity.toString()}
              item_image={x.item.image}
              description={x.item.description}
            />
          );
        })}
      </div>
    </>
  );
}
