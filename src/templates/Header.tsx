import React from 'react';

import Link from 'next/link';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { DropdownMenu } from '@components/dropdown';
import { Section } from '@components/layout';
import { NavbarTwoColumns } from '@components/navigation/NavbarTwoColumns';
import { menus } from '@data/index';

const Header = () => {
  const [state, setState] = React.useState({
    isReady: false,
    isAnimationDone: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      setState({ ...state, isReady: true });
    }, 250);

    return () => {};
  }, []);

  React.useEffect(() => {
    if (state.isReady) {
      setTimeout(() => {
        setState({ ...state, isAnimationDone: true });
      }, 750);
    }

    return () => {};
  }, [state.isReady]);

  return (
    <Background
      color="bg-white"
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        state.isAnimationDone ? 'shadow-lg' : ''
      }`}
    >
      <Fade top duration={750} delay={0} when={state.isReady}>
        <Section yPadding="py-6" className="relative" isHeader>
          <NavbarTwoColumns
            logo={
              <img
                src="/assets/images/logos/logo-sds.svg"
                alt=""
                className="h-10 md:h-12 lg:h-16 aspect-auto"
              />
            }
          >
            {menus.map(
              ({
                id,
                label,
                href,
                submenus,
                isButton,
                isDesktop,
                isMobile,
              }: any) => (
                <li
                  key={id}
                  className={`${
                    isDesktop && !isMobile ? 'hidden md:block' : ''
                  } ${!isDesktop && isMobile ? 'md:hidden' : ''}`}
                >
                  <div className="text-right">
                    {submenus ? (
                      <DropdownMenu
                        title={label}
                        items={submenus}
                        onChange={(v: any) => console.log(v)}
                        showPreview
                        classNames={{ itemsWrapper: '!mt-4 !rounded-xl' }}
                      />
                    ) : (
                      <Link href={href} passHref>
                        <a
                          className={`text-base lg:text-lg hover:text-secondary ${
                            isButton
                              ? 'bg-primary px-4 lg:px-6 py-2 lg:py-4 rounded-full'
                              : ''
                          }`}
                        >
                          {label}
                        </a>
                      </Link>
                    )}
                  </div>
                </li>
              )
            )}
          </NavbarTwoColumns>
        </Section>
      </Fade>
    </Background>
  );
};

export { Header };
