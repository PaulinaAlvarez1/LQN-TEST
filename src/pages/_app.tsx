import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from "../apollo-client";

import '../lib/i18n';
import { useApollo } from '../lib/apollo';

import 'normalize.css/normalize.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
