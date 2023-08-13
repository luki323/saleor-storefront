import Image from 'next/image';

import {IntlLink} from '@/i18n/components/IntlLink';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

export function HomeLink() {
  return (
    <div className={cn('h-10 w-10')}>
      <IntlLink href={formatPathname(APP_ROUTES.ROOT)}>
        <Image
          src="/assets/saleor-trunc.svg"
          alt="Saleor logo"
          width={0}
          height={0}
          className={cn('h-full w-full')}
        />
      </IntlLink>
    </div>
  );
}
