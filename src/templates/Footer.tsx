import Link from 'next/link';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

import { Background } from '@components/background/Background';
import { Section } from '@components/layout/Section';

const Footer = () => {
  const menus = [
    {
      id: 1,
      label: 'Term of Service',
      href: '/',
    },
    {
      id: 2,
      label: 'Contact us',
      href: '/',
    },
    {
      id: 3,
      label: 'Feedback',
      href: '/',
    },
    {
      id: 4,
      label: 'Join us',
      href: '/',
    },
  ];

  return (
    <Background color="bg-white">
      <Section yPadding="py-8" isFooter>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-6/12 flex justify-between lg:justify-start items-center gap-10">
            {/* <Image src={LogoBW} alt="" height={48} width={190} /> */}
            <img
              src="/assets/images/logos/logo-sds-bw.svg"
              alt=""
              className="h-[48px] aspect-auto"
            />
            <p className="text-sm uppercase text-right">
              Copyright © 2022 Simpleduckstudios
            </p>
          </div>

          <nav className="w-full sm:w-6/12 mt-6 lg:mt-0 hidden">
            <ul className="navbar flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-10 justify-start lg:justify-end items-start sm:items-center font-medium text-xl text-gray-800">
              {menus.map((item: any) => {
                return (
                  <li
                    key={item.id}
                    className="flex justify-center items-center gap-3"
                  >
                    <Link href="/">
                      <a className="uppercase text-sm">{item.label}</a>
                    </Link>
                    {item.id === 4 && (
                      <>
                        <div className="rounded-full p-1 bg-primary text-white">
                          <FaDiscord size={16} />
                        </div>
                        <div className="rounded-full p-1 bg-primary text-white">
                          <FaTwitter size={16} />
                        </div>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Section>
    </Background>
  );
};

export { Footer };
