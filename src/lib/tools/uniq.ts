export function uniq<T>(arr: readonly T[]) {
  return Array.from(new Set(arr));
}
