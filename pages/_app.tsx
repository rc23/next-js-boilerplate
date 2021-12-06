import { GlobalStyle } from '../styles/globals';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
