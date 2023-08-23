import type {PageInfo} from '@/graphql/generated/documents';

import {createSearchParams} from '../create-search-params';
import {mergeSearchParams} from '../merge-serach-params';
import {deletePaginationSearchParams} from './delete-pagination-search-params';
import {getNextPageSearchParams} from './get-next-page-search-params';
import {getPrevPageSearchParams} from './get-prev-page-search-params';
import type {PaginationSearchParams} from './types';

export function getNextPrevPage(
  searchParams: PaginationSearchParams,
  pageInfo: PageInfo,
  defaultPageSize: number,
) {
  const nextPage = getNextPageSearchParams(
    searchParams,
    pageInfo,
    defaultPageSize,
  );
  const prevPage = getPrevPageSearchParams(
    searchParams,
    pageInfo,
    defaultPageSize,
  );

  const withoutPaginationSearchParams =
    deletePaginationSearchParams(searchParams);

  return {
    nextPage:
      nextPage &&
      mergeSearchParams(
        createSearchParams(nextPage),
        withoutPaginationSearchParams,
      ),
    prevPage:
      prevPage &&
      mergeSearchParams(
        createSearchParams(prevPage),
        withoutPaginationSearchParams,
      ),
  };
}
