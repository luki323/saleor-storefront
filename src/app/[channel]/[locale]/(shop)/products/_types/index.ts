import type {ObjectValues} from '@/lib/types';

import {SEARCH_PARAMS} from '../_consts';
import {parseSearchParams} from '../_tools/parse-search-params';

export type SearchParams = Partial<
  Record<ObjectValues<typeof SEARCH_PARAMS>, string>
>;

export type ParsedSearchParams = ReturnType<typeof parseSearchParams>;
