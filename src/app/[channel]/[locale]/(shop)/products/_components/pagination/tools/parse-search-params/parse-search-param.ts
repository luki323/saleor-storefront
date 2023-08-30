import 'server-only';

import {isDefined} from '@/lib/tools/is-defined';

import type {ProductsPageSearchParams} from '../../../../types';

export function parseSearchParam({
  search,
}: Pick<ProductsPageSearchParams, 'search'>) {
  return {
    ...(isDefined(search) && {search}),
  };
}
