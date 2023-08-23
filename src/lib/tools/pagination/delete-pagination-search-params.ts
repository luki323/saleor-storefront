import type {ExtendedURLSearchParamsInit} from '../create-search-params';
import {createSearchParams} from '../create-search-params';
import {PAGINATION_KEYS} from './consts';

export function deletePaginationSearchParams(
  init: ExtendedURLSearchParamsInit,
) {
  const searchParams = createSearchParams(init);

  for (const key of Object.values(PAGINATION_KEYS)) {
    searchParams.delete(key);
  }
  return searchParams;
}
