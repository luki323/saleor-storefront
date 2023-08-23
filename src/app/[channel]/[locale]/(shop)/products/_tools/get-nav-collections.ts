import 'server-only';

import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetNavCollectionsVariables} from '@/graphql/generated/documents';
import {GetNavCollectionsDocument} from '@/graphql/generated/documents';
import {withTranslation} from '@/i18n/tools/with-translation';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getNavCollections(variables: GetNavCollectionsVariables) {
  const {collections} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetNavCollectionsDocument, variables},
  });
  invariant(collections);

  return collections.edges.map(({node}) => withTranslation(node));
}
