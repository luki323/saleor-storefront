import type {ProductFilterInput} from '@/graphql/generated/types';
import type {SearchParams} from '@/lib/tools/create-search-params';
import {omit} from '@/lib/tools/omit';
import {PAGINATION_KEYS} from '@/lib/tools/pagination/consts';
import {toArray} from '@/lib/tools/to-array';
import {PRODUCTS_PAGE_SERACH_PARAM_KEYS} from '@/modules/shop/consts';

import type {ProductsPageSearchParams} from '../../../../types';

export function parseAttributeSearchParams(
  searchParams: ProductsPageSearchParams,
) {
  const attributeSearchParams = omit(
    searchParams,
    ...Object.values({...PAGINATION_KEYS, ...PRODUCTS_PAGE_SERACH_PARAM_KEYS}),
  );

  return Object.entries<SearchParams[keyof SearchParams]>(
    attributeSearchParams,
  ).map(([key, value]) => ({
    slug: key,
    values: toArray(value).map((value) => value.toString()),
  })) satisfies ProductFilterInput['attributes'];
}
