export function uppercaseFirstLetter(value: string) {
  const firstLetter = value.at(0);

  if (!firstLetter) {
    return value;
  }
  return `${firstLetter.toUpperCase()}${value.slice(1).toLowerCase()}`;
}
