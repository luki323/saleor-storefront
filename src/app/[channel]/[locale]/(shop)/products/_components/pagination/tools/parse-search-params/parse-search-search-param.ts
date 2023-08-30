import 'server-only';

import {isDefined} from '@/lib/tools/is-defined';
import {toArray} from '@/lib/tools/to-array';

import type {ProductsPageSearchParams} from '../../../../types';

export function parseSearchSarchParam({
  q: searchParam,
}: Pick<ProductsPageSearchParams, 'q'>) {
  const [search] = toArray(searchParam);

  return {
    ...(isDefined(search) && {search: search.toString()}),
  };
}
