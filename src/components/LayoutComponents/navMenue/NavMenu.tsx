'use client';
import Observer from '@/components/utility/observer/Observer';
import { Session } from 'next-auth';
import { useRef, useEffect } from 'react';
import { NavMenuCard, NavMenuCardChild } from './navMenuCard/NavMenuCard';
import { useRouter } from 'next/navigation';

export default function NavMenu({ session }: { session: Session | null }) {
  let ref = useRef<HTMLLabelElement | null>(null);
  let router = useRouter();

  const handleCloseDrawer = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  useEffect(() => {
    let listener = (e: KeyboardEvent) => {
      if (e.key == 'Escape' && ref.current) {
        ref.current.click();
      }
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [router]);

  return (
    <Observer repeat={true}>
      <div className="flex flex-col items-center min-h-screen overflow-y-scroll no-scrollbar flex-1">
        <div className="w-full bg-gradient-to-r from-white backdrop-blur-xl bg-opacity-10 flex justify-center">
          <div className="flex-1 flex items-center justify-center px-4">
            <input
              type="text"
              className="input input-secondary w-full"
              onClick={() => router.push('/search')}
              placeholder="Search..."
            />
          </div>
          <label
            ref={ref}
            htmlFor="my-drawer-3"
            className="btn btn-primary drawer-button m-4"
          >
            Close
          </label>
        </div>
        <NavMenuCard
          closeDrawer={handleCloseDrawer}
          className="group-[.inview]:animate-slidein-400 bg-gradient-to-r from-white"
          title="Access Net"
          link="/accessnet"
        >
          <NavMenuCardChild link="/accessnet" title="MEEP" />
          <NavMenuCardChild link="/accessnet" title="YOLO" />
          <NavMenuCardChild link="/accessnet" title="SWAG" />
          <NavMenuCardChild link="/accessnet" title="test" />
        </NavMenuCard>
        <NavMenuCard
          closeDrawer={handleCloseDrawer}
          className="group-[.inview]:animate-slidein-600 bg-gradient-to-r from-white text-center"
          title="Access Durable Medical Equipment"
          link="/accessnet"
        >
          <NavMenuCardChild link="/dme" title="DME Home" />
          <NavMenuCardChild link="/dme/shopping" title="Shopping" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
        </NavMenuCard>
        <NavMenuCard
          closeDrawer={handleCloseDrawer}
          className="group-[.inview]:animate-slidein-800 bg-gradient-to-r from-white"
          title="Access Net"
          link="/accessnet"
        >
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
        </NavMenuCard>
        <NavMenuCard
          closeDrawer={handleCloseDrawer}
          className="group-[.inview]:animate-slidein-1000 bg-gradient-to-r from-white"
          title="Access Net"
          link="/accessnet"
        >
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
        </NavMenuCard>
      </div>
    </Observer>
  );
}
