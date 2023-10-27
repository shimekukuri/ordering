import { getUserPermissions } from "@/ulitiles/db/getUserPermissions/getUserPermissions";
import { EncryptionService } from "@/ulitiles/encyption/EncyptionService";
import { redirect } from "next/navigation";

const test = async (formdata: FormData) => {
  'use server';
  console.log(process.env.ENCRYPTION_PASSPHRASE);
  let input = formdata.get("meep") as string;
  console.log(input)
  let encryptorizor = new EncryptionService('ENCRYPTION_PASSPHRASE');
  let encrypted = encryptorizor.encrypt(input);
  console.log(encrypted);
  console.log(encryptorizor.decrypt(encrypted));
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

      <input id="meep" name="meep"/>
      </form>
    </div>
  );
}
