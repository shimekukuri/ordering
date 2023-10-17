'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RemoveButton() {
  const router = useRouter();

  const removeItemFromCart = () => {};

  return (
    <div className="absolute top-0 right-0 p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 hover:scale-125"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
