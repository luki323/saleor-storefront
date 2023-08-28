import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {cn} from '@/lib/tools/cn';

import {UserNameForm} from './UserNameForm';

export async function UserNameSection() {
  const intl = await getIntl(getLocale());

  return (
    <section className={cn('space-y-2')}>
      <h3 className={cn('font-medium')}>
        {intl.formatMessage({
          defaultMessage: 'User name',
          id: 'o7nzDs',
        })}
      </h3>
      <UserNameForm />
    </section>
  );
}
