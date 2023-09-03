import {IntlLink} from '@/i18n/components/IntlLink';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {hasSearchParam} from '@/lib/tools/has-search-param';
import {getPrefixedParamName} from '@/lib/tools/pagination';
import {FORWARD_SEARCH_PARAM_NAMES} from '@/lib/tools/pagination/consts';
import {pickSearchParams} from '@/lib/tools/pick-search-params';
import {toggleSearchParam} from '@/lib/tools/toggle-search-param';

import {PRODUCTS_PAGE_SEARCH_PARAM_NAMES} from '../../_consts';
import type {ProductPageSearchParamName} from '../../_types';
import {PRODUCTS_PREFIX} from '../pagination/consts';

export interface NavLinkProps {
  readonly node: {readonly name: string; readonly slug: string};
  readonly searchParamName: ProductPageSearchParamName;
  readonly searchParams: URLSearchParams;
}

export function NavLink({
  node: {name, slug},
  searchParamName,
  searchParams,
}: NavLinkProps) {
  const updatedSearchParams = pickSearchParams(
    searchParams,
    PRODUCTS_PAGE_SEARCH_PARAM_NAMES.CATEGORY,
    PRODUCTS_PAGE_SEARCH_PARAM_NAMES.COLLECTION,
    getPrefixedParamName(PRODUCTS_PREFIX, FORWARD_SEARCH_PARAM_NAMES.FIRST),
  );
  toggleSearchParam(updatedSearchParams, searchParamName, slug);

  return (
    <span className={cn('whitespace-nowrap text-sm')}>
      <IntlLink
        href={{
          pathname: formatPathname(APP_ROUTES.PRODUCTS),
          query: updatedSearchParams.toString(),
        }}
        className={cn(
          'mr-1 underline-offset-4 hover:underline',
          hasSearchParam(searchParams, searchParamName, slug) && 'underline',
        )}>
        {name}
      </IntlLink>
    </span>
  );
}
