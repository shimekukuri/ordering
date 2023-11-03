import { getUserPermissions } from "@/ulitiles/db/getUserPermissions/getUserPermissions";
import { EncryptionService } from "@/ulitiles/encyption/EncyptionService";
import { Quickbooks } from "@/ulitiles/quickbooks/Quickbooks";
import { redirect } from "next/navigation";

const test = async (formdata: FormData) => {
  "use server";
  console.log(process.env.ENCRYPTION_PASSPHRASE);
  let input = formdata.get("meep") as string;
  console.log(input);
  let encryptorizor = new EncryptionService("ENCRYPTION_PASSPHRASE");
  let encrypted = encryptorizor.encrypt(input);
  console.log(encrypted);
  console.log(encryptorizor.decrypt(encrypted));
  let qb = new Quickbooks({
    scopes: ["Payment"],
    clientId: process.env.QUICKBOOKS_CLIENT_ID as string,
    environment: process.env.ENV as string,
    clientSecret: process.env.QUICKBOOKS_CLIENT_SECRET as string,
    redirectUri: process.env.QUICKBOOKS_REDIRECT as string,
  });
  
  console.log(qb.authorizeUri()?.toString());
};

export default async function Page() {
  const permissionCheck = await getUserPermissions([
    "admin",
    "acessnet",
    "changeUser",
  ]);
  if (!permissionCheck) {
    return redirect("/");
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <form action={test}>
        <input id="meep" name="meep" />
      </form>
    </div>
  );
}
