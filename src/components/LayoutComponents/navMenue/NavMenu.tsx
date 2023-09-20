'use client';
import Observer from '@/components/utility/observer/Observer';
import { Session } from 'next-auth';
import { useRef } from 'react';
import { NavMenuCard, NavMenuCardChild } from './navMenuCard/NavMenuCard';

export default async function NavMenu({
  session,
}: {
  session: Session | null;
}) {
  let ref = useRef<HTMLLabelElement | null>(null);

  const handleCloseDrawer = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <Observer repeat={true}>
      <div className="flex flex-col items-center min-h-screen overflow-y-scroll no-scrollbar flex-1">
        <div className="w-full bg-slate-200">
          <label
            ref={ref}
            htmlFor="my-drawer-3"
            className="btn btn-primary drawer-button justify-self-end self-end m-4"
          >
            Close
          </label>
        </div>
        <NavMenuCard
          closeDrawer={handleCloseDrawer}
          className="group-[.inview]:animate-slidein-400"
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
          className="group-[.inview]:animate-slidein-600"
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
          className="group-[.inview]:animate-slidein-800"
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
          className="group-[.inview]:animate-slidein-1000"
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
