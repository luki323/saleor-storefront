import {useQuery} from '@urql/next';

import {graphql} from '@/graphql/generated';
import type {ProductListItems_ProductsQueryQueryVariables} from '@/graphql/generated/graphql';

import {ProductListItem} from './ProductListItem';
import type {SetPageInfoProps} from './SetPageInfo';
import {SetPageInfo} from './SetPageInfo';

const ProductListItems_ProductsQuery = graphql(/* GraphQL */ `
  query ProductListItems_ProductsQuery(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $channel: String
    $categoryIds: [ID!]
    $collectionIds: [ID!]
    $languageCode: LanguageCodeEnum!
  ) {
    products(
      first: $first
      after: $after
      last: $last
      before: $before
      filter: {categories: $categoryIds, collections: $collectionIds}
      channel: $channel
    ) {
      edges {
        node {
          id
          ...ProductListItem_ProductFragment
        }
      }
      pageInfo {
        ...SetPageInfo_PageInfoFragment
      }
    }
  }
`);

interface Props {
  readonly variables: ProductListItems_ProductsQueryQueryVariables;
  readonly isLastPage: boolean;
  readonly onNextPage: SetPageInfoProps['onRender'];
}

export function ProductListItems({variables, isLastPage, onNextPage}: Props) {
  const [{data}] = useQuery({query: ProductListItems_ProductsQuery, variables});

  if (!data || !data.products) {
    return undefined;
  }
  const {edges, pageInfo} = data.products;

  return (
    <>
      {edges.map(({node}) => (
        <ProductListItem key={node.id} product={node} />
      ))}
      {isLastPage && <SetPageInfo pageInfo={pageInfo} onRender={onNextPage} />}
    </>
  );
}
