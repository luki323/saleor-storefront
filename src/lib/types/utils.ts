export type RequiredNonNullable<Obj extends Record<PropertyKey, unknown>> = {
  readonly [Key in keyof Obj]-?: NonNullable<Obj[Key]>;
};
