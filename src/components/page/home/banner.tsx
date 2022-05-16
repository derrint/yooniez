import React from 'react';

// import Tippy from '@tippyjs/react';
// import Image from 'next/image';
import 'tippy.js/animations/scale.css';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { Fade } from 'react-reveal';
// import { followCursor } from 'tippy.js';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Banner = () => {
  const texts = [
    {
      first: 'Into The Yooniverse',
      second: 'Escape the Labyrinth to get the whitelist spot!',
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
      color="bg-gradient-to-b from-gradient-primary-start to-gradient-primary-end
      after:content-[''] after:absolute after:top-12 after:left-0 after:bg-[url('/assets/images/bgs/bg-labyrinth.png')] after:mix-blend-multiply after:opacity-50 after:w-full after:h-full after:bg-cover
      "
      className="relative pt-32"
    >
      <Section className="relative bg-[#3B066A] bg-opacity-40 mt-16">
        <div className="relative h-full flex flex-col justify-center z-[1] py-16">
          <Fade top duration={750} delay={250} when={state.isReady}>
            <div>
              <img
                src="/assets/images/logos/logo-yooniez-w.svg"
                alt=""
                className="h-14 aspect-auto"
              />
            </div>
          </Fade>
          <Fade top duration={750} delay={500} when={state.isReady}>
            <h1
              className="text-[80px] font-display text-[#F0F5FF]"
              style={{
                textShadow: '0px 0px 25px rgba(97, 250, 227, 0.6)',
              }}
            >
              {text?.first}
            </h1>
          </Fade>
          <Fade top duration={750} delay={750} when={state.isReady}>
            <h2 className="text-xl -mt-4 mb-5 text-[#F0F5FF]">
              {text?.second}
            </h2>
            <div>
              <div className="inline-block mb-6 px-4 py-2 text-tertiary bg-primary-darkest border-x border-y border-tertiary">
                <span className="font-bold">83/200 </span>
                Spots Available
              </div>
            </div>
          </Fade>
          <Fade top duration={750} delay={1000} when={state.isReady}>
            <div>
              <button
                className="text-base font-bold px-6 py-3 text-white bg-secondary shadow-dark"
                onClick={() => {}}
              >
                Enter The Take me to the Yooniverse Labyrinth
              </button>
            </div>
            <div className="text-white text-sm mt-5 flex items-center gap-2">
              <MdOutlineAccessTimeFilled size={14} />
              Time left to get whitelisted{' '}
              <span className="text-tertiary font-bold">
                40 Days 17 Hours 8 Mins
              </span>
            </div>
          </Fade>
        </div>
        <div className="z-[1] absolute -top-16 right-0">
          <img
            src="/assets/images/banners/banner-yooniez.png"
            alt=""
            className="w-full max-w-[670px] aspect-auto"
          />
        </div>
      </Section>
    </Background>
  );
};

export default Banner;
