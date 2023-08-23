import 'server-only';

import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetCollectionIdsVariables} from '@/graphql/generated/documents';
import {GetCollectionIdsDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getCollectionIds(variables: GetCollectionIdsVariables) {
  const {collections} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetCollectionIdsDocument, variables},
  });
  invariant(collections);

  return collections.edges.map(({node: {id}}) => id);
}
