import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import Breadcrumbs from "@/components/utility/breadcumbs/BreadCrumbs";
import { getUserPermissions } from "@/ulitiles/db/getUserPermissions/getUserPermissions";
import { prisma } from "@/ulitiles/prisma/db";
import { state } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const handleShippingRequest = async (data: FormData) => {
  "use server";
  const email = data.get("email") as string;
  const first_name = data.get("first_name") as string;
  const last_name = data.get("last_name") as string;
  const street_address = data.get("street_address") as string;
  const city = data.get("city") as string;
  const postal_code = data.get("postal_code") as string;
  const state = data.get("state") as state;
  const session = await getServerSession(OPTIONS);
  console.log(session);
  const session_email = session?.user?.email;
  console.log(
    email,
    first_name,
    last_name,
    street_address,
    city,
    postal_code,
    state,
  );

  try {
    if (!session_email) {
      throw Error("No session_email");
    }
    let usr = await prisma.user.findFirst({
      where: { email: session_email },
      include: { ShippingAddressList: {} },
    });

    let result = await prisma.user.update({
      where: { id: usr?.id },
      data: {
        ShippingAddressList: {
          //@ts-ignore
          upsert: {
            update: {
              email: email,
              postal_code: postal_code,
              state: state,
              last_name: last_name,
              first_name: first_name,
              street_address: street_address,
              town_city: city,
            },
            create: {
              email: email,
              postal_code: postal_code,
              state: state,
              last_name: last_name,
              first_name: first_name,
              street_address: street_address,
              town_city: city,
            },
          },
        },
      },
      include: { ShippingAddressList: true },
    });

    console.log(result);
  } catch (e) {
    console.error(e);
  }

  let finalResult = await prisma.user.findFirst({
    where: { email: session?.user?.email },
    include: { ShippingAddressList: {} },
  });

  console.log('Final Result',finalResult);
};

export default async function Page() {
  const permissionCheck = await getUserPermissions(["acessnet", "createItem"]);
  if (!permissionCheck) {
    return redirect("/");
  }

  return (
    <>
      <Breadcrumbs />
      <div className="flex-1 flex items-center flex-col lg:p-12">
        <h1 className="text-4xl">Shipping</h1>
        <div className="divider"></div>
        <form
          action={handleShippingRequest}
          className="flex justify-center items-center flex-col w-full p-4 lg:w-1/2 gap-4"
        >
          <label className="hidden" htmlFor="email">
            Email:
          </label>
          <input
            className="input input-primary input-md w-full lg:w-1/2 shadow-2xl"
            type={"email"}
            placeholder="Email"
            id="email"
            name="email"
          />
          <label className="hidden" htmlFor="first_name">
            First Name:
          </label>
          <input
            className="input input-secondary input-md w-full lg:w-1/2 shadow-2xl"
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First Name"
          />
          <label className="hidden" htmlFor="last_name">
            Last Name:
          </label>
          <input
            className="input input-accent input-md w-full lg:w-1/2 shadow-2xl"
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last Name"
          />
          <label className="hidden" htmlFor="street_address">
            Street Address
          </label>
          <input
            className="input input-primary input-md w-full lg:w-1/2 shadow-2xl"
            type="text"
            id="street_address"
            name="street_address"
            placeholder="Street Address"
          />
          <label className="hidden" htmlFor="city">
            City
          </label>
          <input
            className="input input-secondary input-md w-full lg:w-1/2 shadow-2xl"
            type="text"
            id="city"
            name="city"
            placeholder="City"
          />
          <label className="hidden" htmlFor="city">
            Postal Code
          </label>
          <input
            className="input input-accent input-md w-full lg:w-1/2 shadow-2xl"
            type="text"
            id="postal_code"
            name="postal_code"
            placeholder="Postal Code"
          />
          <label className="hidden">State</label>
          <select className="select w-full lg:w-1/2 shadow-2xl" name="state">
            <option className="" value="Alabama">
              Alabama
            </option>
            <option className="" value="Alaska">
              Alaska
            </option>
            <option className="" value="Arizona">
              Arizona
            </option>
            <option className="" value="Arkansas">
              Arkansas
            </option>
            <option className="" value="California">
              California
            </option>
            <option className="" value="Colorado">
              Colorado
            </option>
            <option className="" value="Connecticut">
              Connecticut
            </option>
            <option className="" value="Delaware">
              Delaware
            </option>
            <option className="" value="Florida">
              Florida
            </option>
            <option className="" value="Georgia">
              Georgia
            </option>
            <option className="" value="Hawaii">
              Hawaii
            </option>
            <option className="" value="Idaho">
              Idaho
            </option>
            <option className="" value="Illinois">
              Illinois
            </option>
            <option className="" value="Indiana">
              Indiana
            </option>
            <option className="" value="Iowa">
              Iowa
            </option>
            <option className="" value="Kansas">
              Kansas
            </option>
            <option className="" value="Kentucky">
              Kentucky
            </option>
            <option className="" value="Louisiana">
              Louisiana
            </option>
            <option className="" value="Maine">
              Maine
            </option>
            <option className="" value="Maryland">
              Maryland
            </option>
            <option className="" value="Massachusetts">
              Massachusetts
            </option>
            <option className="" value="Michigan">
              Michigan
            </option>
            <option className="" value="Minnesota">
              Minnesota
            </option>
            <option className="" value="Mississippi">
              Mississippi
            </option>
            <option className="" value="Missouri">
              Missouri
            </option>
            <option className="" value="Montana">
              Montana
            </option>
            <option className="" value="Nebraska">
              Nebraska
            </option>
            <option className="" value="Nevada">
              Nevada
            </option>
            <option className="" value="New_Hampshire">
              New Hampshire
            </option>
            <option className="" value="New_Jersey">
              New Jersey
            </option>
            <option className="" value="New_Mexico">
              New Mexico
            </option>
            <option className="" value="New_York">
              New York
            </option>
            <option className="" value="North_Carolina">
              North Carolina
            </option>
            <option className="" value="North_Dakota">
              North Dakota
            </option>
            <option className="" value="Ohio">
              Ohio
            </option>
            <option className="" value="Oklahoma">
              Oklahoma
            </option>
            <option className="" value="Oregon">
              Oregon
            </option>
            <option className="" value="Pennsylvania">
              Pennsylvania
            </option>
            <option className="" value="Rhode_Island">
              Rhode Island
            </option>
            <option className="" value="South_Carolina">
              South Carolina
            </option>
            <option className="" value="South_Dakota">
              South Dakota
            </option>
            <option className="" value="Tennessee">
              Tennessee
            </option>
            <option className="" value="Texas">
              Texas
            </option>
            <option className="" value="Utah">
              Utah
            </option>
            <option className="" value="Vermont">
              Vermont
            </option>
            <option className="" value="Virginia">
              Virginia
            </option>
            <option className="" value="Washington">
              Washington
            </option>
            <option className="" value="West_Virginia">
              West Virginia
            </option>
            <option className="" value="Wisconsin">
              Wisconsin
            </option>
            <option className="" value="Wyoming">
              Wyoming
            </option>
          </select>
          <button className="btn btn-primary shadow-2xl" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
