import {IntlLink} from '@/i18n/components/IntlLink';
import {FormattedMessage} from '@/i18n/react-intl';
import {buttonStyles} from '@/lib/components/ui/Button';
import {cn} from '@/lib/tools/cn';

interface Props {
  readonly className?: string;
}

export function HomeLink({className}: Props) {
  return (
    <IntlLink href="/" className={cn('flex items-center gap-2')}>
      <span
        className={cn(
          buttonStyles({variant: 'outline', size: 'icon'}),
          'h-7 w-7',
        )}
      />
      <span className={cn('text-sm font-semibold uppercase', className)}>
        <FormattedMessage defaultMessage="Storefront" id="LmKz3g" />
      </span>
    </IntlLink>
  );
}
