import {isDefined} from '@/lib/tools/is-defined';

import {getDecodedCursors} from './get-decoded-cursors';
import {setCursors} from './set-cursors';
import type {ForwardPageInfo} from './types';

export function getNextParams(
  searchParams: URLSearchParams,
  {hasNextPage, endCursor}: ForwardPageInfo,
  prefix: string,
) {
  if (!hasNextPage || !isDefined(endCursor)) {
    return null;
  }
  const updatedSearchParams = new URLSearchParams(searchParams);

  const updatedCursors = [
    ...getDecodedCursors(searchParams, prefix),
    endCursor,
  ];

  setCursors(updatedSearchParams, updatedCursors, prefix);

  return updatedSearchParams;
}
