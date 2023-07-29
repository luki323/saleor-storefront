import {FormattedMessage} from '@/i18n/components/FormattedMessage';
import {cn} from '@/tools/cn';
import {isDefined} from '@/tools/is-defined';

import {SEARCH_PARAMS, PAGE_SIZES} from '../_consts';
import {productCursorsStore} from '../_tools/product-cursors-store';

import {NavigationLink} from './NavigationLink';

type Props = {
  readonly currentPage: number;
  readonly currentPageSize: number;
};

export function Navigation({currentPage, currentPageSize}: Props) {
  const nextPage = productCursorsStore.getNextPage(
    currentPage,
    currentPageSize,
  );
  const prevPage = productCursorsStore.getPrevPage(currentPage);

  return (
    <nav>
      <ul className={cn('flex gap-4')}>
        <li>
          <NavigationLink
            disabled={!isDefined(prevPage)}
            query={{
              [SEARCH_PARAMS.PAGE_NUMBER]: prevPage,
              [SEARCH_PARAMS.PAGE_SIZE]: currentPageSize,
            }}>
            <FormattedMessage defaultMessage="Previous" id="JJNc3c" />
          </NavigationLink>
        </li>
        <li>
          <NavigationLink
            disabled={!isDefined(nextPage)}
            query={{
              [SEARCH_PARAMS.PAGE_NUMBER]: nextPage,
              [SEARCH_PARAMS.PAGE_SIZE]: currentPageSize,
            }}>
            <FormattedMessage defaultMessage="Next" id="9+Ddtu" />
          </NavigationLink>
        </li>
      </ul>
      <ul className={cn('flex gap-4')}>
        {PAGE_SIZES.map((pageSize) => {
          const pageNumber = productCursorsStore.changePageSize(
            {currentPage, pageSize: currentPageSize},
            pageSize,
          );
          return (
            <li key={pageSize}>
              <NavigationLink
                query={{
                  [SEARCH_PARAMS.PAGE_NUMBER]: pageNumber,
                  [SEARCH_PARAMS.PAGE_SIZE]: pageSize,
                }}>
                {pageSize}
              </NavigationLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
