'use client';

import Observer from '@/components/utility/observer/Observer';
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
    <Observer>
      <div className="flex flex-col items-center min-h-screen overflow-y-scroll no-scrollbar flex-1">
        <label
          ref={ref}
          htmlFor="my-drawer-3"
          className="btn btn-primary drawer-button"
        >
          Open drawer
        </label>
        <Link
          href={'/accessnet'}
          className="w-full min-h-[25vh] bg-red-500 border-t-2 border-b-2 border-black opacity-0 group-[.inview]:animate-slidein-400 flex flex-wrap items-center md:flex-nowrap justify-around"
          onClick={() => closeDrawer()}
        >
          <div className="flex-1 flex justify-center items-center">
            Access Net
          </div>
          <div className="grid grid-cols-2 grid-rows-2 flex-1 justify-items-center items-center md:flex gap-4 h-full p-2">
            <span className="rounded-full bg-blue-500 aspect-square h-full md:h-auto md:w-[25%] flex justify-center items-center ">
              test
            </span>
            <span className="rounded-full bg-blue-500 aspect-square h-full md:h-auto md:w-[25%] flex justify-center items-center ">
              test
            </span>
            <span className="rounded-full bg-blue-500 aspect-square h-full md:h-auto md:w-[25%] flex justify-center items-center ">
              test
            </span>
            <span className="rounded-full bg-blue-500 aspect-square h-full md:h-auto md:w-[25%] flex justify-center items-center ">
              test
            </span>
          </div>
        </Link>
        <Link
          href={'/accessnet'}
          className="w-full min-h-[25vh] bg-red-500 border-t-2 border-b-2 border-black opacity-0 group-[.inview]:animate-slidein-600 flex flex-wrap items-center md:flex-nowrap "
          onClick={() => closeDrawer()}
        >
          <div>Access Net</div>
        </Link>
        <Link
          href={'/accessnet'}
          className="w-full min-h-[25vh] bg-red-500 border-t-2 border-b-2 border-black opacity-0 group-[.inview]:animate-slidein-800 flex flex-wrap items-center md:flex-nowrap"
          onClick={() => closeDrawer()}
        >
          <div>Access Net</div>
        </Link>
        <Link
          href={'/accessnet'}
          onClick={() => closeDrawer()}
          className="w-full min-h-[25vh] bg-red-500 border-t-2 border-b-2 border-black opacity-0 group-[.inview]:animate-slidein-1000 flex flex-wrap items-center md:flex-nowrap"
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
    </Observer>
  );
}
