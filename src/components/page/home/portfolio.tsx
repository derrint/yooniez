import React from 'react';

import 'tippy.js/animations/scale.css';
import Marquee from 'react-fast-marquee';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';

const Portfolio = () => {
  const items = [
    {
      id: 1,
      label: 'Playables',
      href: '/services/playables',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/portfolio-1.png',
    },
    {
      id: 2,
      label: 'App Video Ads',
      href: '/services/app-video-ads',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/portfolio-2.png',
    },
    {
      id: 3,
      label: 'Lyric Video ',
      href: '/services/lyric-video',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/portfolio-7.jpg',
    },

    {
      id: 4,
      label: 'Animations',
      href: '/services/animations',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/portfolio-4.png',
    },
    {
      id: 5,
      label: 'Video Ads',
      href: '/services/video-ads',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/portfolio-8.jpg',
    },
    {
      id: 6,
      label: 'Video Ads',
      href: '/services/video-ads',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/portfolio-6.png',
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
    <Background color="bg-white" className="relative">
      <div className="relative h-full flex flex-col justify-center z-[1] py-6">
        <Marquee gradient={false} speed={80}>
          <Fade bottom duration={750} delay={750} cascade>
            <div className={`flex w-full justify-around `}>
              {items.map((item: any) => (
                <div key={item.id} className="mx-2 md:mx-3 lg:mx-4">
                  <img
                    src={item.asset}
                    alt=""
                    className={`w-[120px] md:w-[200px] lg:w-[280px] rounded-3xl ${
                      item.id % 2 === 0 ? 'mt-12 md:mt-20 lg:mt-32' : ''
                    }`}
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

export default Portfolio;
