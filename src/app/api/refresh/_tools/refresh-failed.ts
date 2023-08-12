export function refreshFailed(statusText: string) {
  return new Response(null, {
    status: 401,
    statusText,
    headers: {
      // TODO:
      // 'WWW-Authenticate': ''
    },
  });
}
