import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react';

import type {FragmentType} from '@/graphql/generated';
import {graphql} from '@/graphql/generated';
import {getFragment} from '@/graphql/generated';
import {getIntl} from '@/i18n/get-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isDefined} from '@/lib/tools/is-defined';
import {getPrevNextParams} from '@/lib/tools/pagination';

import {PRODUCTS_PREFIX} from '../consts';
import {NavigationIcon} from './NavigationIcon';

const PaginationLinks_ProductCountableConnectionFragment = graphql(`
  fragment PaginationLinks_PageInfoFragment on PageInfo {
    hasNextPage
    endCursor
  }
`);

interface Props {
  readonly searchParams: URLSearchParams;
  readonly pageInfo: FragmentType<
    typeof PaginationLinks_ProductCountableConnectionFragment
  >;
}

export async function PaginationLinks(props: Props) {
  const pageInfo = getFragment(
    PaginationLinks_ProductCountableConnectionFragment,
    props.pageInfo,
  );
  const intl = await getIntl();

  const [prevParams, nextParams] = getPrevNextParams(
    props.searchParams,
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
