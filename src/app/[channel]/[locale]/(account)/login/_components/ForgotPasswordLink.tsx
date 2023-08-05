import {IntlLink} from '@/i18n/components/IntlLink';
import {FormattedMessage} from '@/i18n/react-intl';
import {ROUTE} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

export function ForgotPasswordLink() {
  return (
    <IntlLink
      href={formatPathname([ROUTE.FORGOT_PASSWORD])}
      className={cn(
        'self-start text-sm text-grey hover:text-inherit hover:underline',
      )}>
      <FormattedMessage defaultMessage="Forgot password?" id="V/JHlm" />
    </IntlLink>
  );
}
