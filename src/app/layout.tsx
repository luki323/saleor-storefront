import '@/styles/globals.css';

import type {ReactNode} from 'react';

import {DEFAULT_LOCALE} from '@/i18n/consts';
import {fontSans} from '@/styles/fonts';

import {QueryProvider} from './_components/QueryProvider';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({children}: Props) {
  return (
    <html lang={DEFAULT_LOCALE} className={fontSans.className}>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
