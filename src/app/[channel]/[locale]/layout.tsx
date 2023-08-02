import type {ReactNode} from 'react';

import type {I18nProviderProps} from '@/i18n/components/I18nProvider';
import {I18nProvider} from '@/i18n/components/I18nProvider';

export interface HomeLayoutProps {
  readonly children: ReactNode;
  readonly params: Pick<I18nProviderProps, 'channel' | 'locale'>;
}

export default function HomeLayout({
  children,
  params: {channel, locale},
}: HomeLayoutProps) {
  return (
    <I18nProvider channel={channel} locale={locale}>
      {children}
    </I18nProvider>
  );
}
