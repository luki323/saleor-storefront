import {SEARCH_PARAMS, DEFAULT_SEARCH_PARAMS} from '../_consts';

import type {SearchParams} from '../_types';

export function parseSearchParams({
  [SEARCH_PARAMS.PAGE_NUMBER]: pageNumberParam,
  [SEARCH_PARAMS.PAGE_SIZE]: pageSizeParam,
}: SearchParams = {}) {
  const [pageNumber, pageSize] = [
    Number(pageNumberParam ?? DEFAULT_SEARCH_PARAMS.PAGE_NUMBER),
    Number(pageSizeParam ?? DEFAULT_SEARCH_PARAMS.PAGE_SIZE),
  ];
  return {
    pageNumber,
    pageSize,
  };
}
