import {SEARCH_PARAMS} from '../_consts';
import {parseSearchParams} from '../_tools/parse-search-params';

import type {ObjectValues} from '@/types';

export type SearchParams = Partial<
  Record<ObjectValues<typeof SEARCH_PARAMS>, string>
>;

export type ParsedSearchParams = ReturnType<typeof parseSearchParams>;
