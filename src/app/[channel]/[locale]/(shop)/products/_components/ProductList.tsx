'use client';

import {cn} from '@/lib/tools/cn';

import {useProductListPagination} from './hooks/use-product-list-pagination';
import type {KeyVariables} from './hooks/use-product-list-variables';
import {ProductListItems} from './ProductListItems';

interface Props {
  readonly keyVariables: KeyVariables;
}

export function ProductList({keyVariables}: Props) {
  const [{currentVariables}, {handlePrevPage, handleNextPage, onNextPage}] =
    useProductListPagination(keyVariables);

  return (
    <div className={cn('flex flex-col')}>
      <ul className={cn('grid grid-cols-4 gap-4')}>
        <ProductListItems
          variables={currentVariables}
          isLastPage
          onNextPage={onNextPage}
        />
      </ul>
      <nav className={cn('flex gap-2')}>
        <button onClick={handlePrevPage}>Previous page</button>
        <button onClick={handleNextPage}>Next page</button>
      </nav>
    </div>
  );
}
