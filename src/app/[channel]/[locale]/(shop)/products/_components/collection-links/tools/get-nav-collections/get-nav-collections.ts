import 'server-only';

import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env';
import type {GetNavCollectionsVariables} from '@/graphql/generated/documents';
import {GetNavCollectionsDocument} from '@/graphql/generated/documents';
import {translateConnection} from '@/i18n/tools/translate-connection';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getNavCollections(variables: GetNavCollectionsVariables) {
  const {collections} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetNavCollectionsDocument, variables},
  });
  invariant(collections);

  return translateConnection(collections);
}
