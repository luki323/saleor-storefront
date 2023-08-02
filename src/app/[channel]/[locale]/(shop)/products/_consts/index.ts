export const DEFAULT_SEARCH_PARAMS = {
  PAGE_NUMBER: 1,
  PAGE_SIZE: 10,
};

export const PAGE_SIZES = [DEFAULT_SEARCH_PARAMS.PAGE_SIZE, 15, 20];

export const SEARCH_PARAMS = {
  PAGE_NUMBER: 'page',
  PAGE_SIZE: 'pagesize',
} as const;

export const PRODUCT_CURSORS_TAG = 'product-cursors-tag';

export const PRODUCTS_QUERY_KEY = 'products-key';
