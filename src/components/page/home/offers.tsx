import { Background } from '@components/background';
import { Section } from '@components/layout';

const Offers = () => {
  const offers = [
    {
      id: 1,
      label: 'Engage your audience',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/offers-flash.png',
    },
    {
      id: 2,
      label: 'Obtain quality users',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/offers-user.png',
    },
    {
      id: 3,
      label: 'Optimize conversion',
      asset:
        'https://derrint.sirv.com/Images/simple-duck-studios/home/offers-tools.png',
    },
  ];
  return (
    <Background color="bg-primary" className="overflow-hidden">
      <Section>
        <div className="relative pb-10 lg:min-h-[640px] flex flex-col justify-center items-center text-center gap-1 lg:gap-4">
          <h3 className="text-lg sm:text-2xl">What we offer</h3>
          <h1 className="text-3xl sm:text-5xl lg:text-[64px] lg:leading-[64px] font-bold mb-5">
            Increase your performance & growth
          </h1>
          <p className="lg:text-lg lg:w-2/3">
            We produce high quality video ads, static banners and playables to
            reach your target audience and your business growth. We design the
            creative concept with our expertise & knowledge of mobile games &
            apps marketing.
          </p>

          <div className="flex flex-col items-center sm:flex-row w-full gap-8 mt-8 sm:mt-16 lg:mt-20 z-[1]">
            {offers.map((item) => (
              <div
                key={item.id}
                className={`w-2/3 sm:w-1/3 bg-white rounded-3xl px-10 py-8 rounded-br-none flex flex-col items-center relative ${
                  item.id === 2 ? 'sm:mt-5 sm:-mb-5' : ''
                }
                after:content-[''] after:absolute after:-z-[1] after:bottom-0 after:bg-black after:opacity-10 after:-right-[23%] lg:after:-right-[16%] after:h-[70%] after:w-[75%] lg:after:w-[85%] after:skew-x-[315deg]
                `}
              >
                <img
                  src={item.asset}
                  alt=""
                  className="w-12 lg:w-16 aspect-square max-w-none"
                />
                <h4 className="lg:text-lg mt-4">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Background>
  );
};

export default Offers;
