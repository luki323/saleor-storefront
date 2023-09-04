import 'server-only';

import {graphql} from '@/graphql/generated';
import type {GetNavCollectionsQueryQueryVariables} from '@/graphql/generated/graphql';
import {translateConnection} from '@/i18n/tools/translate-connection';
import {fetchQueryData} from '@/lib/tools/get-client';

const GetNavCollectionsQuery = graphql(`
  query GetNavCollectionsQuery(
    $channel: String
    $languageCode: LanguageCodeEnum!
  ) {
    collections(first: 6, channel: $channel) {
      edges {
        node {
          id
          name
          translation(languageCode: $languageCode) {
            name
          }
          slug
        }
      }
    }
  }
`);

export async function getNavCollections(
  variables: GetNavCollectionsQueryQueryVariables,
) {
  const {collections} = await fetchQueryData(GetNavCollectionsQuery, variables);

  return collections && translateConnection(collections);
}
