import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/24/outline';

import type {PageInfo} from '@/graphql/generated/documents';
import {ROUTE} from '@/lib/consts/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {DEFAULT_PAGE_SIZE} from '../_consts/consts';
import type {SearchParams} from '../_types/types';
import {NavigationIcon} from './NavigationIcon';

type Props = SearchParams & Omit<PageInfo, '__typename'>;

export function PaginationLinks({search, ...restProps}: Props) {
  const pageSize = Number(
    restProps.last ?? restProps.first ?? DEFAULT_PAGE_SIZE,
  );

  return (
    <ul className={cn('flex justify-between')}>
      <li>
        <NavigationIcon
          disabled={!restProps.hasPreviousPage}
          href={{
            pathname: formatPathname([ROUTE.PRODUCTS]),
            query: {last: pageSize, before: restProps.startCursor, search},
          }}
          label="Here will be the message">
          <ArrowLeftIcon className={cn('h-5')} />
        </NavigationIcon>
      </li>
      <li>
        <NavigationIcon
          disabled={!restProps.hasNextPage}
          href={{
            pathname: formatPathname([ROUTE.PRODUCTS]),
            query: {first: pageSize, after: restProps.endCursor, search},
          }}
          label="Here will be the message">
          <ArrowRightIcon className={cn('h-5')} />
        </NavigationIcon>
      </li>
    </ul>
  );
}
