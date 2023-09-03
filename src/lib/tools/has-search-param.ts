import {createSearchParams} from './create-search-params';

export function hasSearchParam(
  searchParams: Parameters<typeof createSearchParams>[number],
  name: string,
  value: string,
) {
  return createSearchParams(searchParams).getAll(name).includes(value);
}
