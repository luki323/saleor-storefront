import type {AttributeWhereInput} from '@/graphql/generated/types';

import {getCategoryIds} from '../../../../tools/get-category-ids';
import type {ProductsPageSearchParams} from '../../../../types';

export async function parseCategorySerchParam(
  searchParams: Pick<ProductsPageSearchParams, 'category'>,
) {
  const categoryIds = await getCategoryIds(searchParams);

  return categoryIds.map((id) => ({
    inCategory: id,
  })) satisfies AttributeWhereInput['AND'];
}
