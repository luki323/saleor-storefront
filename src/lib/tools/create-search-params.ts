import {isArray} from './is-array';
import {toArray} from './to-array';

// See: https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1568
type SearchParamValue = string | number;

export type SearchParams = Record<
  string,
  SearchParamValue | readonly SearchParamValue[]
>;

// Extends `URLSearchParams` to include Next.js parsed search parameters
export function createSearchParams(
  init: ConstructorParameters<typeof URLSearchParams>[number] | SearchParams,
) {
  if (
    !(
      typeof init === 'object' &&
      !(init instanceof URLSearchParams) &&
      !isArray(init)
    )
  ) {
    return new URLSearchParams(init);
  }
  return new URLSearchParams(
    Object.entries(init).flatMap(([name, value]) =>
      toArray(value).map((value) => [name, value.toString()]),
    ),
  );
}
