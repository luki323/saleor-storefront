import {IntlLink} from '@/i18n/components/IntlLink';
import {buttonStyles} from '@/lib/components/ui/Button';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {changePageSize} from '@/lib/tools/pagination';
import {sortAsc} from '@/lib/tools/sort-asc';

import {DEFAULT_PAGE_SIZE, PRODUCTS_PREFIX} from '../consts';

const PAGE_SIZES = sortAsc([DEFAULT_PAGE_SIZE, 10, 30]);

interface Props {
  readonly searchParams: URLSearchParams;
}

export function PageSizeLinks({searchParams}: Props) {
  return (
    <div className={cn('flex items-center gap-1')}>
      <ul className={cn('flex gap-2')}>
        {PAGE_SIZES.map((pageSize) => (
          <li key={pageSize}>
            <IntlLink
              href={{
                pathname: formatPathname(APP_ROUTES.PRODUCTS),
                query: changePageSize(
                  searchParams,
                  pageSize,
                  PRODUCTS_PREFIX,
                ).toString(),
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
