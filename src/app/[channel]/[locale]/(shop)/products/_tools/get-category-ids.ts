import {graphql} from '@/graphql/generated';
import {fetchQueryData} from '@/lib/tools/get-client';

const GetCategoryIds = graphql(/* GraphQL */ `
  query GetCategoryIds($slugs: [String!]!) {
    categories(first: 100, filter: {slugs: $slugs}) {
      edges {
        node {
          id
        }
      }
    }
  }
`);

const SEARCH_PARAM_NAME = 'category';

export async function getCategoryIds(searchParams: URLSearchParams) {
  const categorySlugs = searchParams.getAll(SEARCH_PARAM_NAME);

  if (!categorySlugs.length) {
    return undefined;
  }
  const {categories} = await fetchQueryData(GetCategoryIds, {
    slugs: categorySlugs,
  });
  return categories?.edges.map(({node: {id}}) => id);
}
