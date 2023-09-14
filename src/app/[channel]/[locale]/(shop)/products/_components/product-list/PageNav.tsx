import type {UnionToIntersection} from 'type-fest';

import {FormattedMessage} from '@/i18n/react-intl';
import type {usePaginationActions} from '@/lib/hooks/use-pagination-actions';

import {USE_PAGINATION} from '../../_consts';
import {PageNavButton} from './PageNavButton';

type Props = Pick<
  UnionToIntersection<ReturnType<typeof usePaginationActions>[number]>,
  'pageInfo' | 'handlePrevPage' | 'handleNextPage'
>;

export function PageNav({pageInfo, handlePrevPage, handleNextPage}: Props) {
  return (
    <nav>
      {USE_PAGINATION ? (
        <>
          <PageNavButton
            disabled={!pageInfo?.hasPreviousPage}
            onClick={handlePrevPage}>
            <FormattedMessage defaultMessage="Previous page" id="k9hDFZ" />
          </PageNavButton>
          <PageNavButton
            disabled={!pageInfo?.hasNextPage}
            onClick={handleNextPage}>
            <FormattedMessage defaultMessage="Next page" id="rBj9Ib" />
          </PageNavButton>
        </>
      ) : (
        <PageNavButton
          disabled={!pageInfo?.hasNextPage}
          onClick={handleNextPage}>
          <FormattedMessage defaultMessage="Load more" id="00LcfG" />
        </PageNavButton>
      )}
    </nav>
  );
}
