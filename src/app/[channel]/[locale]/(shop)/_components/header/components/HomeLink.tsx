import Image from 'next/image';

import {IntlLink} from '@/i18n/components/IntlLink';
import {getIntl} from '@/i18n/get-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

export async function HomeLink() {
  const intl = await getIntl();

  return (
    <IntlLink href={formatPathname(APP_ROUTES.ROOT)}>
      <div className={cn('h-9 w-9')}>
        <Image
          width={50}
          height={50}
          src="/assets/saleor-trunc.svg"
          alt={intl.formatMessage({
            defaultMessage: 'Saleor logo',
            id: 'EFT4+S',
          })}
          className={cn('h-full w-full')}
        />
      </div>
    </IntlLink>
  );
}
