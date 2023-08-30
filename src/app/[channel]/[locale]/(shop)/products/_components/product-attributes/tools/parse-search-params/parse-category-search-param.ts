import type {AttributeWhereInput} from '@/graphql/generated/types';
import {isDefined} from '@/lib/tools/is-defined';
import {toArray} from '@/lib/tools/to-array';

import {getCategoryIds} from '../../../../tools/get-category-ids';
import type {ProductsPageSearchParams} from '../../../../types';

export async function parseCategorySerchParam({
  category,
}: Pick<ProductsPageSearchParams, 'category'>) {
  if (!isDefined(category)) {
    return [];
  }
  const categoryIds = await getCategoryIds({
    slugs: toArray(category),
  });
  return categoryIds.map((id) => ({
    inCategory: id,
  })) satisfies AttributeWhereInput['AND'];
}
