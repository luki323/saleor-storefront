import {cn} from '@/lib/tools/cn';
import type {ConnectionWithChildren} from '@/lib/types/utils';

import type {NavLinkProps} from './NavLink';
import {NavLink} from './NavLink';

interface Props extends Omit<NavLinkProps, 'node'> {
  readonly nodes: ConnectionWithChildren<NavLinkProps['node']>;
}

export function NavLinks({nodes, searchParamName, searchParams}: Props) {
  return (
    <ul className={cn('flex flex-col gap-0.5')}>
      {nodes.edges.map(({node: {name, slug, children}}) => {
        const navLink = (
          <NavLink
            node={{name, slug}}
            searchParamName={searchParamName}
            searchParams={searchParams}
          />
        );
        const updatedSearchParams = new URLSearchParams(searchParams);
        updatedSearchParams.delete(name, slug);

        return !children?.edges.length ? (
          navLink
        ) : (
          <>
            {navLink}
            <div className={cn('pl-4')}>
              <NavLinks
                nodes={children}
                searchParamName={searchParamName}
                searchParams={updatedSearchParams}
              />
            </div>
          </>
        );
      })}
    </ul>
  );
}
