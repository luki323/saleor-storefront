import {cn} from '@/lib/tools/cn';

import type {ProductsPageSearchParams} from '../../types';
import {PageSizeLinks} from './components/PageSizeLinks';
import {PaginationLinks} from './components/PaginationLinks';
import {ProductList} from './components/product-list';
import {getProducts} from './tools/get-products';
import {parseSearchParams} from './tools/parse-search-params';

interface Props {
  readonly searchParams: ProductsPageSearchParams;
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
