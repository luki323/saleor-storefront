import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/24/outline';

import type {PageInfo} from '@/graphql/generated/documents';
import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {DEFAULT_PAGE_SIZE} from '../_consts';
import type {SearchParams} from '../_types/types';
import {NavigationIcon} from './NavigationIcon';

type Props = SearchParams & Omit<PageInfo, '__typename'>;

export async function PaginationLinks({search, ...restProps}: Props) {
  const intl = await getIntl(getLocale());

  const pageSize = Number(
    restProps.last ?? restProps.first ?? DEFAULT_PAGE_SIZE,
  );

  return (
    <ul className={cn('flex justify-between')}>
      <li>
        <NavigationIcon
          disabled={!restProps.hasPreviousPage}
          href={{
            pathname: formatPathname(APP_ROUTES.PRODUCTS),
            query: {last: pageSize, before: restProps.startCursor, search},
          }}
          label={intl.formatMessage({
            defaultMessage: 'Previous page',
            id: 'k9hDFZ',
          })}>
          <ArrowLeftIcon className={cn('h-5')} />
        </NavigationIcon>
      </li>
      <li>
        <NavigationIcon
          disabled={!restProps.hasNextPage}
          href={{
            pathname: formatPathname(APP_ROUTES.PRODUCTS),
            query: {first: pageSize, after: restProps.endCursor, search},
          }}
          label={intl.formatMessage({
            defaultMessage: 'Next page',
            id: 'rBj9Ib',
          })}>
          <ArrowRightIcon className={cn('h-5')} />
        </NavigationIcon>
      </li>
    </ul>
  );
}
