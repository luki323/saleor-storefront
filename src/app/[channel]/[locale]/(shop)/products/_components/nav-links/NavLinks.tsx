import type {
  CategoryNavLinksItemFragment,
  CollectionNavLinksItemFragment,
} from '@/graphql/generated/documents';
import {cn} from '@/lib/tools/cn';
import {createSearchParams} from '@/lib/tools/create-search-params';
import type {hasSearchParam} from '@/lib/tools/has-search-param';
import type {ConnectionWithChildren} from '@/lib/types/utils';

import type {NavLinkProps} from './NavLink';
import {NavLink} from './NavLink';
import {NavLinkWithChildren} from './NavLinkWithChildren';

type Node = CategoryNavLinksItemFragment | CollectionNavLinksItemFragment;

interface Props extends Omit<NavLinkProps, 'node'> {
  readonly items: ConnectionWithChildren<Node>;
}

export function NavLinks({
  items: {edges},
  searchParamName,
  urlSearchParams,
}: Props) {
  return (
    <ul className={cn('flex flex-col gap-0.5')}>
      {edges.map(({node: {children, ...restProps}}) => (
        <li key={restProps.id}>
          {children?.edges.length ? (
            <NavLinkWithChildren
              node={restProps}
              searchParamName={searchParamName}
              urlSearchParams={urlSearchParams}>
              <NavLinks
                items={children}
                searchParamName={searchParamName}
                urlSearchParams={getChildrenSearchParams(
                  urlSearchParams,
                  searchParamName,
                  restProps.slug,
                )}
              />
            </NavLinkWithChildren>
          ) : (
            <NavLink
              node={restProps}
              searchParamName={searchParamName}
              urlSearchParams={urlSearchParams}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

function getChildrenSearchParams(
  ...[searchParams, name, value]: Parameters<typeof hasSearchParam>
) {
  const updatedSearchParams = createSearchParams(searchParams);
  updatedSearchParams.delete(name, value);

  return updatedSearchParams;
}
