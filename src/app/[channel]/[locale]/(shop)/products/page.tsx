import dynamic from 'next/dynamic';
import {Suspense} from 'react';

import type {SearchParams} from '@/lib/tools/create-search-params';
import {createSearchParams} from '@/lib/tools/create-search-params';

import {Products} from './_components/product-list/Products';
import {USE_PAGINATION} from './_consts';
import {getQueryVariables} from './_tools/get-query-variables';
import {getQueryVariablesKey} from './_tools/get-query-variables-key';

const PageSizeLinks = dynamic(() =>
  import('./_components/PageSizeLinks').then((mod) => mod.PageSizeLinks),
);

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
        <Products key={key} queryVariables={queryVariables} />
      </Suspense>
      {USE_PAGINATION && <PageSizeLinks searchParams={searchParams} />}
    </main>
  );
}
