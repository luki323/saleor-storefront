import {Suspense} from 'react';

import {FormattedMessage} from '@/i18n/components/FormattedMessage';

import {LoadMoreButton} from './_components/LoadMoreButton';
import {LoadMoreList} from './_components/LoadMoreList';
import {PageSizes} from './_components/PageSizes';
import {PaginationLinks} from './_components/PaginationLinks';
import {PaginationList} from './_components/PaginationList';
import {PreloadCursors} from './_components/PreloadCursors';
import {parseSearchParams} from './_tools/parse-search-params';
import type {SearchParams} from './_types/types';

interface Props {
  readonly searchParams?: SearchParams;
}

export default function ProductsPage({searchParams}: Props) {
  const {pageNumber, pageSize} = parseSearchParams(searchParams);

  return (
    <div>
      <PreloadCursors>
        <Suspense fallback="Loading products...">
          <PaginationList pageNumber={pageNumber} pageSize={pageSize} />
        </Suspense>
        <nav>
          <PaginationLinks pageNumber={pageNumber} pageSize={pageSize} />
          <PageSizes pageNumber={pageNumber} pageSize={pageSize} />
        </nav>
      </PreloadCursors>
      <Suspense
        fallback={
          <FormattedMessage defaultMessage="Loading products..." id="5Mlwka" />
        }>
        <LoadMoreList />
        <LoadMoreButton />
      </Suspense>
    </div>
  );
}
