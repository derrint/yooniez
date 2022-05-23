import React from 'react';

import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Modal } from '@components/modal';
import { useActions } from '@overmind/index';

const Spotlight = () => {
  const { showModal } = useActions();

  const videoUrls = [
    'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
  ];

  const [videoUrl, setVideoUrl] = React.useState(videoUrls[0]);

  return (
    <Background color="bg-[url('/assets/images/bgs/bg-video.png')] bg-cover">
      <Fade bottom duration={750} delay={500} cascade>
        <div className="relative aspect-video flex justify-center items-center">
          <a
            onClick={() => {
              setVideoUrl(videoUrls[0]);
              showModal('video-player');
            }}
            className="flex flex-col items-center gap-5 cursor-pointer"
          >
            <img
              src="/assets/images/vectors/play.svg"
              alt=""
              className="w-[40px] sm:w-[80px]"
            />
            <h3 className="text-white uppercase font-headline text-4xl">
              Play Video
            </h3>
          </a>
        </div>
      </Fade>

      <Modal name="video-player" closeButton={{ color: 'black' }}>
        <div className="text-left bg-white shadow-xl ">
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
                    class="max-h-[720px]"
                  >
                    <source src="${videoUrl}" type="video/mp4" />
                  </video>`,
              }}
            />
          </>
        </div>
      </Modal>
    </Background>
  );
};

export default Spotlight;
