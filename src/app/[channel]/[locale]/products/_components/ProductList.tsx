import {
  GetPoductListDocument,
  type GetPoductListVariables,
} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/tools/fetch-graphql';
import {isDefined} from '@/tools/is-defined';
import {raise} from '@/tools/raise';

import {DEFAULT_PAGE_SIZE} from '../_consts';

import {Navigation} from './Navigation';

import type {AvailableChannel} from '@/i18n/consts';

export type ProductListProps = {
  readonly channel: AvailableChannel;
  readonly searchParams: Partial<Omit<GetPoductListVariables, 'channel'>>;
};

export async function ProductList({
  channel,
  searchParams: {
    first = DEFAULT_PAGE_SIZE,
    after = null,
    last = null,
    before = null,
  },
}: ProductListProps) {
  const {edges, pageInfo} =
    (
      await fetchGraphQL(GetPoductListDocument, {
        variables: {
          ...(isDefined(last) ? {last, before} : {first, after}),
          channel,
        },
      })
    ).products ?? raise('Products are not defined');

  return (
    <div>
      <ul>
        {edges.map(({node: {id, name}}) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
      <Navigation
        cursors={{
          first,
          after,
          last,
          before,
        }}
        pageInfo={pageInfo}
      />
    </div>
  );
}
