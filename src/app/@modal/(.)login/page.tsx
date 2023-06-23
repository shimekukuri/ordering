'use client';

import Modal from '@/components/modal/Modal';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginModal() {
  return (
    <Modal>
      <div className="bg-white w-full rounded-2xl shadow-2xl">
        <button className="btn btn-primary" onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    </Modal>
  );
}
