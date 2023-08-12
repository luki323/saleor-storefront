import {IntlLink} from '@/i18n/components/IntlLink';
import {buttonStyles} from '@/lib/components/ui/Button';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isDefined} from '@/lib/tools/is-defined';

import {PAGE_SIZES} from '../_consts';
import type {SearchParams} from '../_types/types';

type Props = SearchParams;

export function PageSizes(props: Props) {
  const pageSizeKey = isDefined(props.last) ? 'last' : 'first';

  return (
    <div className={cn('flex items-center gap-1')}>
      <ul className={cn('flex gap-2')}>
        {PAGE_SIZES.map((pageSize) => (
          <li key={pageSize}>
            <IntlLink
              href={{
                pathname: formatPathname(APP_ROUTES.PRODUCTS),
                query: {...props, [pageSizeKey]: pageSize},
              }}
              className={cn(buttonStyles({variant: 'ghost', size: 'icon'}))}>
              {pageSize}
            </IntlLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
