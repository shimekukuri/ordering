import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import Breadcrumbs from "@/components/utility/breadcumbs/BreadCrumbs";
import { prisma } from "@/ulitiles/prisma/db";
import { getServerSession } from "next-auth";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: "700" });

const submitCard = async () => {
  'use server';
}

export default async function Page() {
  let session = await getServerSession(OPTIONS);
  let usr = await prisma.user.findFirst({
    where: { email: session?.user?.email },
  });

  return (
    <>
      <Breadcrumbs />
      <form
        className={`lg:flex-1 flex justify-center lg:items-center max-w-[100vw] p-4 ${oswald.className}`}
      >
        <div className="flex flex-col bg-sky-200 rounded-3xl shadow-2xl max-w-xl w-full">
          <div className="flex justify-center translate-y-5 h-16 ">
            <h1 className="p-12 text-6xl flex justify-center items-center bg-blue-300 shadow-2xl rounded-2xl">
              Payment
            </h1>
          </div>
          <div className="flex flex-col bg-sky-50 rounded-t-3xl rounded-b-3xl p-4 gap-4">
            <div className="h-16"></div>
            <label htmlFor="card_number">Card Number:</label>
            <input
              name="card_number"
              id="card_number"
              className="input input-primary w-full"
            />
            <div className="flex flex-row gap-4">
              <div className="w-full flex-col flex gap-1">
                <label htmlFor="exp" className="">
                  Exp:
                </label>
                <input
                  name="exp"
                  id="exp"
                  className="input input-primary w-full"
                />
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-full flex-col flex gap-1">
                  <label htmlFor="cvv">cvv</label>
                  <input
                    name="cvv"
                    id="cvv"
                    className="input input-primary w-full"
                  />
                </div>
              </div>
            </div>
            <label htmlFor="card_number">Name on card:</label>
            <input
              name="card_name"
              id="card_name"
              className="input input-primary w-full"
            />
            <div className="flex justify-center items-center">
              <button className="btn btn-primary px-8">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
