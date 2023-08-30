import type {
  CategoryNavLinksItemFragment,
  CollectionNavLinksItemFragment,
} from '@/graphql/generated/documents';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

import type {NavLinkProps} from './NavLink';
import {NavLink} from './NavLink';

interface Props extends Omit<NavLinkProps, 'node'> {
  readonly node: CategoryNavLinksItemFragment | CollectionNavLinksItemFragment;
}

export function NavLinkWithChildren({
  children,
  node,
  searchParamName,
  urlSearchParams,
}: PropsWithChildren<Props>) {
  return (
    <>
      <NavLink
        node={node}
        searchParamName={searchParamName}
        urlSearchParams={urlSearchParams}
      />
      <div className={cn('pl-4')}>{children}</div>
    </>
  );
}
