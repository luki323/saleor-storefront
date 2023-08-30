import 'server-only';

import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env';
import {GetCategoryIdsDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {isDefined} from '@/lib/tools/is-defined';
import {toArray} from '@/lib/tools/to-array';

import type {ProductsPageSearchParams} from '../../types';

export async function getCategoryIds({
  category,
}: Pick<ProductsPageSearchParams, 'category'>) {
  if (!isDefined(category)) {
    return [];
  }
  const {categories} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetCategoryIdsDocument},
  });
  invariant(categories);

  const categoryParams = toArray(category);

  return categories.edges
    .filter(({node: {slug}}) => categoryParams.includes(slug))
    .map(({node: {id}}) => id);
}
