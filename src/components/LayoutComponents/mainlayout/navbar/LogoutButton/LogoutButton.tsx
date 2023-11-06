'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <a href="#" onClick={() => signOut()}>
      Logout
    </a>
  );
}
