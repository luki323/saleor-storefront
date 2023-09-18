import type {UnionToIntersection} from 'type-fest';

import type {usePaginationActions} from '@/lib/hooks/use-pagination-actions';
import {cn} from '@/lib/tools/cn';

import {DEFAULT_PAGE_SIZE} from '../../_consts';

const pageSizes = Array(3)
  .fill(undefined)
  .map((_, idx) => DEFAULT_PAGE_SIZE + idx * DEFAULT_PAGE_SIZE);

type Props = Pick<
  UnionToIntersection<ReturnType<typeof usePaginationActions>[number]>,
  'handleNextPage'
>;

export function PageSizeLinks({handleNextPage}: Props) {
  return (
    <ol className={cn('flex gap-3')}>
      {pageSizes.map((pageSize) => (
        <li key={pageSize}>
          <button onClick={() => handleNextPage(pageSize)}>{pageSize}</button>
        </li>
      ))}
    </ol>
  );
}
