export function formatMimeTypes(...items: readonly (readonly string[])[]) {
  return items.map((item) => item.join('; ')).join(', ');
}
