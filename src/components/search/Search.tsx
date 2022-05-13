import React from 'react';

import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

import { DropdownMenu } from '@components/dropdown';

type ISearchProps = {
  isHome?: boolean;
  className?: string;
  inputClassName?: string;
};

const Search = ({ isHome, className, inputClassName }: ISearchProps) => {
  const filters = [
    {
      id: 'all',
      label: 'All filters',
    },
    {
      id: 'txs',
      label: 'Transaction',
    },
    {
      id: 'blocks',
      label: 'Block',
    },
    {
      id: 'address',
      label: 'Wallet Tx',
    },
  ];

  const [searchParams, setSearchParams] = React.useState({
    q: '',
    filter: 'all',
  });

  const { q, filter } = searchParams;

  return (
    <div
      className={`flex flex-col sm:flex-row items-center text-center relative gap-3 w-full 
      ${isHome ? 'justify-center' : 'justify-end'}
      ${className || ''}
      `}
    >
      <div className="border-x border-y border-gray-200 bg-white px-5 h-14 rounded-2xl text-sm focus-within:border-primary flex justify-start items-center shadow-md">
        <DropdownMenu
          title={filters.find((x) => x.id === filter)?.label as any}
          items={filters}
          onChange={(v: any) => {
            setSearchParams({ ...searchParams, filter: v });
          }}
        />
        <input
          className={`focus:outline-none ml-3 font-medium text-ellipsis
            ${
              isHome
                ? 'w-[calc(100vw-168px)] sm:w-72'
                : 'w-[calc(100vw-168px)] sm:w-[calc(100vw-276px)] lg:w-72'
            } ${inputClassName || ''}`}
          type="search"
          name="search"
          placeholder="Search transaction, block, wallet (tx)"
          onChange={(e) => {
            setSearchParams({ ...searchParams, q: e.target.value });
          }}
        />
      </div>
      <Link
        href={{
          pathname: '/search',
          query: { q, filter },
        }}
        passHref
      >
        <button
          type="submit"
          className="flex gap-2 items-center justify-center bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end h-14 w-full sm:w-16 rounded-2xl shadow-md text-white"
        >
          <FiSearch size={20} />
          <span className="font-bold text-sm sm:hidden">Search</span>
        </button>
      </Link>
    </div>
  );
};

export { Search };
