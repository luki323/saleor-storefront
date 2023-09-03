import type {ProductFilterInput} from '@/graphql/generated/types';
import {deletePaginationParams} from '@/lib/tools/pagination';
import {uniq} from '@/lib/tools/uniq';
import {PRODUCTS_PAGE_SERACH_PARAM_KEYS} from '@/modules/shop/consts';

import {PRODUCTS_PREFIX} from '../../consts';

export function parseAttributeSearchParams(
  searchParams: URLSearchParams,
): NonNullable<ProductFilterInput['attributes']> {
  const updatedSearchParams = new URLSearchParams(searchParams);
  deletePaginationParams(updatedSearchParams, PRODUCTS_PREFIX);

  Object.values(PRODUCTS_PAGE_SERACH_PARAM_KEYS).forEach((name) =>
    updatedSearchParams.delete(name),
  );
  return uniq(Array.from(updatedSearchParams.keys()))
    .map((name) => [name, updatedSearchParams.getAll(name)] as const)
    .map(([name, values]) => ({slug: name, values}));
}
