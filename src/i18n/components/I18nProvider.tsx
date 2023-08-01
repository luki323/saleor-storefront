import type {ReactNode} from 'react';

import {ChannelContext} from '../channel-context';
import type {AvailableChannel} from '../consts';
import {DEFAULT_LOCALE} from '../consts';
import {LocaleContext} from '../locale-context';
import {formatLocale} from '../tools/format-locale';
import {loadCompiledMessages} from '../tools/load-compiled-messages';
import {IntlProvider} from './IntlProvider';

export interface I18nProviderProps {
  readonly children: ReactNode;
  readonly channel: AvailableChannel;
  readonly locale: string;
}

export async function I18nProvider({
  children,
  channel,
  locale,
}: I18nProviderProps) {
  const formattedLocale = formatLocale(locale);
  const compiledMessages = await loadCompiledMessages(formattedLocale);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={DEFAULT_LOCALE}
      messages={compiledMessages}>
      <ChannelContext.Provider value={channel}>
        <LocaleContext.Provider value={formattedLocale}>
          {children}
        </LocaleContext.Provider>
      </ChannelContext.Provider>
    </IntlProvider>
  );
}
