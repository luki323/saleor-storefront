import 'server-only';

import {isDefined} from '@/lib/tools/type-guards/is-defined';

import type {SearchParams} from '../../_types';

export function parseSearchParam({search}: Pick<SearchParams, 'search'>) {
  return {
    ...(isDefined(search) && {search}),
  };
}
