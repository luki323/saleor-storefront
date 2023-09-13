import type {URLSearchParams} from 'url';

import {PAGINATION_SEARCH_PARAM_NAMES} from './get-pagination-search-params';
import {isDefined} from './is-defined';

export function getPageSize(searchParams: URLSearchParams): number | undefined;
export function getPageSize(
  searchParams: URLSearchParams,
  defaultPageSize: number,
): number;
export function getPageSize(
  searchParams: URLSearchParams,
  defaultPageSize?: number,
) {
  const pageSize =
    searchParams.get(PAGINATION_SEARCH_PARAM_NAMES.FIRST) ??
    searchParams.get(PAGINATION_SEARCH_PARAM_NAMES.LAST);

  return isDefined(pageSize) ? Number(pageSize) : defaultPageSize;
}
