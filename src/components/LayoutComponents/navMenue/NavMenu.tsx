'use client';

import { Session } from 'next-auth';
import Link from 'next/link';
import { useRef } from 'react';

export default async function NavMenu({
  session,
}: {
  session: Session | null;
}) {
  let ref = useRef<HTMLLabelElement | null>(null);

  const closeDrawer = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen overflow-y-scroll">
      <label
        ref={ref}
        htmlFor="my-drawer-3"
        className="btn btn-primary drawer-button"
      >
        Open drawer
      </label>
      <Link
        href={'/accessnet'}
        className="w-full min-h-[25vh] bg-red-500 border-t-2 border-b-2 border-black animate-slidein-1200"
        onClick={() => closeDrawer()}
      >
        <div>Access Net</div>
      </Link>
      <Link
        href={'/accessnet'}
        className="w-full min-h-[25vh] bg-red-500 border-t-2 border-b-2 border-black animate-slidein-1400"
        onClick={() => closeDrawer()}
      >
        <div>Access Net</div>
      </Link>
      <Link
        href={'/accessnet'}
        className="w-full min-h-[25vh] bg-red-500 border-t-2 border-b-2 border-black animate-slidein-1600"
        onClick={() => closeDrawer()}
      >
        <div>Access Net</div>
      </Link>
      <Link
        href={'/accessnet'}
        onClick={() => closeDrawer()}
        className="w-full min-h-[25vh] bg-red-500 border-t-2 border-b-2 border-black animate-slidein-1800"
      >
        <div>Access Net</div>
      </Link>
      <Link
        href={'/accessnet'}
        className="w-full min-h-[25vh] bg-red-500 border-t-2 border-b-2 border-black"
        onClick={() => closeDrawer()}
      >
        <div>Access Net</div>
      </Link>
    </div>
  );
}
