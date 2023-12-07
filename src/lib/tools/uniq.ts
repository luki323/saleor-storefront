export function uniq<Item>(arr: readonly Item[]) {
  return Array.from(new Set(arr));
}

export function uniqBy<Item>(
  arr: readonly Item[],
  fn: (item: Item) => unknown,
) {
  const newArr = [];
  const uniqueValues = new Set();

  for (const item of arr) {
    const key = fn(item);

    if (!uniqueValues.has(key)) {
      newArr.push(item);
      uniqueValues.add(key);
    }
  }

  return newArr;
}
