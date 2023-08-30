import 'server-only';

import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env';
import {GetCollectionIdsDocument} from '@/graphql/generated/documents';
import type {AvailableChannel} from '@/i18n/consts';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {isDefined} from '@/lib/tools/is-defined';
import {toArray} from '@/lib/tools/to-array';

import type {ProductsPageSearchParams} from '../../types';

export async function getCollectionIds(
  {collection}: Pick<ProductsPageSearchParams, 'collection'>,
  channel: AvailableChannel,
) {
  if (!isDefined(collection)) {
    return [];
  }
  const {collections} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetCollectionIdsDocument, variables: {channel}},
  });
  invariant(collections);

  const collectionParams = toArray(collection);

  return collections.edges
    .filter(({node: {slug}}) => collectionParams.includes(slug))
    .map(({node: {id}}) => id);
}
