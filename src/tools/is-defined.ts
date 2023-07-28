export function isDefined<Defined>(
  value: Defined | null | undefined,
): value is Defined {
  return value !== null && value !== undefined;
}
