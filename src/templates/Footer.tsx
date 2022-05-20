import Link from 'next/link';
import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import { Background } from '@components/background/Background';
import { Section } from '@components/layout/Section';

const Footer = () => {
  const menus = [
    {
      id: 1,
      label: 'Terms and Conditions',
      href: '/',
    },
    {
      id: 2,
      label: 'Privacy Policy',
      href: '/',
    },
  ];

  return (
    <Background color="bg-primary">
      <Section className="lg:!px-8 flex justify-between" isFooter>
        <div className="flex flex-wrap justify-between items-center">
          <nav className="">
            <ul className="navbar flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-10 justify-start lg:justify-end items-start sm:items-center">
              <li>
                <span className="text-sm font-semibold text-white">
                  Copyright &copy; Yooniez 2022
                </span>
              </li>
              {menus.map((item: any) => {
                return (
                  <li
                    key={item.id}
                    className="flex justify-center items-center gap-3 whitespace-nowrap"
                  >
                    <Link href="/">
                      <a className="text-sm text-white">{item.label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <nav className="">
            <ul className="navbar flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-10 justify-start lg:justify-end items-start sm:items-center">
              <li className="flex justify-center items-center gap-3 whitespace-nowrap">
                <Link href="/">
                  <a className="text-sm text-white">
                    <FiMail size={16} className="inline mr-2" />
                    support@yooniez-nft.com
                  </a>
                </Link>
              </li>
              <li className="flex justify-center items-center gap-3">
                <div className="rounded-full p-1 bg-white text-primary">
                  <FaDiscord size={16} />
                </div>
                <div className="rounded-full p-1 bg-white text-primary">
                  <FaYoutube size={16} />
                </div>
                <div className="rounded-full p-1 bg-white text-primary">
                  <FaTwitter size={16} />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </Section>
    </Background>
  );
};

export { Footer };
