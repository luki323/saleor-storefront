'use client';

import {useMemo} from 'react';

import {useInfiniteProductsQuery} from '../_hooks/use-infinite-products-query';
import {ProductList} from './ui/ProductList';

export function LoadMoreList() {
  const {data} = useInfiniteProductsQuery();

  const products = useMemo(
    () => data?.pages.flatMap(({products}) => products),
    [data],
  );
  return <ProductList products={products} />;
}
