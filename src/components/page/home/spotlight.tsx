import React from 'react';

import Link from 'next/link';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Fade } from 'react-reveal';

import { Section } from '@components/layout';
import { Modal } from '@components/modal';
import { useActions } from '@overmind/index';

const Spotlight = () => {
  const { showModal } = useActions();

  const features = [
    'We support all major networks',
    'Our Playables are curated to your Campaign Goals',
    'Playables are key to mobile app industry success',
  ];

  const videoUrls = [
    'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-1.mp4',
    'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-2.mp4',
    'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-3.mp4',
    'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-4.mp4',
  ];

  const gifs = [
    '/assets/images/services/playable-1.gif',
    '/assets/images/services/playable-2.gif',
    '/assets/images/services/playable-3.gif',
    '/assets/images/services/playable-4.gif',
  ];

  const [videoUrl, setVideoUrl] = React.useState(videoUrls[0]);

  return (
    <Section yPadding="py-10 sm:py-20">
      <div className="relative flex flex-col sm:flex-row gap-10 lg:gap-20">
        <Fade bottom duration={750} delay={250} cascade>
          <div className="w-full sm:w-7/12">
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold mb-1 lg:mb-3">
              <span className="block sm:inline">
                Maximize your conversion rates with
              </span>
            </h3>
            <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-bold text-secondary mb-8">
              Playable Ads
            </h1>
            <p className="lg:text-lg text-gray-500">
              Playable Ads are our specialty, and time & time again we have
              partnered with mobile app compainies to achieve successful ad
              results.
              <br />
              <br />
              Playables allow users to experience your vision through an
              interactive experience.
              <br />
              <br />
              This interactive advertisement format give users to opportunity to
              try core app features & functionality.
            </p>
            <ul className="mt-10">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="text-lg sm:text-xl lg:text-2xl flex items-start gap-3 lg:gap-4 mt-4"
                >
                  <BsFillCheckCircleFill
                    color="#26CD7D"
                    size={16}
                    className="mt-2"
                  />
                  <div className="flex w-full">{item}</div>
                </li>
              ))}
            </ul>
            <div className="flex mt-10 justify-center sm:justify-start">
              <Link href="/services/playables" passHref>
                <button
                  // onClick={() => {
                  //   setVideoUrl(videoUrls[0]);
                  //   showModal('video-player');
                  // }}
                  className="lg:text-lg bg-primary px-6 py-4 rounded-full"
                >
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={750} delay={500} cascade>
          <div className="w-full sm:w-5/12 flex flex-col gap-5 lg:gap-10">
            <div>
              <img
                src={gifs[0]}
                className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl lg:rounded-3xl w-full"
                alt=""
                onClick={() => {
                  setVideoUrl(videoUrls[0]);
                  showModal('video-player');
                }}
              />
              {/* <Image
                src={Playable1}
                alt=""
                className="transition-all duration-300 rounded-2xl lg:rounded-3xl w-full"
                onClick={() => {
                  setVideoUrl(videoUrls[0]);
                  showModal('video-player');
                }}
              /> */}
            </div>
            <div className="flex gap-5 lg:gap-10">
              <div className="w-1/2">
                <img
                  src={gifs[3]}
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl lg:rounded-3xl w-full"
                  alt=""
                  onClick={() => {
                    setVideoUrl(videoUrls[3]);
                    showModal('video-player');
                  }}
                />
                {/* <Image
                  src={Playable4}
                  alt=""
                  className="transition-all duration-300 rounded-2xl lg:rounded-3xl w-full"
                  onClick={() => {
                    setVideoUrl(videoUrls[3]);
                    showModal('video-player');
                  }}
                /> */}
              </div>
              <div className="w-1/2">
                <img
                  src={gifs[1]}
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl lg:rounded-3xl w-full"
                  alt=""
                  onClick={() => {
                    setVideoUrl(videoUrls[1]);
                    showModal('video-player');
                  }}
                />
                {/* <Image
                  src={Playable2}
                  alt=""
                  className="transition-all duration-300 rounded-2xl lg:rounded-3xl w-full"
                  onClick={() => {
                    setVideoUrl(videoUrls[1]);
                    showModal('video-player');
                  }}
                /> */}
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <Modal name="video-player" closeButton={{ color: 'white' }}>
        <div className="text-left bg-white shadow-xl rounded-3xl">
          <>
            <div
              className="flex justify-center"
              dangerouslySetInnerHTML={{
                __html: `
                  <video
                    loop
                    controls
                    autoplay
                    playsinline
                    preload="metadata"
                    class="rounded-3xl max-h-[720px]"
                  >
                    <source src="${videoUrl}" type="video/mp4" />
                  </video>`,
              }}
            />
          </>
        </div>
      </Modal>
    </Section>
  );
};

export default Spotlight;
