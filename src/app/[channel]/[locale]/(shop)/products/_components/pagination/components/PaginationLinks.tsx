import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react';

import type {PageInfo} from '@/graphql/generated/documents';
import {getIntl} from '@/i18n/get-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isDefined} from '@/lib/tools/is-defined';
import {getNextPrevPage} from '@/lib/tools/pagination/get-next-prev-page';

import type {ProductsPageSearchParams} from '../../../types';
import {DEFAULT_PAGE_SIZE} from '../consts';
import {NavigationIcon} from './NavigationIcon';

interface Props {
  readonly searchParams: ProductsPageSearchParams;
  readonly pageInfo: PageInfo;
}

export async function PaginationLinks({searchParams, pageInfo}: Props) {
  const {nextPage, prevPage} = getNextPrevPage(
    searchParams,
    pageInfo,
    DEFAULT_PAGE_SIZE,
  );
  const intl = await getIntl();

  return (
    <ul className={cn('flex justify-between')}>
      <li>
        <NavigationIcon
          disabled={!isDefined(prevPage)}
          href={{
            pathname: formatPathname(APP_ROUTES.PRODUCTS),
            query: prevPage?.toString(),
          }}
          label={intl.formatMessage({
            defaultMessage: 'Previous page',
            id: 'k9hDFZ',
          })}>
          <ChevronLeftIcon className={cn('h-4 w-4')} />
        </NavigationIcon>
      </li>
      <li>
        <NavigationIcon
          disabled={!nextPage}
          href={{
            pathname: formatPathname(APP_ROUTES.PRODUCTS),
            query: nextPage?.toString(),
          }}
          label={intl.formatMessage({
            defaultMessage: 'Next page',
            id: 'rBj9Ib',
          })}>
          <ChevronRightIcon className={cn('h-4 w-4')} />
        </NavigationIcon>
      </li>
    </ul>
  );
}
