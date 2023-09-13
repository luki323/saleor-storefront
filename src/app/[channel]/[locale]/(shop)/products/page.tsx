import {Suspense} from 'react';

import type {SearchParams} from '@/lib/tools/create-search-params';
import {createSearchParams} from '@/lib/tools/create-search-params';

import {PageSizeLinks} from './_components/PageSizeLinks';
import {ProductList} from './_components/ProductList';
import {getQueryVariables} from './_tools/get-query-variables';
import {getQueryVariablesKey} from './_tools/get-query-variables-key';

interface Props {
  readonly searchParams: SearchParams;
}

export default function ProductsPage({searchParams}: Props) {
  return <ProductsPage_ searchParams={searchParams} />;
}

async function ProductsPage_({searchParams: searchParamsObj}: Props) {
  const searchParams = createSearchParams(searchParamsObj);

  const queryVariables = await getQueryVariables(searchParams);
  const key = getQueryVariablesKey(queryVariables, searchParams);

  return (
    <main>
      <Suspense fallback="Loading...">
        <ProductList key={key} queryVariables={queryVariables} />
      </Suspense>
      <PageSizeLinks searchParams={searchParams} />
    </main>
  );
}
