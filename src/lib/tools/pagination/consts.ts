export const FORWARD_SEARCH_PARAM_NAMES = {
  FIRST: 'first',
  AFTER: 'after',
} as const;

// Shouldn't be Base64 char (https://en.wikipedia.org/wiki/Base64) as the Saleor
// uses it to encode cursors
export const CURSORS_SEPARATOR = '_';
