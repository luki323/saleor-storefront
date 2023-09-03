import {CURSORS_SEPARATOR, FORWARD_SEARCH_PARAM_NAMES} from './consts';
import {deleteCursorsParam} from './delete-cursors-param';
import {getPrefixedParamName} from './get-prefixed-param-name';

export function setCursors(
  searchParams: URLSearchParams,
  updatedCursors: readonly string[],
  prefix: string,
) {
  const searchParamName = getPrefixedParamName(
    prefix,
    FORWARD_SEARCH_PARAM_NAMES.AFTER,
  );
  updatedCursors.length
    ? searchParams.set(searchParamName, updatedCursors.join(CURSORS_SEPARATOR))
    : deleteCursorsParam(searchParams, prefix);
}
