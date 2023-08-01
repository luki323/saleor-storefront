import type {ReactNode} from 'react';

import type {I18nProviderProps} from '@/i18n/components/I18nProvider';
import {I18nProvider} from '@/i18n/components/I18nProvider';

interface Props {
  readonly children: ReactNode;
  readonly params: Pick<I18nProviderProps, 'channel' | 'locale'>;
}

export default function HomeLayout({
  children,
  params: {channel, locale},
}: Props) {
  return (
    <I18nProvider channel={channel} locale={locale}>
      {children}
    </I18nProvider>
  );
}
