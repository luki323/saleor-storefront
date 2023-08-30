import {hasSearchParam} from './has-search-param';

export function toggleSearchParam(
  searchParams: URLSearchParams,
  name: string,
  value: string,
) {
  hasSearchParam(searchParams, name, value)
    ? searchParams.delete(name, value)
    : searchParams.append(name, value);
}
