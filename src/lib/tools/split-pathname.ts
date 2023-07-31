export function splitPathname(pathname: string) {
  if (pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }
  return pathname.slice(1).split('/');
}
