import { QbPayment } from "@/ulitiles/quickbooks/QbSingleTon/QbSingleton";

export default async function Page({
  searchParams,
}: {
  searchParams: { realmId: string; code: string; state?: string };
}) {
  console.log(searchParams);
  await QbPayment.createToken({
    realmId: searchParams.realmId,
    code: searchParams.code,
    state: undefined,
  });
  return <div>test</div>;
}
