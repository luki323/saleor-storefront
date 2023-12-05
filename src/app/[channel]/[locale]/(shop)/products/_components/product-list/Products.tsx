'use client';

import dynamic from 'next/dynamic';

import {usePaginationActions} from '@/lib/hooks/use-pagination-actions';
import {cn} from '@/lib/tools/cn';
import {toArray} from '@/lib/tools/to-array';

import {DEFAULT_PAGE_SIZE, USE_PAGINATION} from '../../_consts';
import type {QueryVariables} from '../../_tools/get-query-variables';
import {PageNav} from './PageNav';
import {ProductItems} from './ProductItems';

const PageSizes = dynamic(() =>
  import('./PageSizes').then((mod) => mod.PageSizes),
);

interface Props {
  readonly queryVariables: QueryVariables;
}

const BASE_OPTIONS = {
  defaultPageSize: DEFAULT_PAGE_SIZE,
  updateSearchParams: USE_PAGINATION,
  restoreFromUrl: USE_PAGINATION,
};

export function Products({queryVariables}: Props) {
  const [data, actions] = usePaginationActions({
    queryVariables,
    ...BASE_OPTIONS,
  });
  const variablesArray = toArray(
    USE_PAGINATION ? data.currentVariables : data.variablesArray,
  );
  const lastVariables = variablesArray.at(-1);

  return (
    <>
      <ol className={cn('grid grid-cols-4 gap-2')}>
        {variablesArray.map((variables, idx) => (
          <ProductItems key={idx} variables={variables} />
        ))}
      </ol>
      <nav>
        {lastVariables && <PageNav variables={lastVariables} {...actions} />}
        {USE_PAGINATION && <PageSizes {...actions} />}
      </nav>
    </>
  );
}
