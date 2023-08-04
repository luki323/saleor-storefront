import {FormattedMessage} from 'react-intl';

import {IntlLink} from '@/i18n/components/IntlLink';
import {ROUTE} from '@/lib/consts/consts';
import {cn} from '@/lib/tools/cn';

export function ForgotPasswordLink() {
  return (
    <IntlLink
      href={ROUTE.FORGOT_PASSWORD}
      className={cn(
        'self-start text-sm text-grey hover:text-inherit hover:underline',
      )}>
      <FormattedMessage defaultMessage="Forgot password?" id="V/JHlm" />
    </IntlLink>
  );
}
