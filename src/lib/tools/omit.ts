export function omit<
  Obj extends Record<PropertyKey, unknown>,
  Key extends keyof Obj,
>(obj: Obj, ...keys: readonly Key[]) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([key]) => !(keys as readonly string[]).includes(key),
    ),
  ) as Omit<Obj, Key>;
}
