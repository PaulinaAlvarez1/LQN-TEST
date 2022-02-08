// @vendors
import { ApolloProvider } from '@apollo/client';
import client from "../apollo-client";
import { ThemeProvider } from '@mui/material/styles';

// @theme
import { theme } from '../theme';

// @styles
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
