import {PAGINATION_SEARCH_PARAM_NAMES} from './get-pagination-search-params';

export function deletePaginationSearchParams(searchParams: URLSearchParams) {
  Object.values(PAGINATION_SEARCH_PARAM_NAMES).forEach((name) =>
    searchParams.delete(name),
  );
}
