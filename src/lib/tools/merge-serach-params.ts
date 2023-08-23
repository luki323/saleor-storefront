export function mergeSearchParams(
  ...searchParamsArr: readonly URLSearchParams[]
) {
  const mergedSearchParams = new URLSearchParams();

  for (const searchParams of searchParamsArr) {
    for (const [key, value] of searchParams.entries()) {
      mergedSearchParams.append(key, value);
    }
  }
  return mergedSearchParams;
}
