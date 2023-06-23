'use client';

import { getServerSession } from 'next-auth';
import { signIn } from 'next-auth/react';
import { options } from '../api/auth/[...nextauth]/route';

export default async function Login() {
  return (
    <button className="btn btn-primary" onClick={() => signIn()}>
      Login
    </button>
  );
}
