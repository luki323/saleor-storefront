import invariant from 'tiny-invariant';

import {isDefined} from '../type-guards/is-defined';
import type {
  PaginationSearchParams,
  PrevPageInfo,
  PrevPageSearchParams,
} from './types';

export function getPrevPageSearchParams(
  {last, first}: PaginationSearchParams,
  {hasPreviousPage, startCursor}: PrevPageInfo,
  defaultPageSize: number,
) {
  if (!hasPreviousPage) {
    return null;
  }
  invariant(isDefined(startCursor));

  return {
    last: last ?? first ?? defaultPageSize,
    before: startCursor,
  } satisfies Record<keyof PrevPageSearchParams, unknown>;
}
