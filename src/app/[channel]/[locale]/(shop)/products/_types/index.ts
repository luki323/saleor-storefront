import type {PRODUCTS_PAGE_SEARCH_PARAM_NAMES} from '../_consts';

export type ProductPageSearchParamName =
  (typeof PRODUCTS_PAGE_SEARCH_PARAM_NAMES)[keyof typeof PRODUCTS_PAGE_SEARCH_PARAM_NAMES];
