export type RequiredNonNullable<Obj extends Record<PropertyKey, unknown>> = {
  readonly [Key in keyof Obj]-?: NonNullable<Obj[Key]>;
};

export type GetAllValues<Obj extends Record<PropertyKey, unknown>> =
  Obj extends unknown ? Obj[keyof Obj] : never;

export interface ConnectionWithChildren<Node extends Record<string, unknown>> {
  readonly edges: readonly {
    readonly node: Node & {
      readonly children?: ConnectionWithChildren<Node> | null;
    };
  }[];
}
