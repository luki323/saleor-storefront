import invariant from 'tiny-invariant';

import {isDefined} from '../is-defined';
import {toArray} from '../to-array';
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

  const pageSizeKey = isDefined(last)
    ? PAGINATION_KEYS.LAST
    : PAGINATION_KEYS.FIRST;

  const [cursor] = toArray(searchParams[cursorKey]);

  const [pageSize] = toArray(searchParams[pageSizeKey] ?? defaultPageSize);
  invariant(isDefined(pageSize));

  return {
    [cursorKey]: cursor,
    [pageSizeKey]: pageSize,
  } as ParsedPaginationSearchParams;
}
