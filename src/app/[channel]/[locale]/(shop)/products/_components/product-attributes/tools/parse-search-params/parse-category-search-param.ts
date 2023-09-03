import type {AttributeWhereInput} from '@/graphql/generated/types';

import {getCategoryIds} from '../../../pagination/tools/get-category-ids';

export async function parseCategorySerchParam(searchParams: URLSearchParams) {
  const categoryIds = await getCategoryIds(searchParams);

  return categoryIds.map((id) => ({
    inCategory: id,
  })) satisfies AttributeWhereInput['AND'];
}
