import {FORWARD_SEARCH_PARAM_NAMES} from './consts';
import {getPrefixedParamName} from './get-prefixed-param-name';

export function deleteCursorsParam(
  searchParams: URLSearchParams,
  prefix: string,
) {
  const searchParamName = getPrefixedParamName(
    prefix,
    FORWARD_SEARCH_PARAM_NAMES.AFTER,
  );
  searchParams.delete(searchParamName);
}
