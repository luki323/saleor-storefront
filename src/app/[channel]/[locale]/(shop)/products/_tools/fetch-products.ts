import type {GetProductsVariables} from '@/graphql/generated/documents';
import {GetProductsDocument} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql/fetch-graphql';

export type FetchProductsResult = Awaited<ReturnType<typeof fetchProducts>>;

const PRODUCTS_REVALIDATE_TAG = 'products-revalidate-tag';

export async function fetchProducts(variables: GetProductsVariables) {
  const response = await fetchGraphQL(
    GetProductsDocument,
    {variables},
    {cache: 'force-cache', next: {tags: [PRODUCTS_REVALIDATE_TAG]}},
  );

  if (!response.products) {
    throw new Error('Products object is missing in the response');
  }
  const fetchedProducts = response.products;

  const products = fetchedProducts.edges.map(({node}) => ({
    ...node,
    name: node.translation?.name ?? node.name,
  }));

  return {
    products,
    pageInfo: fetchedProducts.pageInfo,
  };
}
