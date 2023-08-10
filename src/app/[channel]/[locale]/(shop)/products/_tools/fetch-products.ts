import type {GetProductsVariables} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

import {createGetProductsRequest} from './create-get-products-request';

export type FetchProductsResult = Awaited<ReturnType<typeof fetchProducts>>;

export async function fetchProducts(variables: GetProductsVariables) {
  const response = await fetchQueryData(createGetProductsRequest(variables));

  if (!response.products) {
    throw new Error('Products object is missing in the response');
  }
  const {
    products: {edges, pageInfo},
  } = response;

  return {
    products: edges.map(({node}) => ({
      ...node,
      name: node.translation?.name ?? node.name,
    })),
    pageInfo,
  };
}
