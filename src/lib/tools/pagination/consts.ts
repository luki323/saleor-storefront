import type {PaginationKey} from './types';

export const PAGINATION_KEYS = {
  FIRST: 'first',
  AFTER: 'after',
  LAST: 'last',
  BEFORE: 'before',
} satisfies Record<string, PaginationKey>;
