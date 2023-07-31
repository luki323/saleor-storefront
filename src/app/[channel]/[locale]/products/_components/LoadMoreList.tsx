'use client';

import {useInfiniteProductsQuery} from '../_hooks/use-infinite-products-query';

import {ProductList} from './ui/ProductList';

export function LoadMoreList() {
  const {data} = useInfiniteProductsQuery();

  const products =
    data?.pages.flatMap(({edges}) => edges.map(({node}) => node)) ?? [];

  return <ProductList products={products} />;
}
