import { Noto_Sans } from '@next/font/google';
import { ThemeProvider } from 'next-themes';

import type { AppProps } from 'next/app';
import '../styles/globals.css';

const noto = Noto_Sans({
  preload: true,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto',
  // subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <main className={`${noto.className}`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
