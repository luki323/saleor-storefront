import {cn} from '@/lib/tools/cn';

import {LoadingStyleRadioGroup} from './_components/LoadingStyleRadioGroup';
import {LoadingStyleSwitcher} from './_components/LoadingStyleSwitcher';
import {LoadMore} from './_components/LoadMore';
import {Pagination} from './_components/Pagination';
import type {SearchParams} from './_types/types';

interface Props {
  readonly searchParams?: SearchParams;
}

export default function ProductsPage({searchParams = {}}: Props) {
  return (
    <div className={cn('flex')}>
      <div className={cn('min-h-full flex-1 basis-48')} />
      <div className={cn('mb-3 max-w-7xl basis-3/5')}>
        <LoadingStyleSwitcher
          pagination={<Pagination {...searchParams} />}
          loadMore={<LoadMore />}
        />
      </div>
      <div className={cn('min-h-full flex-1 basis-48 pl-6')}>
        <LoadingStyleRadioGroup />
      </div>
    </div>
  );
}
