import Link from 'next/link';
import { ReactNode } from 'react';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: ['400'] });

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
      className={`w-full min-h-[25vh] backdrop-blur-xl bg-opacity-10 opacity-0 flex flex-wrap items-center md:flex-nowrap justify-around text-center ${className} ${oswald.className}`}
      onClick={() => closeDrawer()}
      tabIndex={1}
      autoFocus
    >
      <Link
        href={link}
        className="flex-1 flex justify-center items-center text-3xl lg:text-6xl"
      >
        {title}
      </Link>
      <div className="grid grid-cols-2 grid-rows-2 flex-1 justify-items-center items-center md:flex gap-2 h-full p-2">
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
    <span className="rounded-full bg-black bg-opacity-60 backdrop-blur-3xl aspect-square h-full md:h-auto md:w-[25%] flex justify-center items-center">
      <Link
        className="flex-1 h-full w-full flex justify-center items-center text-xs sm:text-base md:text-lg lg:text-2xl"
        href={link}
      >
        <div className="text-center">{title}</div>
      </Link>
    </span>
  );
}
