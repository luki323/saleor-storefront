import {ChannelContext} from '../contexts/channel-context';
import {LocaleContext} from '../contexts/locale-context';
import {formatLocale} from '../tools/format-locale';

import {MessagesProvider} from './MessagesProvider';

import type {AvailableChannel} from '../consts';
import type {ReactNode} from 'react';

export type IntlProviderProps = {
  readonly children: ReactNode;
  readonly channel: AvailableChannel;
  readonly locale: string;
};

export function IntlProvider({children, channel, locale}: IntlProviderProps) {
  const formattedLocale = formatLocale(locale);

  return (
    <ChannelContext.Provider value={channel}>
      <LocaleContext.Provider value={formattedLocale}>
        <MessagesProvider locale={formattedLocale}>{children}</MessagesProvider>
      </LocaleContext.Provider>
    </ChannelContext.Provider>
  );
}
