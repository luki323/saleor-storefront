import type {GetProductsVariables} from '@/graphql/generated/documents';
import type {ProductWhereInput} from '@/graphql/generated/types';
import type {PaginationSearchParams} from '@/lib/tools/pagination/types';

export type SearchParamValue = string | readonly string[];

export type PredefinedProductsPageSearchParams = Partial<
  PaginationSearchParams &
    Record<
      keyof Pick<ProductWhereInput, 'category' | 'collection'>,
      SearchParamValue
    > &
    Record<keyof Pick<GetProductsVariables, 'search'>, string>
>;

export type ProductsPageSearchParams = Record<string, SearchParamValue> &
  PredefinedProductsPageSearchParams;
