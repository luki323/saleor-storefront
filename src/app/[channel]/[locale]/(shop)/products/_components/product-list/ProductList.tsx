'use client';

import {usePaginationActions} from '@/lib/hooks/use-pagination-actions';
import {cn} from '@/lib/tools/cn';

import {DEFAULT_PAGE_SIZE, USE_PAGINATION} from '../../_consts';
import type {QueryVariables} from '../../_tools/get-query-variables';
import {PageNav} from './PageNav';
import {ProductListItems} from './ProductListItems';

interface Props {
  readonly queryVariables: QueryVariables;
}

const BASE_OPTIONS = {
  defaultPageSize: DEFAULT_PAGE_SIZE,
  updateSearchParams: USE_PAGINATION,
};

export function ProductList({queryVariables}: Props) {
  const [data, actions] = usePaginationActions({
    ...BASE_OPTIONS,
    queryVariables,
  });

  return (
    <div className={cn('flex flex-col')}>
      <ul className={cn('grid grid-cols-4 gap-4')}>
        {USE_PAGINATION ? (
          <ProductListItems
            variables={data.currentVariables}
            isLastPage
            onNextPage={actions.onNextPage}
          />
        ) : (
          data.variablesArray.map((variables, idx) => (
            <ProductListItems
              key={idx}
              variables={variables}
              isLastPage={idx === data.variablesArray.length - 1}
              onNextPage={actions.onNextPage}
            />
          ))
        )}
      </ul>
      <PageNav
        pageInfo={data.pageInfo}
        handlePrevPage={actions.handlePrevPage}
        handleNextPage={actions.handleNextPage}
      />
    </div>
  );
}
