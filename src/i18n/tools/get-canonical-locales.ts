export function getCanonicalLocales(locale?: string | readonly string[]) {
  // @ts-expect-error See: https://github.com/microsoft/TypeScript/issues/29129
  return Intl.getCanonicalLocales(locale);
}
