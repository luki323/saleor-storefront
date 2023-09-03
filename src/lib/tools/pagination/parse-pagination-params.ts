import {isDefined} from '../is-defined';
import {FORWARD_SEARCH_PARAM_NAMES} from './consts';
import {getDecodedCursors} from './get-decoded-cursors';
import {getPrefixedParamName} from './get-prefixed-param-name';

interface Output {
  readonly first: number;
  readonly after?: string;
}

export function parsePaginationParams(
  searchParams: URLSearchParams,
  prefix: string,
  defaultPageSize: number,
): Output {
  const pageSize = Number(
    searchParams.get(
      getPrefixedParamName(prefix, FORWARD_SEARCH_PARAM_NAMES.FIRST),
    ) ?? defaultPageSize,
  );
  const after = getDecodedCursors(searchParams, prefix).at(-1);

  return {
    first: isNaN(pageSize) ? defaultPageSize : pageSize,
    ...(isDefined(after) && {after}),
  };
}
