import {isDefined} from '@/lib/tools/is-defined';

import {CURSORS_SEPARATOR, FORWARD_SEARCH_PARAM_NAMES} from './consts';
import {getPrefixedParamName} from './get-prefixed-param-name';

export function getDecodedCursors(
  searchParams: URLSearchParams,
  prefix: string,
) {
  const searchParamName = getPrefixedParamName(
    prefix,
    FORWARD_SEARCH_PARAM_NAMES.AFTER,
  );
  const searchParamValue = searchParams.get(searchParamName);

  return isDefined(searchParamValue)
    ? searchParamValue.split(CURSORS_SEPARATOR)
    : [];
}
