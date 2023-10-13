'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  let path = usePathname().slice(1).split('/');

  let linkPaths = path.reduce((total: string[], current: string) => {
    if (total.length === 0) {
      total.push(`/${current}`);
      return total;
    }
    total.push(total[total.length - 1] + `/${current}`);
    return total;
  }, []);

  return (
    <div className="text-sm breadcrumbs px-4">
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        {linkPaths.map((x, i) => {
          return (
            <li key={x + i}>
              <Link href={x}>
                {path[i][0].toUpperCase() + path[i].slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
