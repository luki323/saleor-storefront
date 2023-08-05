import {Suspense} from 'react';

import {LoadMoreButton} from './LoadMoreButton';
import {LoadMoreList} from './LoadMoreList';

export function LoadMore() {
  return (
    <Suspense>
      <LoadMoreList />
      <div className="mt-3 flex items-center justify-center">
        <LoadMoreButton />
      </div>
    </Suspense>
  );
}
