import '@/styles/globals.css';
// It'll work only for server components
import 'core-js/modules/web.url-search-params.delete.js';

import {IntlProvider} from '@/i18n/components/IntlProvider';
import type {AvailableChannel, AvailableLocale} from '@/i18n/consts';
import {ChannelContext} from '@/i18n/context/channel-context';
import {LocaleContext} from '@/i18n/context/locale-context';
import type {PropsWithChildren} from '@/lib/types/react';
import {fontSans} from '@/styles/fonts';

import {Toaster} from './_components/Toaster';

interface Props {
  readonly params: {
    readonly channel: AvailableChannel;
    readonly locale: AvailableLocale;
  };
}

export default function HomeLayout({
  children,
  params: {channel, locale},
}: PropsWithChildren<Props>) {
  return (
    <html lang={locale} className={fontSans.className}>
      <body>
        <ChannelContext.Provider value={channel}>
          <LocaleContext.Provider value={locale}>
            <IntlProvider locale={locale}>{children}</IntlProvider>
          </LocaleContext.Provider>
        </ChannelContext.Provider>
        <Toaster expand />
      </body>
    </html>
  );
}
