import {Suspense} from 'react';

import type {SearchParams} from '@/lib/tools/create-search-params';
import {createSearchParams} from '@/lib/tools/create-search-params';

import {PageSizeLinks} from './_components/PageSizeLinks';
import {ProductList} from './_components/ProductList';
import {getKeyVariables} from './_tools/get-key-variables';
import {getKeyVariablesKey} from './_tools/get-key-variables-key';

interface Props {
  readonly searchParams: SearchParams;
}

export default function ProductsPage({searchParams}: Props) {
  return <ProductsPage_ searchParams={searchParams} />;
}

async function ProductsPage_({searchParams: searchParamsObj}: Props) {
  const searchParams = createSearchParams(searchParamsObj);

  const keyVariables = await getKeyVariables(searchParams);
  const key = getKeyVariablesKey(keyVariables, searchParams);

  return (
    <main>
      <Suspense fallback="Loading...">
        <ProductList key={key} keyVariables={keyVariables} />
      </Suspense>
      <PageSizeLinks searchParams={searchParams} />
    </main>
  );
}
