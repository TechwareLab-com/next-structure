import CssBaseline from '@material-ui/core/CssBaseline';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Saas App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
