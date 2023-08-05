import {IntlProvider as ReactIntlProvider} from '@/i18n/react-intl';
import type {PropsWithChildren} from '@/lib/types/react';

import type {AvailableLocale} from '../consts';
import {getIntl} from '../get-intl';

interface Props {
  readonly locale: AvailableLocale;
}

export async function IntlProvider({
  locale: localeProp,
  children,
}: PropsWithChildren<Props>) {
  const {locale, defaultLocale, messages} = await getIntl(localeProp);

  return (
    <ReactIntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}>
      {children}
    </ReactIntlProvider>
  );
}
