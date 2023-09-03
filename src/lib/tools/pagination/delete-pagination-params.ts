import {FORWARD_SEARCH_PARAM_NAMES} from './consts';
import {getPrefixedParamName} from './get-prefixed-param-name';

export function deletePaginationParams(
  searchParams: URLSearchParams,
  prefix: string,
) {
  Object.values(FORWARD_SEARCH_PARAM_NAMES)
    .map((name) => getPrefixedParamName(prefix, name))
    .forEach((name) => searchParams.delete(name));
}
