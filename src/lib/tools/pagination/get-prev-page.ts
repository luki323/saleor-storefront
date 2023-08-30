import invariant from 'tiny-invariant';

import type {PageInfo} from '@/graphql/generated/documents';

import {isDefined} from '../is-defined';
import {toArray} from '../to-array';
import type {PaginationSearchParams} from './types';

export function getPrevPage(
  {last, first}: Pick<PaginationSearchParams, 'last' | 'first'>,
  {
    hasPreviousPage,
    startCursor,
  }: Pick<PageInfo, 'hasPreviousPage' | 'startCursor'>,
  defaultPageSize: number,
) {
  if (!hasPreviousPage) {
    return null;
  }
  invariant(isDefined(startCursor));

  const [pageSize] = toArray(last ?? first ?? defaultPageSize);
  invariant(isDefined(pageSize));

  return {last: pageSize, before: startCursor} satisfies PaginationSearchParams;
}
