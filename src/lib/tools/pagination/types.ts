import type {SearchParams} from '../create-search-params';

export type PaginationKey = 'first' | 'after' | 'last' | 'before';

export type PaginationSearchParams = Partial<
  Record<PaginationKey, SearchParams[keyof SearchParams]>
>;
