import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Session } from '@prisma/client';
import { PrismaClient } from '@prisma/client/edge';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let prisma = new PrismaClient();
  let session = request.cookies.get(
    '__Secure-next-auth.session-token'
  ) as unknown as Session | undefined;

  if (!session) {
    return;
  }

  let user = await prisma.session.findFirst({
    where: { sessionToken: session.sessionToken },
    include: { user: { include: { permissions: {} } } },
  });
  console.log(user);

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};
