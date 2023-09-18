import dynamic from 'next/dynamic';
import type {UnionToIntersection} from 'type-fest';

import type {PageInfo} from '@/graphql/generated/graphql';
import {FormattedMessage} from '@/i18n/react-intl';
import type {usePaginationActions} from '@/lib/hooks/use-pagination-actions';

import {USE_PAGINATION} from '../../_consts';
import {PageNavButton} from './PageNavButton';

const PageSizeLinks = dynamic(() =>
  import('./PageSizeLinks').then((mod) => mod.PageSizeLinks),
);

type Props = {
  readonly pageInfo: PageInfo;
  readonly pageSize: number;
} & Pick<
  UnionToIntersection<ReturnType<typeof usePaginationActions>[number]>,
  'handlePrevPage' | 'handleNextPage'
>;

export function PageNav({pageInfo, pageSize, ...actions}: Props) {
  return (
    <nav>
      {USE_PAGINATION ? (
        <>
          <PageNavButton
            disabled={!pageInfo.hasPreviousPage}
            onClick={() => actions.handlePrevPage(pageSize)}>
            <FormattedMessage defaultMessage="Previous page" id="k9hDFZ" />
          </PageNavButton>
          <PageNavButton
            disabled={!pageInfo.hasNextPage}
            onClick={() => actions.handleNextPage(pageSize)}>
            <FormattedMessage defaultMessage="Next page" id="rBj9Ib" />
          </PageNavButton>
        </>
      ) : (
        <PageNavButton
          disabled={!pageInfo.hasNextPage}
          onClick={() => actions.handleNextPage(pageSize)}>
          <FormattedMessage defaultMessage="Load more" id="00LcfG" />
        </PageNavButton>
      )}
      {USE_PAGINATION && <PageSizeLinks {...actions} />}
    </nav>
  );
}
