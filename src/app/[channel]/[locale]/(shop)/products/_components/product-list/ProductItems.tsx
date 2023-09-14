import {useQuery} from '@urql/next';
import {useLayoutEffect} from 'react';
import type {UnionToIntersection} from 'type-fest';

import {graphql} from '@/graphql/generated';
import type {ProductItems_ProductsQueryQueryVariables} from '@/graphql/generated/graphql';
import type {usePaginationActions} from '@/lib/hooks/use-pagination-actions';

import {PageNav} from './PageNav';
import {ProductItem} from './ProductItem';

const ProductItems_ProductsQuery = graphql(/* GraphQL */ `
  query ProductItems_ProductsQuery(
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
          ...ProductItem_ProductFragment
        }
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }
`);

type Props = {
  readonly variables: ProductItems_ProductsQueryQueryVariables;
  readonly isLastPage: boolean;
} & Pick<
  UnionToIntersection<ReturnType<typeof usePaginationActions>[number]>,
  'handlePrevPage' | 'handleNextPage' | 'onNextPage'
>;

export function ProductItems({variables, isLastPage, ...actions}: Props) {
  const [{data}] = useQuery({query: ProductItems_ProductsQuery, variables});

  useLayoutEffect(() => {
    const {pageInfo} = data?.products ?? {};

    if (isLastPage && pageInfo) {
      actions.onNextPage(pageInfo);
    }
  });

  if (!data || !data.products) {
    return undefined;
  }
  const {edges, pageInfo} = data.products;

  return (
    <>
      {edges.map(({node}) => (
        <ProductItem key={node.id} product={node} />
      ))}
      {isLastPage && pageInfo && <PageNav pageInfo={pageInfo} {...actions} />}
    </>
  );
}
