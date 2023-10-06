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
        {session ? (
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
        ) : (
          ''
        )}
        <NavMenuCard
          closeDrawer={handleCloseDrawer}
          className="group-[.inview]:animate-slidein-600 bg-gradient-to-r from-white"
          title="Access Laser Center"
          link="/accessnet"
        >
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
        </NavMenuCard>{' '}
        <NavMenuCard
          closeDrawer={handleCloseDrawer}
          className="group-[.inview]:animate-slidein-800 bg-gradient-to-r from-white"
          title="Access Durable Medical Equipment"
          link="/accessnet"
        >
          <NavMenuCardChild link="/dme" title="DME Home" />
          <NavMenuCardChild link="/dme/shopping" title="Shopping">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="aspect-square w-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </NavMenuCardChild>
          <NavMenuCardChild link="/accessnet" title="test" />
          <NavMenuCardChild link="/accessnet" title="test" />
        </NavMenuCard>
        <NavMenuCard
          closeDrawer={handleCloseDrawer}
          className="group-[.inview]:animate-slidein-1200 bg-gradient-to-r from-white"
          title="Access Specialized Care"
          link="/access-specialized-care"
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
          link="/whitwell"
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
