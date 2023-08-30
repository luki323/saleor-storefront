import {IntlLink} from '@/i18n/components/IntlLink';
import {buttonStyles} from '@/lib/components/ui/Button';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isDefined} from '@/lib/tools/is-defined';
import {sortAsc} from '@/lib/tools/sort-asc';

import type {ProductsPageSearchParams} from '../../../types';
import {DEFAULT_PAGE_SIZE} from '../consts';

const PAGE_SIZES = sortAsc([DEFAULT_PAGE_SIZE, 10, 30]);

interface Props {
  readonly searchParams: ProductsPageSearchParams;
}

export function PageSizeLinks({searchParams}: Props) {
  const pageSizeKey = isDefined(searchParams.last) ? 'last' : 'first';

  return (
    <div className={cn('flex items-center gap-1')}>
      <ul className={cn('flex gap-2')}>
        {PAGE_SIZES.map((pageSize) => (
          <li key={pageSize}>
            <IntlLink
              href={{
                pathname: formatPathname(APP_ROUTES.PRODUCTS),
                query: {...searchParams, [pageSizeKey]: pageSize},
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
