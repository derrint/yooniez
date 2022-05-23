/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Fade, Zoom } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Traits = () => {
  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      setState({ ...state, isReady: true });
    }, 250);

    return () => {};
  }, []);

  const items = [
    {
      id: 1,
      label: 'Backgrounds',
      href: '/services/playables',
      asset: '/assets/images/illustrations/traits-bgs.png',
      count: 100,
    },
    {
      id: 2,
      label: 'Skins',
      href: '/services/app-video-ads',
      asset: '/assets/images/illustrations/traits-skins.png',
      count: 80,
    },
    {
      id: 3,
      label: 'Heads',
      href: '/services/lyric-video',
      asset: '/assets/images/illustrations/traits-heads.png',
      count: 100,
    },

    {
      id: 4,
      label: 'Clothes',
      href: '/services/animations',
      asset: '/assets/images/illustrations/traits-clothes.png',
      count: 100,
    },
    {
      id: 5,
      label: 'Shoes',
      href: '/services/video-ads',
      asset: '/assets/images/illustrations/traits-shoes.png',
      count: 80,
    },
    {
      id: 6,
      label: 'Accesories',
      href: '/services/video-ads',
      asset: '/assets/images/illustrations/traits-accs.png',
      count: 100,
    },
  ];

  return (
    <>
      <Background color="bg-tertiary" className="relative z-[2]">
        <Section yPadding="pt-8 sm:pt-16" id="traits">
          <div className="relative flex flex-col justify-center z-[1]">
            <div>
              <Fade left duration={750} delay={0} when={state.isReady}>
                <div className="text-center">
                  <h1 className="text-xl sm:text-2xl lg:text-[70px] lg:leading-[100px] mb-2 lg:mb-3 text-black font-headline">
                    Traits
                  </h1>

                  <p className="lg:text-xl lg:leading-8 font-light text-black">
                    A collection of 7,777 unique NFTs on the Solana blockchain
                    are waiting for new owners! Each Yooniez are handcrafted by
                    our artist with more than 500 traits.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </Section>
      </Background>
      <Background
        color="bg-tertiary bg-[url('/assets/images/bgs/bg-grunge.png')] bg-cover bg-blend-overlay"
        className="relative z-[2]"
      >
        <Section yPadding="py-8 sm:py-16 lg:pb-32" id="traits">
          <div className="relative flex flex-col justify-center z-[1]">
            <Zoom duration={750} delay={250} when={state.isReady}>
              <div className="flex mt-10 mx-10">
                <div className="flex flex-col gap-12 w-1/2">
                  {items.map((item: any) => (
                    <div
                      key={item.id}
                      className="bg-black rounded-lg pl-24 py-1 pr-8 inline-flex items-center w-min gap-2 relative"
                    >
                      <img
                        src={item.asset}
                        alt=""
                        className="w-20 aspect-square absolute left-0"
                      />
                      <h2 className="text-primary-light font-extrabold text-4xl tracking-tighter">
                        {item.count}
                      </h2>
                      <h3 className="text-white font-bold text-lg">
                        {item.label}
                      </h3>
                    </div>
                  ))}
                </div>
                <div className="w-1/2">
                  <img
                    src="/assets/images/illustrations/yooniez-char-full.png"
                    alt=""
                  />
                </div>
              </div>
            </Zoom>
          </div>
        </Section>
      </Background>

      <style jsx>
        {`
          h2 {
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: white;
          }
        `}
      </style>
    </>
  );
};

export default Traits;
