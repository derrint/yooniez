import React from 'react';

import 'tippy.js/animations/scale.css';
import Marquee from 'react-fast-marquee';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';

const Chars = () => {
  const items = [
    {
      id: 1,
      label: 'Playables',
      href: '/services/playables',
      asset: '/assets/images/illustrations/yooniez-char-6.png',
    },
    {
      id: 2,
      label: 'App Video Ads',
      href: '/services/app-video-ads',
      asset: '/assets/images/illustrations/yooniez-char-7.png',
    },
    {
      id: 3,
      label: 'Lyric Video ',
      href: '/services/lyric-video',
      asset: '/assets/images/illustrations/yooniez-char-8.png',
    },

    {
      id: 4,
      label: 'Animations',
      href: '/services/animations',
      asset: '/assets/images/illustrations/yooniez-char-9.png',
    },
    {
      id: 5,
      label: 'Video Ads',
      href: '/services/video-ads',
      asset: '/assets/images/illustrations/yooniez-char-10.png',
    },
  ];

  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setState({ ...state, isReady: true });

    return () => {};
  }, []);

  return (
    <Background color="bg-primary" className="relative">
      <div className="relative h-full flex flex-col gap-10 justify-center z-[1] py-6">
        <Marquee gradient={false} speed={80}>
          <Fade bottom duration={750} delay={750} cascade>
            <div className={`flex w-full justify-around `}>
              {items.map((item: any) => (
                <div key={item.id} className="mx-2 md:mx-3 lg:mx-4">
                  <img
                    src={item.asset}
                    alt=""
                    className={`w-[120px] md:w-[200px] lg:w-[350px]`}
                  />
                </div>
              ))}
            </div>
          </Fade>
        </Marquee>
        <Marquee gradient={false} speed={80} direction="right">
          <Fade bottom duration={750} delay={750} cascade>
            <div className={`flex w-full justify-around `}>
              {items.map((item: any) => (
                <div key={item.id} className="mx-2 md:mx-3 lg:mx-4">
                  <img
                    src={item.asset}
                    alt=""
                    className={`w-[120px] md:w-[200px] lg:w-[350px]`}
                  />
                </div>
              ))}
            </div>
          </Fade>
        </Marquee>
      </div>
    </Background>
  );
};

export default Chars;
