export const DEFAULT_SEARCH_PARAMS = {
  PAGE_NUMBER: 1,
  PAGE_SIZE: 5,
};

export const PAGE_SIZES = [DEFAULT_SEARCH_PARAMS.PAGE_SIZE, 10, 15, 20];

export const SEARCH_PARAMS = {
  PAGE_NUMBER: 'page',
  PAGE_SIZE: 'pagesize',
} as const;
