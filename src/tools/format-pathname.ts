export function formatPathname(
  segments: readonly string[],
  trailingSlash = false,
) {
  return `/${segments.join('/')}/${trailingSlash ? '/' : ''}`;
}
