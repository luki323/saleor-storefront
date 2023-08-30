import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';

import {Section} from '../Section';
import {ChangePassowrdForm} from './ChangePassowrdForm';

export async function ChangePasswordSection() {
  const intl = await getIntl(getLocale());

  return (
    <Section
      name={intl.formatMessage({
        defaultMessage: 'Change password',
        id: 'L4nXIc',
      })}>
      <ChangePassowrdForm />
    </Section>
  );
}
