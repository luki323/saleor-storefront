import type {GetProductsVariables} from '@/graphql/generated/documents';
import type {ProductWhereInput} from '@/graphql/generated/types';

export type PaginationVariables = Pick<
  GetProductsVariables,
  'first' | 'after' | 'last' | 'before'
>;

export type PaginationSearchParams = Partial<
  Record<keyof PaginationVariables, string>
>;

export type SearchParams = Partial<
  Record<
    | Extract<keyof GetProductsVariables, 'search'>
    | keyof PaginationSearchParams,
    string
  > &
    Record<
      Extract<keyof ProductWhereInput, 'category' | 'collection'>,
      string | readonly string[]
    >
>;
