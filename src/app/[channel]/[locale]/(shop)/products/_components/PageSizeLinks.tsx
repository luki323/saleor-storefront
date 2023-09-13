import {IntlLink} from '@/i18n/components/IntlLink';
import {APP_ROUTES} from '@/lib/consts';
import {changePageSize} from '@/lib/tools/change-page-size';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {DEFAULT_PAGE_SIZE} from '../_consts';

const pageSizes = Array(3)
  .fill(undefined)
  .map((_, idx) => DEFAULT_PAGE_SIZE + idx * DEFAULT_PAGE_SIZE);

interface Props {
  readonly searchParams: URLSearchParams;
}

export function PageSizeLinks({searchParams}: Props) {
  return (
    <nav>
      <ol className={cn('flex gap-3')}>
        {pageSizes.map((pageSize) => (
          <li key={pageSize}>
            <IntlLink
              href={{
                pathname: formatPathname(APP_ROUTES.PRODUCTS),
                query: changePageSize(searchParams, pageSize).toString(),
              }}>
              {pageSize}
            </IntlLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}
