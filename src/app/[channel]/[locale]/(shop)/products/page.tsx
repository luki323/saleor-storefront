import {cn} from '@/lib/tools/cn';

import {CategoryLinks} from './_components/CategoryLinks';
import {CollectionLinks} from './_components/CollectionLinks';
import {Pagination} from './_components/Pagination';
import type {SearchParams} from './_types';

interface Props {
  readonly searchParams?: SearchParams;
}

export default function ProductsPage({searchParams = {}}: Props) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 md:flex-row',
      )}>
      <div
        className={cn('order-1 flex flex-none basis-[125px] flex-col gap-6')}>
        <CategoryLinks searchParams={searchParams} />
        <CollectionLinks searchParams={searchParams} />
      </div>
      <div className={cn('order-1')}>
        <Pagination searchParams={searchParams} />
      </div>
      <div
        className={cn('order-1 flex-none basis-[125px] max-sm:order-first')}
      />
    </div>
  );
}
