import { ReactNode } from 'react';

import Link from 'next/link';
import Router from 'next/router';

import { DropdownMenu } from '@components/dropdown';
import { menus } from '@data/index';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="navbar hidden md:flex items-center text-xl gap-4 lg:gap-8">
        {props.children}
      </ul>

      <DropdownMenu
        title={'Menu'}
        items={menus.filter((x) => x.isMobile)}
        onChange={(v: any) => {
          Router.push(menus.find((x) => x.id === v)?.href as any);
        }}
        classNames={{ wrapper: 'md:hidden' }}
      />
    </nav>

    {/* <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style> */}
  </div>
);

export { NavbarTwoColumns };
