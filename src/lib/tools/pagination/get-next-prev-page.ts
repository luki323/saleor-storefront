import type {PageInfo} from '@/graphql/generated/documents';

import {createSearchParams} from '../create-search-params';
import {mergeSearchParams} from '../merge-serach-params';
import {deletePaginationSearchParams} from './delete-pagination-search-params';
import {getNextPage} from './get-next-page';
import {getPrevPage} from './get-prev-page';
import type {PaginationSearchParams} from './types';

export function getNextPrevPage(
  searchParams: PaginationSearchParams,
  pageInfo: PageInfo,
  defaultPageSize: number,
) {
  const nextPage = getNextPage(searchParams, pageInfo, defaultPageSize);
  const prevPage = getPrevPage(searchParams, pageInfo, defaultPageSize);

  const withoutPagination = deletePaginationSearchParams(
    createSearchParams(searchParams),
  );
  return {
    nextPage:
      nextPage &&
      mergeSearchParams(createSearchParams(nextPage), withoutPagination),
    prevPage:
      prevPage &&
      mergeSearchParams(createSearchParams(prevPage), withoutPagination),
  };
}
