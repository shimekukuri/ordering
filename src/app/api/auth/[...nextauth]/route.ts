import { randomBytes, randomUUID } from 'crypto';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/ulitiles/prisma/db';
import { Adapter } from 'next-auth/adapters';

export const OPTIONS: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString('hex');
    },
  },
  secret: process.env.SECRET,
};

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
