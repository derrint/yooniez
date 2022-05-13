import React from 'react';

// import Tippy from '@tippyjs/react';
// import Image from 'next/image';
import 'tippy.js/animations/scale.css';
import { CgArrowLongLeft } from 'react-icons/cg';
import { Fade, Zoom } from 'react-reveal';
// import { followCursor } from 'tippy.js';

import { Background } from '@components/background';
import { Section } from '@components/layout';
import BrandGuidelines from '@images/services/brand-guidelines.gif';
import Creatives from '@images/services/creatives.gif';
import Playable from '@images/services/playable.gif';
import VideoAds from '@images/services/video-ads.gif';

const Banner = () => {
  const texts = [
    {
      first: 'We do',
      second: 'Playables',
      third: 'for Mobile Gaming and Apps',
      // asset:
      //   'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-1.png',
      asset: Playable,
    },
    {
      first: 'We do',
      second: 'Creatives',
      third: 'for Mobile Gaming and Apps',
      // asset:
      //   'https://derrint.sirv.com/Images/simple-duck-studios/home/portfolio-3.png',
      asset: Creatives,
    },
    {
      first: 'We do',
      second: 'Video Ads',
      third: 'for Mobile Gaming and Apps',
      // asset:
      //   'https://derrint.sirv.com/Images/simple-duck-studios/services/video-ads.png',
      asset: VideoAds,
    },
    {
      first: 'We do',
      second: 'Branding',
      third: 'for Mobile Gaming and Apps',
      // asset:
      //   'https://derrint.sirv.com/Images/simple-duck-studios/services/brand-guidelines.png',
      asset: BrandGuidelines,
    },
  ];

  const [text, setText] = React.useState(texts[0]);
  const [isTextShown, setIsTextShown] = React.useState(true);

  let i = 1;
  React.useEffect(() => {
    const intervalId = setInterval(async () => {
      setIsTextShown(false);
      setText(texts[i]);
      if (i < texts.length - 1) {
        i += 1;
      } else {
        i = 0;
      }
      setTimeout(() => {
        setIsTextShown(true);
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // #endregion

  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setState({ ...state, isReady: true });

    return () => {};
  }, []);

  return (
    <Background
      color="bg-white"
      className="relative pt-[88px] md:pt-[96px] lg:pt-[112px]"
    >
      <div className="absolute bottom-16 left-2 items-center gap-4 -rotate-90 hidden">
        <div>
          <CgArrowLongLeft size={20} />
        </div>
        Scroll
      </div>

      <Section className="">
        <div className="relative h-full flex flex-col justify-center z-[1] py-6">
          <Fade top duration={750} delay={500} when={state.isReady}>
            <h1 className="text-4xl sm:text-6xl xl:text-8xl font-bold text-center">
              {text?.first}{' '}
              {/* <Tippy
                content={
                  typeof text?.asset === 'string' ? (
                    <img
                      src={text?.asset}
                      alt=""
                      className="w-40 lg:w-60 object-cover aspect-square max-w-none rounded-full transition all duration-200"
                    />
                  ) : (
                    <Image
                      src={text?.asset as any}
                      alt=""
                      className="static w-40 lg:w-60 object-cover aspect-square max-w-none rounded-full transition all duration-200"
                      objectFit="cover"
                      width={200}
                      height={200}
                    />
                  )
                }
                followCursor={true}
                animation="scale"
                plugins={[followCursor]}
                allowHTML={true}
              > */}
              <span className="z-[1]">
                <Fade
                  left
                  duration={750}
                  delay={250}
                  cascade
                  when={isTextShown}
                >
                  <span
                    className={`text-secondary lg:text-black sm:hover:text-secondary underlined underlined-waved transition-all duration-200`}
                  >
                    {text?.second}
                  </span>
                </Fade>
              </span>
              {/* </Tippy> */}
            </h1>
          </Fade>
          <Fade top duration={750} delay={750} when={state.isReady}>
            <h2 className="text-2xl sm:text-4xl xl:text-6xl font-bold mt-4 sm:mt-6 xl:mt-8  mb-10 lg:mb-20 text-center">
              {text?.third}
            </h2>
          </Fade>

          <Zoom duration={750} delay={500} when={state.isReady}>
            <img
              src="https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/3d-videos.svg"
              alt=""
              className="absolute right-32 top-0 w-[30px] sm:w-[40px] -z-[1] -rotate-[30deg] opacity-50"
            />
          </Zoom>

          <Zoom duration={750} delay={1250} when={state.isReady}>
            <img
              src="https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/animations.svg"
              alt=""
              className="absolute left-0 top-20 w-[40px] sm:w-[50px] -z-[1] -rotate-[30deg] opacity-50"
            />
          </Zoom>

          <Zoom duration={750} delay={1000} when={state.isReady}>
            <img
              src="https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/playables.svg"
              alt=""
              className="absolute right-0 top-40 w-[20px] sm:w-[30px] -z-[1] opacity-50"
            />
          </Zoom>

          <Zoom duration={750} delay={750} when={state.isReady}>
            <img
              src="https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/video-ads.svg"
              alt=""
              className="absolute left-[45%] bottom-0 w-[40px] sm:w-[50px] -z-[1] rotate-[15deg] opacity-50"
            />
          </Zoom>
        </div>

        <style jsx>
          {`
            @keyframes movemask {
              0% {
                -webkit-mask-position: 0 0;
                mask-position: 0 0;
              }

              to {
                -webkit-mask-position: 114px 0;
                mask-position: 114px 0;
              }
            }
            .underlined {
              position: relative;
            }

            .underlined:after,
            .underlined:before {
              position: absolute;
              width: 100%;
              height: 11px;
              bottom: 10px;
              left: 0;
              background: #000;
              content: '';
            }
            .underlined:after {
              width: 0;
              transition: all 0.6s;
              background: #0083ff;
            }

            .underlined:before {
              opacity: 0.2;
            }

            .underlined:hover:after,
            .underlined:hover:before {
              -webkit-animation: movemask 2s linear infinite;
              animation: movemask 2s linear infinite;
            }

            .underlined:hover:after {
              width: 100%;
              transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
              background: #0083ff;
            }
            .underlined-waved:after,
            .underlined-waved:before {
              bottom: 0px !important;
              -webkit-mask: url(https://derrint.sirv.com/Images/simple-duck-studios/home/underline-waved.svg);
              mask: url(https://derrint.sirv.com/Images/simple-duck-studios/home/underline-waved.svg);
            }

            @media only screen and (max-width: 1024px) {
              .underlined:after,
              .underlined:before {
                bottom: -10px !important;
                -webkit-animation: movemask 2s linear infinite;
                animation: movemask 2s linear infinite;
              }

              .underlined:after {
                width: 100%;
                transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
                background: #0083ff;
              }
            }
          `}
        </style>
      </Section>
    </Background>
  );
};

export default Banner;
