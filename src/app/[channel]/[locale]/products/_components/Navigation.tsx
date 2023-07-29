import {FormattedMessage} from '@/i18n/components/FormattedMessage';
import {isDefined} from '@/tools/is-defined';

import {DEFAULT_PAGE_SIZE, PAGE_SIZES} from '../_consts';

import {NavigationLink} from './NavigationLink';

import type {PageInfo} from '@/graphql/generated/documents';

type Props = {
  readonly cursors: {
    readonly first: number | null;
    readonly after: string | null;
    readonly last: number | null;
    readonly before: string | null;
  };
  readonly pageInfo: PageInfo;
};

export function Navigation({
  cursors: {first, after, last, before},
  pageInfo: {
    startCursor = null,
    hasPreviousPage,
    endCursor = null,
    hasNextPage,
  },
}: Props) {
  const pageSize = (isDefined(last) ? last : first) ?? DEFAULT_PAGE_SIZE;

  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <NavigationLink
            disabled={!hasPreviousPage}
            query={{
              last: pageSize,
              before: startCursor,
            }}>
            <FormattedMessage defaultMessage="Previous" id="JJNc3c" />
          </NavigationLink>
        </li>
        <li>
          <NavigationLink
            disabled={!hasNextPage}
            query={{
              first: pageSize,
              after: endCursor,
            }}>
            <FormattedMessage defaultMessage="Next" id="9+Ddtu" />
          </NavigationLink>
        </li>
      </ul>
      <ul className="flex gap-4">
        {PAGE_SIZES.map((pageSize) => (
          <li key={pageSize}>
            <NavigationLink
              query={{
                ...(isDefined(last)
                  ? {last: pageSize, before}
                  : {first: pageSize, after}),
              }}>
              {pageSize}
            </NavigationLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
