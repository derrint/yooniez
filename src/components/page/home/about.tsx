/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Fade, Zoom } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const About = () => {
  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      setState({ ...state, isReady: true });
    }, 250);

    return () => {};
  }, []);

  return (
    <Background
      color="bg-primary"
      className="
        relative z-[2]
        after:content-[''] after:absolute after:-top-40 after:left-0
        after:w-full after:h-40
        after:bg-gradient-to-b after:from-transparent after:to-primary 
      "
    >
      <Section yPadding="py-8 sm:py-16 lg:pb-32" id="about">
        <div className="relative flex flex-col justify-center z-[1]">
          <div>
            <Fade left duration={750} delay={0} when={state.isReady}>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-3 lg:mb-5 text-secondary font-script tracking-tighter">
                  About
                </h3>

                <h1 className="text-xl sm:text-2xl lg:text-[70px] lg:leading-[100px] mb-3 lg:mb-5 text-white font-headline">
                  7777
                  <img
                    src="/assets/images/illustrations/yooniez-red.png"
                    alt=""
                    className="inline-block w-20 mx-5 -mt-3"
                  />
                  Character
                  <br />
                  unique NFT Living
                  <img
                    src="/assets/images/vectors/burst-star.svg"
                    alt=""
                    className="inline-block w-20 mx-5 -mt-3"
                  />
                  on the
                  <br />
                  Ethereum
                  <img
                    src="/assets/images/illustrations/yooniez-yellow.png"
                    alt=""
                    className="inline-block w-20 mx-5 -mt-3"
                  />
                  Blockchain
                </h1>

                <p className="lg:text-xl lg:leading-10 font-light text-white">
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </p>
              </div>
            </Fade>
          </div>

          <Zoom duration={750} delay={250} when={state.isReady}>
            <img
              src="/assets/images/vectors/arrow-swirly.svg"
              alt=""
              className="absolute hidden sm:block right-0 lg:right-40 -bottom-20 w-[40px] sm:w-[80px] -z-[1]"
            />
          </Zoom>
        </div>
      </Section>
    </Background>
  );
};

export default About;
