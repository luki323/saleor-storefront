'use client';

import {usePaginationActions} from '@/lib/hooks/use-pagination-actions';
import {cn} from '@/lib/tools/cn';

import type {QueryVariables} from '../_tools/get-query-variables';
import {ProductListItems} from './ProductListItems';

interface Props {
  readonly queryVariables: QueryVariables;
}

const DEFAULT_PAGE_SIZE = 10;

export function ProductList({queryVariables}: Props) {
  const [
    {currentVariables, pageInfo},
    {handlePrevPage, handleNextPage, onNextPage},
  ] = usePaginationActions({
    queryVariables: queryVariables,
    defaultPageSize: DEFAULT_PAGE_SIZE,
    updateSearchParamsOnMount: true,
  });
  const {hasPreviousPage, hasNextPage} = pageInfo ?? {};

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
        <button
          onClick={handlePrevPage}
          className={cn(hasPreviousPage ? 'font-semibold' : 'text-grey')}>
          Previous page
        </button>
        <button
          onClick={handleNextPage}
          className={cn(hasNextPage ? 'font-semibold' : 'text-grey')}>
          Next page
        </button>
      </nav>
    </div>
  );
}
