import { prisma } from "@/ulitiles/prisma/db";
import { QbPayment } from "@/ulitiles/quickbooks/QbSingleTon/QbSingleton";

export default async function Page({
  searchParams,
}: {
  searchParams: { realmId: string; code: string; state?: string };
}) {
  console.log(searchParams);
  let token = await QbPayment.createToken({
    realmId: searchParams.realmId,
    code: searchParams.code,
    state: undefined,
  });

  if (token) {
    let oldToken = await prisma.quickbookToken.findFirst({where: {refreshToken: {}}});
        
    };
  return <div>test</div>;
}
