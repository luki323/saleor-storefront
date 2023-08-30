import {isArray} from './is-array';
import {isDefined} from './is-defined';
import {toArray} from './to-array';

// See: https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1568
export type SearchParamValue = string | number;

type SearchParams = Record<
  string,
  SearchParamValue | readonly SearchParamValue[]
>;

export type ExtendedURLSearchParamsInit =
  | ConstructorParameters<typeof URLSearchParams>[number]
  | SearchParams;

// Extends 'URLSearchParams' to include Next.js parsed search parameters
export function createSearchParams(init: ExtendedURLSearchParamsInit) {
  if (!isSearchParams(init)) {
    return new URLSearchParams(init);
  }
  return new URLSearchParams(
    Object.entries(init).flatMap(([key, value]) =>
      toArray(value).map((item) => [key, item.toString()]),
    ),
  );
}

function isSearchParams(
  init: ExtendedURLSearchParamsInit,
): init is SearchParams {
  return !(
    typeof init === 'string' ||
    isArray(init) ||
    init instanceof URLSearchParams ||
    !isDefined(init)
  );
}
