import React from 'react';

// import Tippy from '@tippyjs/react';
// import Image from 'next/image';
import 'tippy.js/animations/scale.css';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { Fade } from 'react-reveal';
// import { followCursor } from 'tippy.js';

import { Background } from '@components/background';
import { Section } from '@components/layout';

import Banner3d from './banner-3d';

const Banner = () => {
  const texts = [
    {
      first: 'Into The',
      second: 'Yooniverse',
      third: 'Escape the Labyrinth to get the whitelist spot!',
    },
  ];

  const [text, setText] = React.useState(texts[0]);

  // #endregion

  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setState({ ...state, isReady: true });
    setText(texts[0]);

    return () => {};
  }, []);

  return (
    <Background
      color="bg-primary
      after:content-[''] after:absolute after:top-0 after:left-0 after:bg-[url('/assets/images/bgs/bg-labyrinth.png')] after:mix-blend-multiply after:w-full after:h-full after:bg-cover
      "
      className="relative pt-32"
    >
      <Section className="relative flex items-center">
        <div className="relative w-1/2 h-full flex flex-col justify-center z-[1] py-8">
          <Fade top duration={750} delay={250} when={state.isReady}>
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/logos/logo-yooniez-w.svg"
                alt=""
                className="h-[22px] aspect-auto"
                style={{
                  filter: 'drop-shadow(0px 0px 25px rgba(97, 250, 227, 0.6))',
                }}
              />
              <h3
                className="text-lg font-bold font-script text-secondary"
                style={{
                  transform: 'rotate(-7.06deg)',
                }}
              >
                {text?.first}
              </h3>
            </div>
          </Fade>
          <Fade top duration={750} delay={500} when={state.isReady}>
            <h1
              className="text-[40px] font-headline text-[#F0F5FF]"
              style={{
                textShadow: '0px 0px 25px rgba(97, 250, 227, 0.6)',
              }}
            >
              {text?.second}
            </h1>
          </Fade>

          <Fade top duration={750} delay={750} when={state.isReady}>
            <h2 className="text-[40px] mt-2 mb-5 pt-4 font-headline text-white max-w-[488px] relative text-shadow-lg">
              <div className="border-t-2 border-white opacity-30 absolute top-0 left-0 w-full" />
              <div className="border-t-2 border-secondary opacity-80 absolute top-0 left-0 w-[226px]" />
              {text?.third}
            </h2>
            <div>
              <div className="inline-block mb-6 px-4 py-2 text-secondary bg-black/40 border-x border-y border-secondary rounded-full shadow-md">
                <span className="font-bold">83/200 </span>
                Spots Available
              </div>
            </div>
          </Fade>
          <Fade top duration={750} delay={1000} when={state.isReady}>
            <div className="flex items-center mt-5 bg-black/30 shadow-md pl-6 p-4 rounded-2xl w-fit gap-5">
              <div className="text-white text-sm flex items-start gap-2">
                <MdOutlineAccessTimeFilled size={20} className="mt-1" />
                <div>
                  Time left to get whitelisted <br />
                  <span className="text-tertiary font-bold">
                    40 Days 17 Hours 8 Mins
                  </span>
                </div>
              </div>
              <div>
                <button
                  className="text-base font-bold px-5 py-4 bg-tertiary shadow-lg rounded-full text-[#191919]"
                  onClick={() => {}}
                >
                  Enter Labyrinth to Get Spot
                </button>
              </div>
            </div>
          </Fade>
        </div>
        <div className="w-1/2 z-[1]">
          {/* <img
            src="/assets/images/banners/banner-yooniez.png"
            alt=""
            className="w-full max-w-[670px] aspect-auto"
          /> */}
          <Banner3d />
        </div>
      </Section>
    </Background>
  );
};

export default Banner;
