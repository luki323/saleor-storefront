import {IntlProvider} from '@/i18n/components/IntlProvider';

import type {IntlProviderProps} from '@/i18n/components/IntlProvider';
import type {ReactNode} from 'react';

type Props = {
  readonly children: ReactNode;
  readonly params: Pick<IntlProviderProps, 'channel' | 'locale'>;
};

export default function HomeLayout({
  children,
  params: {channel, locale},
}: Props) {
  return (
    <IntlProvider channel={channel} locale={locale}>
      {children}
    </IntlProvider>
  );
}
