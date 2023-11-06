import { ReactNode } from 'react';

export default async function Menu({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <h1 className="text-3xl text-center p-4">{title}</h1>
      <div className="w-full flex items-center justify-center">
        <div className="divider w-3/4"></div>
      </div>
      <div className="flex-1 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 content-center lg:content-start">
        {children}
      </div>
    </>
  );
}
