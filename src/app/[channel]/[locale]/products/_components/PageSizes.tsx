import {cn} from '@/tools/cn';

import {SEARCH_PARAMS, PAGE_SIZES} from '../_consts';
import {cursorsStore} from '../_tools/cursors-store';

import {NavigationLink} from './NavigationLink';

import type {ParsedSearchParams} from '../_types';

type Props = Pick<ParsedSearchParams, 'pageNumber' | 'pageSize'>;

export function PageSizes({
  pageNumber: currentPage,
  pageSize: currentPageSize,
}: Props) {
  return (
    <ul className={cn('flex gap-4')}>
      {PAGE_SIZES.map((pageSize) => {
        const pageNumber = cursorsStore.changePageSize(
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
  );
}
