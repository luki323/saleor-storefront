import type {
  CategoryNavLinkFragment,
  CollectionNavLinkFragment,
} from '@/graphql/generated/documents';
import {IntlLink} from '@/i18n/components/IntlLink';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {createSearchParams} from '@/lib/tools/create-search-params';
import {formatPathname} from '@/lib/tools/format-pathname';
import {hasSearchParam} from '@/lib/tools/has-search-param';
import {isDefined} from '@/lib/tools/is-defined';
import {PAGINATION_KEYS} from '@/lib/tools/pagination/consts';
import {toggleSearchParam} from '@/lib/tools/toggle-search-param';
import {PRODUCTS_PAGE_SERACH_PARAM_KEYS} from '@/modules/shop/consts';

import type {ProductsPageSearchParams} from '../../types';

type Node = CategoryNavLinkFragment | CollectionNavLinkFragment;

export interface NavLinkProps {
  readonly node: Node;
  readonly searchParamName: keyof Pick<
    ProductsPageSearchParams,
    'category' | 'collection'
  >;
  readonly searchParams: ProductsPageSearchParams;
}

export function NavLink({node, searchParamName, searchParams}: NavLinkProps) {
  const pageSize =
    searchParams[PAGINATION_KEYS.FIRST] ?? searchParams[PAGINATION_KEYS.LAST];

  const updatedSearchParams = createSearchParams({
    ...(isDefined(pageSize) && {
      [PAGINATION_KEYS.FIRST]:
        searchParams[PAGINATION_KEYS.FIRST] ??
        searchParams[PAGINATION_KEYS.LAST],
    }),
    [PRODUCTS_PAGE_SERACH_PARAM_KEYS.CATEGORY]:
      searchParams[PRODUCTS_PAGE_SERACH_PARAM_KEYS.CATEGORY] ?? [],
    [PRODUCTS_PAGE_SERACH_PARAM_KEYS.COLLECTION]:
      searchParams[PRODUCTS_PAGE_SERACH_PARAM_KEYS.COLLECTION] ?? [],
  });

  toggleSearchParam(updatedSearchParams, searchParamName, node.slug);

  return (
    <span className={cn('whitespace-nowrap text-sm')}>
      <IntlLink
        href={{
          pathname: formatPathname(APP_ROUTES.PRODUCTS),
          query: updatedSearchParams.toString(),
        }}
        className={cn(
          'mr-1 underline-offset-4 hover:underline',
          hasSearchParam(searchParams, searchParamName, node.slug) &&
            'underline',
        )}>
        {node.name}
      </IntlLink>
    </span>
  );
}
