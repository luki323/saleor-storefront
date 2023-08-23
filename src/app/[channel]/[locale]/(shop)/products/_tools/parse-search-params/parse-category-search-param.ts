import 'server-only';

import {toArray} from '@/lib/tools/to-array';
import {isDefined} from '@/lib/tools/type-guards/is-defined';

import type {SearchParams} from '../../_types';
import {getCategoryIds} from '../get-category-ids';

export async function parseCategorySearchParam({
  category,
}: Pick<SearchParams, 'category'>) {
  if (!isDefined(category)) {
    return [];
  }
  return await getCategoryIds({slugs: toArray(category)});
}
