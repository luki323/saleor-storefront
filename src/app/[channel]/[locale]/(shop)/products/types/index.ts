import type {SearchParams} from '@/lib/tools/create-search-params';
import type {PaginationSearchParams} from '@/lib/tools/pagination/types';
import type {GetAllValues} from '@/lib/types/utils';
import type {PRODUCTS_PAGE_SERACH_PARAM_KEYS} from '@/modules/shop/consts';

export type ProductsPageSearchParams = PaginationSearchParams &
  Partial<
    Record<
      GetAllValues<typeof PRODUCTS_PAGE_SERACH_PARAM_KEYS>,
      SearchParams[keyof SearchParams]
    >
  >;
