import {IntlProvider} from '@/i18n/components/IntlProvider';
import type {AvailableChannel} from '@/i18n/consts';
import {ChannelContext} from '@/i18n/context/channel-context';
import {LocaleContext} from '@/i18n/context/locale-context';
import {assertAvailableChannel} from '@/i18n/tools/assert-available-channel';
import {assertAvailableLocale} from '@/i18n/tools/assert-available-locale';
import {formatLocale} from '@/i18n/tools/format-locale';
import type {PropsWithChildren} from '@/lib/types/react';

interface Props {
  readonly params: {
    readonly channel: AvailableChannel;
    readonly locale: string;
  };
}

export default function HomeLayout({
  children,
  params: {channel, locale},
}: PropsWithChildren<Props>) {
  assertAvailableChannel(channel);

  const formattedLocale = formatLocale(locale);
  assertAvailableLocale(formattedLocale);

  return (
    <ChannelContext.Provider value={channel}>
      <LocaleContext.Provider value={formattedLocale}>
        <IntlProvider locale={formattedLocale}>{children}</IntlProvider>
      </LocaleContext.Provider>
    </ChannelContext.Provider>
  );
}
