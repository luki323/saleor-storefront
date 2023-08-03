import type {ObjectValues} from '@/lib/types/types';

import type {SEARCH_PARAMS} from '../_consts/consts';
import type {parseSearchParams} from '../_tools/parse-search-params';

export type SearchParams = Partial<
  Record<ObjectValues<typeof SEARCH_PARAMS>, string>
>;

export type ParsedSearchParams = ReturnType<typeof parseSearchParams>;
