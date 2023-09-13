import {getPageSize} from '@/lib/tools/get-page-size';

import {DEFAULT_PAGE_SIZE} from '../_consts';
import type {KeyVariables} from './get-key-variables';

export function getKeyVariablesKey(
  keyVariables: KeyVariables,
  searchParams: URLSearchParams,
) {
  return JSON.stringify({
    keyVariables,
    pageSize: getPageSize(searchParams, DEFAULT_PAGE_SIZE),
  });
}
