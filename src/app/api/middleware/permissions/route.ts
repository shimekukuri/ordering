import { prisma } from '@/ulitiles/prisma/db';
import { Session } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export interface permissionsCheck {}

export const POST = async (request: NextRequest, response: NextResponse) => {
  let session = request.cookies.get(
    '__Secure-next-auth.session-token'
  ) as unknown as Session | undefined;

  const { checkPermisison }: { checkPermisison: string } = await request.json();

  if (!session) {
    return;
  }

  let sessionResp = await prisma.session.findFirst({
    where: { sessionToken: session.sessionToken },
    include: { user: { include: { permissions: {} } } },
  });

  if (!sessionResp) {
    return NextResponse.json({ [checkPermisison]: false });
  }

  //@ts-expect-error
  if (sessionResp?.user.permissions[checkPermisison]) {
    return NextResponse.json({ [checkPermisison]: true });
  }
};

export const dynamic = 'force-dynamic';
