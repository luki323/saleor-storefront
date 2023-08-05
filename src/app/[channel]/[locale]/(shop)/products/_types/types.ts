import type {GetProductsVariables} from '@/graphql/generated/documents';

export type SearchParams = Partial<
  Record<
    | keyof Pick<GetProductsVariables, 'first' | 'after' | 'last' | 'before'>
    | keyof Pick<NonNullable<GetProductsVariables['filter']>, 'search'>,
    string
  >
>;
