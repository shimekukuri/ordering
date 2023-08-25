'use client';

import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';

export default async function page() {
  const session = getServerSession(OPTIONS);

  return (
    <div className="w-screen flex justify-center items-center min-h-screen overflow-clip">
      <form className="h-1/2 bg-red-50 ">d</form>
    </div>
  );
}
