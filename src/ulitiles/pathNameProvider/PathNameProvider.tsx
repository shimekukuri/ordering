'use client';

import { ReactNode, Children, isValidElement, cloneElement } from 'react';
import { usePathname } from 'next/navigation';

export default function PathNameProvider({
  children,
}: {
  children: ReactNode;
}) {
  const path = usePathname();
  console.log(path);
  const childrenWithProps = Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (isValidElement(child)) {
      //@ts-expect-error
      return cloneElement(child, { path: path });
    }
    return child;
  });

  return <div>{childrenWithProps()}</div>;

  return <div>{children}</div>;
}
