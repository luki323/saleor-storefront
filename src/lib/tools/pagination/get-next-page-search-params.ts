import invariant from 'tiny-invariant';

import {isDefined} from '../type-guards/is-defined';
import type {
  NextPageInfo,
  NextPageSearchParams,
  PaginationSearchParams,
} from './types';

export function getNextPageSearchParams(
  {first, last}: PaginationSearchParams,
  {hasNextPage, endCursor}: NextPageInfo,
  defaultPageSize: number,
) {
  if (!hasNextPage) {
    return null;
  }
  invariant(isDefined(endCursor));

  return {
    first: first ?? last ?? defaultPageSize,
    after: endCursor,
  } satisfies Record<keyof NextPageSearchParams, unknown>;
}
