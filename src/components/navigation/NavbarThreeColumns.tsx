import React, { ReactNode } from 'react';

import Link from 'next/link';
import Router from 'next/router';

import { DropdownMenu } from '@components/dropdown';
import { menus } from '@data/index';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
  leftComponent: ReactNode;
};

const NavbarThreeColumns = (props: INavbarProps) => {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <div className="w-5/12 flex flex-col items-start">
        {props.leftComponent}
      </div>

      <div className="w-2/12 flex flex-col items-center">
        <Link href="/">
          <a>{props.logo}</a>
        </Link>
      </div>

      <nav className="w-5/12 flex flex-col items-end">
        <ul className="navbar hidden md:flex items-center text-xl gap-4">
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
};

export { NavbarThreeColumns };
