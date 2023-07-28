export function uppercaseFirst(value: string) {
  return `${(value.at(0) ?? '').toUpperCase()}${value.slice(1)}`;
}
