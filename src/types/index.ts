export type ObjectValues<Obj extends Record<PropertyKey, unknown>> =
  Obj[keyof Obj];
