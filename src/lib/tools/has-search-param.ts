import type {ExtendedURLSearchParamsInit} from './create-search-params';
import {createSearchParams} from './create-search-params';

export function hasSearchParam(
  searchParams: ExtendedURLSearchParamsInit,
  name: string,
  value: string,
) {
  return createSearchParams(searchParams).getAll(name).includes(value);
}
