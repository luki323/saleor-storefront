export function getCanonicalLocales(...locales: readonly string[]) {
  // @ts-expect-error https://github.com/microsoft/TypeScript/issues/29129
  return Intl.getCanonicalLocales(...locales);
}
