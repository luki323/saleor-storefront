import {DEFAULT_SEARCH_PARAMS, SEARCH_PARAMS} from '../_consts/consts';
import type {SearchParams} from '../_types/types';

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
