import {cn} from '@/lib/tools/cn';

import {getProducts} from '../_tools/get-products';
import {parseSearchParams} from '../_tools/parse-search-params/parse-search-params';
import type {SearchParams} from '../_types';
import {PageSizeLinks} from './PageSizeLinks';
import {PaginationLinks} from './PaginationLinks';
import {ProductList} from './ui/ProductList';

interface Props {
  readonly searchParams: SearchParams;
}

export async function Pagination({searchParams}: Props) {
  const {products, pageInfo} = await getProducts({
    ...(await parseSearchParams(searchParams)),
  });

  return (
    <>
      <ProductList products={products} />
      <nav className={cn('mt-3 flex flex-col gap-1')}>
        <PaginationLinks searchParams={searchParams} pageInfo={pageInfo} />
        <div className={cn('self-end')}>
          <PageSizeLinks searchParams={searchParams} />
        </div>
      </nav>
    </>
  );
}
