'use client';

import { useRouter } from 'next/navigation';

export default function RouterBackButton() {
  const router = useRouter();

  return (
    <button className="btn btn-primary px-4" onClick={() => router.back()}>
      Go Back
    </button>
  );
}
