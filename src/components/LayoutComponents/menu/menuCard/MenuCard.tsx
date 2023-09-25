import Link from 'next/link';
import { ReactNode } from 'react';

export default function MenuCard({
  link,
  title,
  className = '',
  children,
}: {
  link: string;
  title: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Link
      href={link}
      className={`aspect-square w-fullrounded-2xl shadow-2xl text-3xl glass text-center flex justify-center items-center ${className}`}
    >
      {title}
      {children}
    </Link>
  );
}
