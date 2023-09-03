import {FORWARD_SEARCH_PARAM_NAMES} from './consts';
import {deleteCursorsParam} from './delete-cursors-param';
import {getPrefixedParamName} from './get-prefixed-param-name';

export function changePageSize(
  searchParams: URLSearchParams,
  pageSize: number,
  prefix: string,
) {
  const searchParamName = getPrefixedParamName(
    prefix,
    FORWARD_SEARCH_PARAM_NAMES.FIRST,
  );

  const updatedSearchParams = new URLSearchParams(searchParams);
  deleteCursorsParam(updatedSearchParams, prefix);
  updatedSearchParams.set(searchParamName, pageSize.toString());

  return updatedSearchParams;
}
