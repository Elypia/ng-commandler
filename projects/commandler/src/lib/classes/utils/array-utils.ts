/**
 * @param array The array of items to group up.
 * @param callback A callback to obtain a grouping key.
 */
export function groupBy<T, R>(array: T[], callback: (t: T) => R): Map<R, T[]> {
  const result = new Map<R, T[]>();

  for (const arr of array) {
    const returnValue = callback(arr);

    if (result.has(returnValue))
      result.get(returnValue).push(arr);
    else
      result.set(returnValue, [arr]);
  }

  return result;
}
