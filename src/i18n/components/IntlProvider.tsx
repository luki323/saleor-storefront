import {LocaleContext} from '../contexts/locale-context';
import {formatLocale} from '../tools/format-locale';

import {MessagesProvider} from './MessagesProvider';

import type {ReactNode} from 'react';

type Props = {
  readonly children: ReactNode;
  readonly locale: string;
};

export function IntlProvider({children, locale}: Props) {
  const formattedLocale = formatLocale(locale);

  return (
    <LocaleContext.Provider value={formattedLocale}>
      <MessagesProvider locale={formattedLocale}>{children}</MessagesProvider>
    </LocaleContext.Provider>
  );
}
