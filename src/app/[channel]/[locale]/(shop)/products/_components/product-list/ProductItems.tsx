import {useQuery} from '@urql/next';
import type {UnionToIntersection} from 'type-fest';

import {graphql} from '@/graphql/generated';
import type {ProductItems_ProductsQueryQueryVariables} from '@/graphql/generated/graphql';
import {useHandleNextPage} from '@/lib/hooks/use-handle-next-page';
import type {usePaginationActions} from '@/lib/hooks/use-pagination-actions';

import {DEFAULT_PAGE_SIZE} from '../../_consts';
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

  const {pageInfo, edges} = data?.products ?? {};

  useHandleNextPage({...(pageInfo && {pageInfo}), isLastPage, ...actions});

  const pageSize = variables.first ?? variables.last ?? DEFAULT_PAGE_SIZE;

  return (
    <>
      {edges?.map(({node}) => <ProductItem key={node.id} product={node} />)}
      {isLastPage && pageInfo && (
        <PageNav pageInfo={pageInfo} pageSize={pageSize} {...actions} />
      )}
    </>
  );
}
