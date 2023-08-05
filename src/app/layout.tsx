import '@/styles/globals.css';

import {DEFAULT_LOCALE} from '@/i18n/consts';
import type {PropsWithChildren} from '@/lib/types/react';
import {fontSans} from '@/styles/fonts';

import {QueryProvider} from './_components/QueryProvider';
import {Toaster} from './_components/Toaster';

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang={DEFAULT_LOCALE} className={fontSans.className}>
      <body>
        <Toaster />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
