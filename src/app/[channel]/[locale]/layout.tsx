import type {ReactNode} from 'react';

import type {IntlProviderProps} from '@/i18n/components/IntlProvider';
import {IntlProvider} from '@/i18n/components/IntlProvider';

interface Props {
  readonly children: ReactNode;
  readonly params: Pick<IntlProviderProps, 'channel' | 'locale'>;
}

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
