import Link from 'next/link';
import { ReactNode } from 'react';

export function NavMenuCard({
  closeDrawer,
  className = '',
  title,
  link,
  children,
}: {
  closeDrawer: () => void;
  className?: string;
  title: string;
  link: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`w-full min-h-[25vh] backdrop-blur-xl bg-yellow-100 bg-opacity-40 opacity-0 flex flex-wrap items-center md:flex-nowrap justify-around ${className}`}
      onClick={() => closeDrawer()}
    >
      <Link href={link} className="flex-1 flex justify-center items-center">
        {title}
      </Link>
      <div className="grid grid-cols-2 grid-rows-2 flex-1 justify-items-center items-center md:flex gap-4 h-full p-2">
        {children}
      </div>
    </div>
  );
}

export function NavMenuCardChild({
  title = '',
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <span className="rounded-full bg-blue-500 aspect-square h-full md:h-auto md:w-[25%] flex justify-center items-center">
      <Link
        className="flex-1 h-full w-full flex justify-center items-center"
        href={link}
      >
        <div>{title}</div>
      </Link>
    </span>
  );
}
