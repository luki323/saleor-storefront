import {cn} from '@/lib/tools/cn';
import type {SearchParams} from '@/lib/tools/create-search-params';
import {createSearchParams} from '@/lib/tools/create-search-params';

import {CategoryLinks} from './_components/category-links';
import {CollectionLinks} from './_components/collection-links';
import {Pagination} from './_components/pagination';
import {ProductAttributes} from './_components/product-attributes';

interface Props {
  readonly searchParams: SearchParams;
}

export default function ProductsPage({searchParams}: Props) {
  const parsedSearchParams = createSearchParams(searchParams);

  return (
    <div
      className={cn(
        'mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 md:flex-row',
      )}>
      <div
        className={cn('order-1 flex flex-none basis-[125px] flex-col gap-5')}>
        <div>
          <CategoryLinks searchParams={parsedSearchParams} />
        </div>
        <div>
          <CollectionLinks searchParams={parsedSearchParams} />
        </div>
      </div>
      <div className={cn('order-1')}>
        <ProductAttributes searchParams={parsedSearchParams} />
        <Pagination searchParams={parsedSearchParams} />
      </div>
      <div
        className={cn('order-1 flex-none basis-[125px] max-sm:order-first')}
      />
    </div>
  );
}
