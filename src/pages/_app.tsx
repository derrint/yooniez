import { DAppProvider, Config, Mainnet } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';
import { AppProps } from 'next/app';
import { Provider } from 'overmind-react';

import { Meta } from '@components/layout/Meta';
import { store } from '@overmind/index';
import { Footer } from '@templates/Footer';
import { Header } from '@templates/Header';
import { AppConfig } from '@utils/AppConfig';

import '@styles/global.css';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider value={store}>
    <DAppProvider config={config}>
      <div className="antialiased text-black bg-white">
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </DAppProvider>
  </Provider>
);

export default MyApp;
