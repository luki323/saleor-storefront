'use client';

import {usePaginationActions} from '@/lib/hooks/use-pagination-actions';
import {toArray} from '@/lib/tools/to-array';

import {DEFAULT_PAGE_SIZE, USE_PAGINATION} from '../../_consts';
import type {QueryVariables} from '../../_tools/get-query-variables';
import {ProductItems} from './ProductItems';

interface Props {
  readonly queryVariables: QueryVariables;
}

export function Products({queryVariables}: Props) {
  const [data, actions] = usePaginationActions({
    queryVariables,
    defaultPageSize: DEFAULT_PAGE_SIZE,
    updateSearchParams: USE_PAGINATION,
  });
  const variablesArray = toArray(
    USE_PAGINATION ? data.currentVariables : data.variablesArray,
  );

  return variablesArray.map((variables, idx) => (
    <ProductItems
      key={idx}
      variables={variables}
      isLastPage={idx === variablesArray.length - 1}
      {...actions}
    />
  ));
}
