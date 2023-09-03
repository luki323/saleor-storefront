export function pickSearchParams(
  searchParams: URLSearchParams,
  ...names: readonly string[]
) {
  return new URLSearchParams(
    names.flatMap((name) =>
      searchParams.getAll(name).map((value) => [name, value]),
    ),
  );
}
