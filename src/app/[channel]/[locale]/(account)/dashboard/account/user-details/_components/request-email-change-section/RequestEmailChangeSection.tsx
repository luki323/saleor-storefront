import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';

import {Section} from '../Section';
import {RequestEmailChangeForm} from './RequestEmailChangeForm';

export async function RequestEmailChangeSection() {
  const intl = await getIntl(getLocale());

  return (
    <Section
      name={intl.formatMessage({
        defaultMessage: 'Request email change',
        id: 'HrdHC1',
      })}>
      <RequestEmailChangeForm />
    </Section>
  );
}
