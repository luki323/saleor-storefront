export const MIME_TYPES = {
  JSON: 'application/json',
  GRAPHQL_RESPONSE_JSON: 'application/graphql-response+json',
};

export function formatMimeTypes(...items: readonly (readonly string[])[]) {
  return items.map((item) => item.join('; ')).join(', ');
}
