import 'server-only';

import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetCategoryIdsVariables} from '@/graphql/generated/documents';
import {GetCategoryIdsDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getCategoryIds(variables: GetCategoryIdsVariables) {
  const {categories} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetCategoryIdsDocument, variables},
  });
  invariant(categories);

  return categories.edges.map(({node: {id}}) => id);
}
