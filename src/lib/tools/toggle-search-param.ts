import type {ReadonlyURLSearchParams} from 'next/navigation';

export function toggleSearchParam(
  searchParams: URLSearchParams | ReadonlyURLSearchParams,
  name: string,
  value: string,
) {
  const updatedSearchParams = new URLSearchParams(searchParams);

  updatedSearchParams.has(name, value)
    ? updatedSearchParams.delete(name, value)
    : updatedSearchParams.append(name, value);

  return updatedSearchParams;
}
