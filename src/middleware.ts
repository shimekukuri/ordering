import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  fetch(`${process.env.NEXTAUTH_URL}/api/middleware/permissions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ checkPermisison: 'accessnet' }),
  })
    .then((x) => {
      console.log(x);
    })
    .catch((e) => {
      console.error(e);
    });

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};
