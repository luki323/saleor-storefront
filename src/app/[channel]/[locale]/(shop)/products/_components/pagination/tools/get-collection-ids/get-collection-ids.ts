import 'server-only';

import {COLLECTION_BOUND, MAX_PAGE_SIZE} from '@/env/env';
import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import {GetCollectionIdsDocument} from '@/graphql/generated/documents';
import type {AvailableChannel} from '@/i18n/consts';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {isDefined} from '@/lib/tools/is-defined';
import {uniq} from '@/lib/tools/uniq';

import {PRODUCTS_PAGE_SEARCH_PARAM_NAMES} from '../../../../_consts';

export async function getCollectionIds(
  channel: AvailableChannel,
  searchParams: URLSearchParams,
) {
  const collections = uniq(
    searchParams
      .getAll(PRODUCTS_PAGE_SEARCH_PARAM_NAMES.COLLECTION)
      .slice(0, COLLECTION_BOUND),
  );
  return await getCollectionIdsAux(channel, collections);
}

async function getCollectionIdsAux(
  channel: AvailableChannel,
  collectionSlugs: readonly string[],
  after?: string,
  collectionIdsAcc: readonly string[] = [],
): Promise<readonly string[]> {
  if (collectionSlugs.length === 0) {
    return collectionIdsAcc;
  }

  const {collections} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {
      query: GetCollectionIdsDocument,
      variables: {
        first: collectionSlugs.length,
        ...(isDefined(after) && {after}),
        filter: {
          slugs: collectionSlugs.slice(0, MAX_PAGE_SIZE),
        },
        channel,
      },
    },
  });
  return await getCollectionIdsAux(
    channel,
    collectionSlugs.slice(MAX_PAGE_SIZE),
    collections?.pageInfo.endCursor ?? undefined,
    collectionIdsAcc.concat(collections?.edges.map(({node: {id}}) => id) ?? []),
  );
}
