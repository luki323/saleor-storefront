export type RequiredNonNullable<Obj extends Record<string, unknown>> = {
  readonly [K in keyof Obj]-?: NonNullable<Obj[K]>;
};
