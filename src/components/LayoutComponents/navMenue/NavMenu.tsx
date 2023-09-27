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
          <NavMenuCardChild
            link="/accessnet/internal-ordering"
            title="Internal Ordering"
          />
          <NavMenuCardChild link="/accessnet/admin" title="Administration" />
          <NavMenuCardChild
            link="/accessnet/it-ticket/new-ticket"
            title="IT Ticket"
          />
          <NavMenuCardChild
            link="/accessnet/maintenance-ticket/new-ticket"
            title="Maintenance Ticket"
          />
        </NavMenuCard>
        <NavMenuCard
          closeDrawer={handleCloseDrawer}
          className="group-[.inview]:animate-slidein-600 bg-gradient-to-r from-white"
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
          title="Access Laser Center"
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
          title="Whitwell Pharmacy"
          link="/accessnet"
        >
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
        </NavMenuCard>
        <NavMenuCard
          closeDrawer={handleCloseDrawer}
          className="opacity-100 bg-gradient-to-r from-white"
          title="Cates Street Pharmacy"
          link="/accessnet"
        >
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
        </NavMenuCard>
        <NavMenuCard
          closeDrawer={handleCloseDrawer}
          className="opacity-100 bg-gradient-to-r from-white"
          title="Jasper Drugs"
          link="/accessnet"
        >
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
        </NavMenuCard>
        <NavMenuCard
          closeDrawer={handleCloseDrawer}
          className="opacity-100 bg-gradient-to-r from-white"
          title="Standefer Drugs"
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
