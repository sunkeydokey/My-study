'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavigationProps = {
  links: Array<{ href: string; key: string }>;
};

export const Navigation = ({ links }: NavigationProps) => {
  const pathname = usePathname();
  return (
    <ul className="flex bg-slate-500">
      {links.map(({ href, key }) => {
        const isActive = pathname == href;
        return (
          <li
            key={key}
            className={`flex-auto ${isActive ? 'text-blue-600' : 'text-white'}`}
          >
            <Link href={href}>{key}</Link>
          </li>
        );
      })}
    </ul>
  );
};
