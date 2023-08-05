import {Suspense} from 'react';

import {cn} from '@/lib/tools/cn';

import {LoadMoreButton} from './LoadMoreButton';
import {LoadMoreList} from './LoadMoreList';

export function LoadMore() {
  return (
    <Suspense>
      <LoadMoreList />
      <div className={cn('mt-3 flex items-center justify-center')}>
        <LoadMoreButton />
      </div>
    </Suspense>
  );
}
