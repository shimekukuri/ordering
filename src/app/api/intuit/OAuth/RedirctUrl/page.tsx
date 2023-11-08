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



  if (token && token.access_token && token.refresh_token && token.expires_in && token.x_refresh_token_expires_in) {
    await prisma.quickbookToken.deleteMany();
    await prisma.quickbookToken.create({
      data: {
        realmId: searchParams.realmId,
        accessToken: token.access_token,
        refreshToken: token.refresh_token,
        accessTokenExp: token.expires_in.toString(),
        refreshTokenExp: token.x_refresh_token_expires_in.toString(),
      },
    });
  }
  return <div>test</div>;
}
