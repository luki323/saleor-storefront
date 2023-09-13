import {getPageSize} from '@/lib/tools/get-page-size';

import {DEFAULT_PAGE_SIZE} from '../_consts';
import type {QueryVariables} from './get-query-variables';

export function getQueryVariablesKey(
  keyVariables: QueryVariables,
  searchParams: URLSearchParams,
) {
  return JSON.stringify({
    keyVariables,
    pageSize: getPageSize(searchParams, DEFAULT_PAGE_SIZE),
  });
}
