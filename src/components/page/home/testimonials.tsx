import React from 'react';

import Link from 'next/link';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      sender: 'Haley Yang, Manager & Product Marketing',
      company: 'Lion Studios',
      senderUrl: 'https://www.linkedin.com/in/haley-yang/',
      message:
        'Simple Duck satisfies our business needs for high quality creatives at a fast pace! The team is always open to adjust to our changing needs even post delivery. They are a great partner to work with!',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/testimonials/logo-lion.png',
    },
  ];
  return (
    <Fade bottom duration={750} delay={250}>
      <Background color="bg-primary" className="overflow-hidden">
        <Section>
          <Fade bottom duration={750} delay={500} cascade>
            <div className="relative pb-10 flex flex-col justify-center items-center text-center gap-1 lg:gap-4">
              {/* <h3 className="text-lg sm:text-2xl">What we offer</h3> */}
              <h1 className="text-3xl sm:text-5xl lg:text-[64px] lg:leading-[64px] font-bold mb-0">
                Testimonials&quot;
              </h1>
              <p className="lg:text-lg lg:w-2/3">See what people are saying</p>

              <div className="flex items-center justify-center sm:flex-row w-full gap-8 mt-8 sm:mt-8 lg:mt-10 z-[1]">
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className={`max-w-[600px] bg-white rounded-3xl px-10 py-12 rounded-br-none flex flex-col items-center relative 
                after:content-[''] 
                after:absolute 
                after:-z-[1] 
                after:bottom-0 
                after:bg-black 
                after:opacity-10 
                after:-right-[14%] 
                  md:after:-right-[15%] 
                  lg:after:-right-[18%] 
                after:h-[70%] 
                after:w-[75%] 
                  lg:after:w-[85%] 
                after:skew-x-[315deg]
                `}
                  >
                    <img
                      src={item.asset}
                      alt=""
                      className="h-12 lg:h-16 aspect-auto max-w-none"
                    />
                    <p className="lg:text-lg mt-8">{item.message}</p>
                    <h4 className="text-gray-500 hover:text-secondary mt-8">
                      <Link href={item.senderUrl} passHref>
                        <a target="_blank">
                          {item.sender} &#8212; {item.company}
                        </a>
                      </Link>
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </Section>
      </Background>
    </Fade>
  );
};

export default Testimonials;
