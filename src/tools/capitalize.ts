export function capitalize(value: string) {
  return `${(value.at(0) ?? '').toUpperCase()}${value.slice(1)}`;
}
