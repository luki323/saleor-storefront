import {cn} from '@/lib/tools/cn';
import {createSearchParams} from '@/lib/tools/create-search-params';

import {CategoryLinks} from './_components/category-links';
import {CollectionLinks} from './_components/collection-links';
import {Pagination} from './_components/pagination';
import {ProductAttributes} from './_components/product-attributes';
import type {ProductsPageSearchParams} from './types';

interface Props {
  readonly searchParams?: ProductsPageSearchParams;
}

export default function ProductsPage({searchParams = {}}: Props) {
  const urlSerachParams = createSearchParams(searchParams);

  return (
    <div
      className={cn(
        'mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 md:flex-row',
      )}>
      <div
        className={cn('order-1 flex flex-none basis-[125px] flex-col gap-5')}>
        <div>
          <CategoryLinks urlSearchParams={urlSerachParams} />
        </div>
        <div>
          <CollectionLinks urlSearchParams={urlSerachParams} />
        </div>
      </div>
      <div className={cn('order-1')}>
        <ProductAttributes searchParams={searchParams} />
        <Pagination searchParams={searchParams} />
      </div>
      <div
        className={cn('order-1 flex-none basis-[125px] max-sm:order-first')}
      />
    </div>
  );
}
