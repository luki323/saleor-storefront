import type {
  CategoryNavLinkFragment,
  CollectionNavLinkFragment,
} from '@/graphql/generated/documents';
import {IntlLink} from '@/i18n/components/IntlLink';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {hasSearchParam} from '@/lib/tools/has-search-param';
import {deletePaginationSearchParams} from '@/lib/tools/pagination/delete-pagination-search-params';
import {toggleSearchParam} from '@/lib/tools/toggle-search-param';

type Node = CategoryNavLinkFragment | CollectionNavLinkFragment;

export interface NavLinkProps {
  readonly node: Node;
  readonly searchParamName: string;
  readonly urlSearchParams: URLSearchParams;
}

export function NavLink({
  node,
  searchParamName,
  urlSearchParams,
}: NavLinkProps) {
  const searchParams = deletePaginationSearchParams(urlSearchParams);
  toggleSearchParam(searchParams, searchParamName, node.slug);

  return (
    <span className={cn('whitespace-nowrap text-sm')}>
      <IntlLink
        href={{
          pathname: formatPathname(APP_ROUTES.PRODUCTS),
          query: searchParams.toString(),
        }}
        className={cn(
          'mr-1 underline-offset-4 hover:underline',
          hasSearchParam(urlSearchParams, searchParamName, node.slug) &&
            'underline',
        )}>
        {node.name}
      </IntlLink>
    </span>
  );
}
