import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {cn} from '@/lib/tools/cn';

import {RequestEmailChangeForm} from './RequestEmailChangeForm';

export async function RequestEmailChangeSection() {
  const intl = await getIntl(getLocale());

  return (
    <section className={cn('space-y-2')}>
      <h3 className={cn('font-medium')}>
        {intl.formatMessage({
          defaultMessage: 'Request email change',
          id: 'HrdHC1',
        })}
      </h3>
      <RequestEmailChangeForm />
    </section>
  );
}
