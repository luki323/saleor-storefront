import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {cn} from '@/lib/tools/cn';

import {ChangePassowrdForm} from './ChangePassowrdForm';

export async function ChangePasswordSection() {
  const intl = await getIntl(getLocale());

  return (
    <section className={cn('space-y-2')}>
      <h3 className={cn('font-medium')}>
        {intl.formatMessage({
          defaultMessage: 'Change password',
          id: 'L4nXIc',
        })}
      </h3>
      <ChangePassowrdForm />
    </section>
  );
}
