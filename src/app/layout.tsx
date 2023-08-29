import '@/styles/globals.css';

import {DEFAULT_LOCALE} from '@/i18n/consts';
import type {PropsWithChildren} from '@/lib/types/react';
import {fontSans} from '@/styles/fonts';

import {Toaster} from './_components/Toaster';

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang={DEFAULT_LOCALE} className={fontSans.className}>
      <body>
        {children}
        <Toaster expand />
      </body>
    </html>
  );
}
