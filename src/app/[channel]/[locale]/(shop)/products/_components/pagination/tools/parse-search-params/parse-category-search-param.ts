import 'server-only';

import {isDefined} from '@/lib/tools/is-defined';
import {toArray} from '@/lib/tools/to-array';

import {getCategoryIds} from '../../../../tools/get-category-ids';
import type {ProductsPageSearchParams} from '../../../../types';

export async function parseCategorySearchParam({
  category,
}: Pick<ProductsPageSearchParams, 'category'>) {
  if (!isDefined(category)) {
    return [];
  }
  return await getCategoryIds({slugs: toArray(category)});
}
