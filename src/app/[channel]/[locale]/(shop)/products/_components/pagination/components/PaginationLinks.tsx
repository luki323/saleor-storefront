import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react';

import {getIntl} from '@/i18n/get-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isDefined} from '@/lib/tools/is-defined';
import {getPrevNextParams} from '@/lib/tools/pagination';
import type {ForwardPageInfo} from '@/lib/tools/pagination/types';

import {PRODUCTS_PREFIX} from '../consts';
import {NavigationIcon} from './NavigationIcon';

interface Props {
  readonly searchParams: URLSearchParams;
  readonly pageInfo: ForwardPageInfo;
}

export async function PaginationLinks({searchParams, pageInfo}: Props) {
  const intl = await getIntl();

  const [prevParams, nextParams] = getPrevNextParams(
    searchParams,
    pageInfo,
    PRODUCTS_PREFIX,
  );

  return (
    <ul className={cn('flex justify-between')}>
      <li>
        <NavigationIcon
          disabled={!isDefined(prevParams)}
          href={{
            pathname: formatPathname(APP_ROUTES.PRODUCTS),
            query: prevParams?.toString(),
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
          disabled={!nextParams}
          href={{
            pathname: formatPathname(APP_ROUTES.PRODUCTS),
            query: nextParams?.toString(),
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
