import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';

import {Section} from '../Section';
import {AccountDeletionAlertDialog} from './AccountDeletionAlertDialog';

export async function AccountDeletionSection() {
  const intl = await getIntl(getLocale());

  return (
    <Section
      name={intl.formatMessage({
        defaultMessage: 'Account deletion',
        id: 'FbNOxp',
      })}>
      <AccountDeletionAlertDialog />
    </Section>
  );
}
