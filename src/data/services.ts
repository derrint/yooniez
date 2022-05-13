import ThreeDVideos from '@images/services/3d-videos.gif';
import Animations from '@images/services/animations.gif';
import AppVideoAds from '@images/services/app-video-ads.gif';
import BrandGuidelines from '@images/services/brand-guidelines.gif';
import LiveVideos from '@images/services/live-videos.gif';
import LyricVideo from '@images/services/lyric-video.gif';
import Playable from '@images/services/playable.gif';
import PromoGifs from '@images/services/promo-gifs.gif';
import RapAds from '@images/services/rap-ads.gif';
import Storyboarding from '@images/services/storyboarding.gif';
import VideoAds from '@images/services/video-ads.gif';

const services = [
  {
    id: 'playables',
    label: 'Playables',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/playables.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-1.png',
      // images: [
      //   'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-1.png',
      //   'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-2.png',
      //   'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-3.png',
      //   'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-4.png',
      // ],
      videos: [
        'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-1.mp4',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-2.mp4',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-3.mp4',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/playable-4.mp4',
      ],
      gifObj: Playable,
      gif: '/assets/images/services/playable.gif',
      htmls: [
        {
          id: 1,
          file: '/assets/htmls/CandlestickHiddenObject_Playable_1_1.html',
          classNames: 'w-[800px] h-[450px]',
        },
        {
          id: 2,
          file: '/assets/htmls/Wordle_Playable.html',
          classNames: 'w-[800px] h-[450px]',
        },
        {
          id: 3,
          file: '/assets/htmls/BlackjackFreeplayCandlestick_Playable_1_1.html',
          classNames: 'w-[800px] h-[450px]',
        },
        {
          id: 4,
          file: '/assets/htmls/CoalMiningInc_Playable.html',
          classNames: 'w-[800px] h-[450px]',
        },
      ],
    },
    href: '/services/playables',
    row: 1,
  },
  {
    id: 'video-ads',
    label: 'Video Ads',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/video-ads.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/video-ads.png',
      video:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/video-ads.mp4',
      gifObj: VideoAds,
      gif: '/assets/images/services/video-ads.gif',
    },
    href: '/services/video-ads',
    row: 2,
  },
  {
    id: 'storyboarding',
    label: 'Storyboarding',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/storyboarding.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/storyboarding.png',
      images: [
        'https://derrint.sirv.com/Images/simple-duck-studios/services/storyboarding-1.jpg',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/storyboarding-2.jpg',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/storyboarding-6.jpg',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/storyboarding-7.jpg',
      ],
      gifObj: Storyboarding,
      gif: '/assets/images/services/storyboarding.gif',
    },
    href: '/services/storyboarding',
    row: 3,
  },
  {
    id: 'app-video-ads',
    label: 'App Video Ads',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/app-video-ads.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/app-video-ads.png',
      video:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/app-video-ads.mp4',
      gifObj: AppVideoAds,
      gif: '/assets/images/services/app-video-ads.gif',
    },
    href: '/services/app-video-ads',
    row: 1,
  },
  {
    id: '3d-videos',
    label: '3D Videos',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/3d-videos.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/3d-videos.png',
      video:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/3d-videos.mp4',
      gifObj: ThreeDVideos,
      gif: '/assets/images/services/3d-videos.gif',
    },
    href: '/services/3d-videos',
    row: 2,
  },
  {
    id: 'brand-guidelines',
    label: 'Brand Guidelines',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/brand-guidelines.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/brand-guidelines.png',
      gifObj: BrandGuidelines,
      gif: '/assets/images/services/brand-guidelines.gif',
    },
    href: '/services/brand-guidelines',
    row: 3,
  },
  {
    id: 'lyric-video',
    label: 'Lyric Video',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/lyric-video.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/lyric-video.png',
      video:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/lyric-video.mp4',
      gifObj: LyricVideo,
      gif: '/assets/images/services/lyric-video.gif',
    },
    href: '/services/lyric-video',
    row: 1,
  },
  {
    id: 'live-videos',
    label: 'Live Videos',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/live-videos.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/live-videos.png',
      videos: [
        'https://derrint.sirv.com/Images/simple-duck-studios/services/live-videos-1.mp4',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/live-videos-2.mp4',
      ],
      gifObj: LiveVideos,
      gif: '/assets/images/services/live-videos.gif',
    },
    href: '/services/live-videos',
    row: 2,
  },
  {
    id: 'promo-gifs',
    label: 'Promo GIFS',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/promo-gifs.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/promo-gifs.gif',
      gifObj: PromoGifs,
      gif: '/assets/images/services/promo-gifs.gif',
    },
    href: '/services/promo-gifs',
    row: 3,
  },
  {
    id: 'animations',
    label: 'Animations',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/animations.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/animations.png',
      videos: [
        'https://derrint.sirv.com/Images/simple-duck-studios/services/animations-1.mp4',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/animations-2.mp4',
        'https://derrint.sirv.com/Images/simple-duck-studios/services/animations-3.mp4',
      ],
      gifObj: Animations,
      gif: '/assets/images/services/animations.gif',
    },
    href: '/services/animations',
    row: 2,
  },
  {
    id: 'rap-ads',
    label: 'Rap Ads',
    asset: {
      illustration:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/illustrations/rap-ads.svg',
      image:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/rap-ads.png',
      video:
        'https://derrint.sirv.com/Images/simple-duck-studios/services/rap-ads.mp4',
      gifObj: RapAds,
      gif: '/assets/images/services/rap-ads.gif',
    },
    href: '/services/rap-ads',
    row: 3,
  },
];

export default services;
