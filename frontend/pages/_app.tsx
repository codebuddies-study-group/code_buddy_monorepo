import '../styles/globals.css';
import '../components/header/Header.css';
import './home/home.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
