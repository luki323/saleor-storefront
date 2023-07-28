import {createIntl, createIntlCache} from '@formatjs/intl';
import {useMemo} from 'react';

import {DEFAULT_LOCALE} from '../consts';
import {useLocale} from '../contexts/locale-context';
import {useMessages} from '../contexts/messages-context';

export function useIntl() {
  const locale = useLocale();
  const messages = useMessages();

  const intl = useMemo(() => {
    return createIntl(
      {locale, defaultLocale: DEFAULT_LOCALE, messages},
      createIntlCache(),
    );
  }, [locale, messages]);

  return {intl};
}
