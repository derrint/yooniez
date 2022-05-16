import { ReactNode } from 'react';

import Link from 'next/link';
import Router from 'next/router';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

import { DropdownMenu } from '@components/dropdown';
import { menus } from '@data/index';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div className="flex items-center gap-8">
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
      <div className="pt-1 flex gap-5">
        <div className="text-white">
          <FaDiscord size={18} />
        </div>
        <div className="text-white">
          <FaInstagram size={18} />
        </div>
        <div className="text-white">
          <FaTwitter size={18} />
        </div>
      </div>
    </div>

    <nav>
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

export { NavbarTwoColumns };
