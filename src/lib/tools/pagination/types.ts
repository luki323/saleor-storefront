import type {PageInfo} from '@/graphql/generated/graphql';

import type {FORWARD_SEARCH_PARAM_NAMES} from './consts';

export type ForwardPageInfo = Pick<PageInfo, 'hasNextPage' | 'endCursor'>;

export type ForwardSearchParamName =
  (typeof FORWARD_SEARCH_PARAM_NAMES)[keyof typeof FORWARD_SEARCH_PARAM_NAMES];
