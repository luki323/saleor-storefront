import {PAGINATION_KEYS} from './consts';

export function deletePaginationSearchParams(searchParams: URLSearchParams) {
  for (const key of Object.values(PAGINATION_KEYS)) {
    searchParams.delete(key);
  }
  return searchParams;
}
