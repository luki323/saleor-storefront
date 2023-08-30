import invariant from 'tiny-invariant';

import type {PageInfo} from '@/graphql/generated/documents';

import {isDefined} from '../is-defined';
import {toArray} from '../to-array';
import type {PaginationSearchParams} from './types';

export function getNextPage(
  {first, last}: Pick<PaginationSearchParams, 'first' | 'last'>,
  {hasNextPage, endCursor}: Pick<PageInfo, 'hasNextPage' | 'endCursor'>,
  defaultPageSize: number,
) {
  if (!hasNextPage) {
    return null;
  }
  invariant(isDefined(endCursor));

  const [pageSize] = toArray(first ?? last ?? defaultPageSize);
  invariant(isDefined(pageSize));

  return {first: pageSize, after: endCursor} satisfies PaginationSearchParams;
}
