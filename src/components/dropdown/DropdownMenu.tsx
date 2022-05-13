import React, { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

type IClassNames = {
  wrapper?: string;
  button?: string;
  itemsWrapper?: string;
  items?: string;
};

type IDropdownMenuProps = {
  title: string;
  items: any;
  classNames?: IClassNames;
  onChange?: any;
  showPreview?: boolean;
};

const DropdownMenu = (props: IDropdownMenuProps) => {
  const defaultImage =
    'https://derrint.sirv.com/Images/simple-duck-studios/icon-outline.svg';
  const [previewImage, setPreviewImage] = React.useState(defaultImage);

  return (
    <Menu
      as="div"
      className={`inline-block text-left ${props.classNames?.wrapper}`}
    >
      <Menu.Button
        className={`inline-flex gap-2 lg:gap-3 justify-between w-full text-base lg:text-lg focus:outline-none whitespace-nowrap hover:text-secondary group items-center ${props.classNames?.button}`}
      >
        {props.title}
        <div className="text-black group-hover:text-secondary ">
          <FaChevronDown className="w-2 lg:w-3" />
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute z-10 right-0 mx-4 sm:mx-8 mt-2 py-2 origin-top bg-white divide-y divide-gray-100 rounded-xl shadow-lg  focus:outline-none flex min-w-max ${props.classNames?.itemsWrapper}`}
        >
          {props.showPreview && (
            <div className="flex justify-center items-center px-12 lg:px-20">
              <img
                src={previewImage}
                alt=""
                className={`w-24 lg:w-32 aspect-square ${
                  previewImage === defaultImage ? 'opacity-25' : ''
                }`}
              />
            </div>
          )}
          <div
            className={`${
              props.showPreview
                ? 'grid grid-cols-3 lg:gap-x-6 py-6 pl-0 pr-8 lg:pr-16'
                : ''
            } ${props.classNames?.items}`}
          >
            {props.items.map((item: any) => {
              return (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'text-secondary' : 'text-black'
                      } group flex rounded-md items-center w-full px-4 py-2 lg:py-3 text-base lg:text-lg whitespace-nowrap `}
                      onClick={() => props.onChange(item.id)}
                      onMouseEnter={() => {
                        setPreviewImage(item?.asset?.illustration);
                      }}
                      onMouseOut={() => {
                        setPreviewImage(defaultImage);
                      }}
                    >
                      {item.label}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export { DropdownMenu };
