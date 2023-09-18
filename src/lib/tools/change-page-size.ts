import {deletePaginationSearchParams} from './delete-pagination-search-params';
import {getPageSize} from './get-page-size';
import {PAGINATION_SEARCH_PARAM_NAMES} from './get-pagination-search-params';

export function changePageSize(
  searchParams: URLSearchParams,
  pageSize: number,
) {
  if (pageSize === getPageSize(searchParams)) {
    return searchParams;
  }
  const updatedSearchParams = new URLSearchParams(searchParams);

  deletePaginationSearchParams(updatedSearchParams);

  updatedSearchParams.set(
    PAGINATION_SEARCH_PARAM_NAMES.FIRST,
    pageSize.toString(),
  );
  return updatedSearchParams;
}
