import type {
  CategoryNavLinksItemFragment,
  CollectionNavLinksItemFragment,
} from '@/graphql/generated/documents';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';
import {toArray} from '@/lib/tools/to-array';
import type {ConnectionWithChildren} from '@/lib/types/utils';

import type {ProductsPageSearchParams} from '../../types';
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
  searchParams,
}: Props) {
  return (
    <ul className={cn('flex flex-col gap-0.5')}>
      {edges.map(({node: {children, ...restProps}}) => (
        <li key={restProps.id}>
          {children?.edges.length ? (
            <NavLinkWithChildren
              node={restProps}
              searchParamName={searchParamName}
              searchParams={searchParams}>
              <NavLinks
                items={children}
                searchParamName={searchParamName}
                searchParams={getChildrenSearchParams(
                  searchParams,
                  searchParamName,
                  restProps.slug,
                )}
              />
            </NavLinkWithChildren>
          ) : (
            <NavLink
              node={restProps}
              searchParamName={searchParamName}
              searchParams={searchParams}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

function getChildrenSearchParams(
  searchParams: ProductsPageSearchParams,
  name: NavLinkProps['searchParamName'],
  value: string,
) {
  return {
    ...searchParams,
    ...(isDefined(searchParams[name]) && {
      [name]: toArray(searchParams[name]).filter((v) => v !== value),
    }),
  };
}
