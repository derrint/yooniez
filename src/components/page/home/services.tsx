import React from 'react';

import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale.css';
import Marquee from 'react-fast-marquee';
import { Fade } from 'react-reveal';
import { followCursor } from 'tippy.js';

import { Background } from '@components/background';
import { services } from '@data/index';

const Services = () => {
  const getItemsFromRow = (rowNumber: number) => {
    return services.filter((item) => item.row === rowNumber);
  };

  const rows = [
    {
      number: 1,
      speed: 50,
    },
    {
      number: 2,
      speed: 40,
    },
    {
      number: 3,
      speed: 60,
    },
  ];

  const [loadedGifs, setLoadedGifs] = React.useState([] as any);

  return (
    <Fade bottom duration={750} delay={250}>
      <Background
        id="services"
        color="bg-[url(https://derrint.sirv.com/Images/simple-duck-studios/home/bg-star.png)] bg-cover py-16 lg:py-0 z-[1] use-white-cursor
        after:content-[''] after:absolute after:z-[2] after:top-0 after:left-0 after:bg-black after:opacity-10 after:w-full after:h-full
        "
      >
        <Fade right duration={1250} delay={500} cascade>
          <div className="relative lg:min-h-[720px] flex flex-col justify-center items-center text-center text-white z-[3]">
            <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-bold mb-8">
              Our Services
            </h1>

            {rows.map((row) => (
              <Marquee key={row.number} gradient={false} speed={row.speed}>
                <div className={`flex w-full py-8 lg:py-12 justify-around `}>
                  {getItemsFromRow(row.number).map((item: any) => (
                    <div key={item.id} className="mx-8">
                      <Tippy
                        content={
                          <>
                            <img
                              src={item.asset.gif}
                              alt=""
                              className="w-40 lg:w-60 object-cover aspect-square max-w-none rounded-full transition all duration-200"
                              onLoad={() => {
                                setLoadedGifs((oldArray: any) => [
                                  ...oldArray,
                                  item.asset.gif,
                                ]);
                              }}
                            />
                            <div
                              className={`absolute top-0 left-0 w-40 lg:w-60 h-40 lg:h-60 bg-black bg-opacity-40 flex items-center justify-center rounded-full 
                              ${
                                loadedGifs.includes(item.asset.gif)
                                  ? 'hidden'
                                  : ''
                              }`}
                            >
                              <div className="lds-spinner">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                              </div>
                            </div>
                          </>
                          // <Image
                          //   src={item?.asset.gif}
                          //   alt=""
                          //   className="static w-40 lg:w-60 object-cover aspect-square max-w-none rounded-full transition all duration-200"
                          //   objectFit="cover"
                          //   width={200}
                          //   height={200}
                          // />
                        }
                        followCursor={true}
                        animation="scale"
                        plugins={[followCursor]}
                        allowHTML={true}
                      >
                        <h4 className="text-xl sm:text-2xl lg:text-[32px] inline-block hover:text-primary transition all duration-200">
                          {item.label}
                        </h4>
                      </Tippy>
                    </div>
                  ))}
                </div>
              </Marquee>
            ))}
          </div>
        </Fade>
      </Background>
    </Fade>
  );
};

export default Services;
