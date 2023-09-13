import {graphql} from '@/graphql/generated';
import type {GetCollectionIdsQueryVariables} from '@/graphql/generated/graphql';
import {fetchQueryData} from '@/lib/tools/get-client';
import {isDefined} from '@/lib/tools/is-defined';

const GetCollectionIds = graphql(/* GraphQL */ `
  query GetCollectionIds($slugs: [String!]!, $channel: String) {
    collections(first: 100, filter: {slugs: $slugs}, channel: $channel) {
      edges {
        node {
          id
        }
      }
    }
  }
`);

const SEARCH_PARAM_NAME = 'collection';

export async function getCollectionIds(
  searchParams: URLSearchParams,
  {channel}: Pick<GetCollectionIdsQueryVariables, 'channel'>,
) {
  const collectionSlugs = searchParams.getAll(SEARCH_PARAM_NAME);

  if (!collectionSlugs.length) {
    return undefined;
  }
  const {collections} = await fetchQueryData(GetCollectionIds, {
    slugs: collectionSlugs,
    ...(isDefined(channel) && {channel}),
  });
  return collections?.edges.map(({node: {id}}) => id);
}
