import type {PageInfo} from '@/graphql/generated/documents';

export type CursorKey = 'after' | 'before';

export type CountKey = 'first' | 'last';

export type PaginationKey = CursorKey | CountKey;

export type PaginationSearchParams = Partial<Record<PaginationKey, string>>;

export type NextPageSearchParams = Pick<
  PaginationSearchParams,
  'first' | 'after'
>;

export type PrevPageSearchParams = Pick<
  PaginationSearchParams,
  'last' | 'before'
>;

export type NextPageInfo = Pick<PageInfo, 'hasNextPage' | 'endCursor'>;

export type PrevPageInfo = Pick<PageInfo, 'hasPreviousPage' | 'startCursor'>;
