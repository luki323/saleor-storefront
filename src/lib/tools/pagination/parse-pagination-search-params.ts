import {isDefined} from '../is-defined';
import {PAGINATION_KEYS} from './consts';
import type {PaginationSearchParams} from './types';

export type ParsedPaginationSearchParams =
  | {
      readonly first: number;
      readonly after?: string;
    }
  | {
      readonly last: number;
      readonly before?: string;
    };

export function parsePaginationSearchParams(
  searchParams: PaginationSearchParams,
  defaultPageSize: number,
) {
  const {before, last} = searchParams;

  const cursorKey = isDefined(before)
    ? PAGINATION_KEYS.BEFORE
    : PAGINATION_KEYS.AFTER;

  const countKey = isDefined(last)
    ? PAGINATION_KEYS.LAST
    : PAGINATION_KEYS.FIRST;

  return {
    [cursorKey]: searchParams[cursorKey],
    [countKey]: searchParams[countKey] ?? defaultPageSize,
  } as ParsedPaginationSearchParams;
}
