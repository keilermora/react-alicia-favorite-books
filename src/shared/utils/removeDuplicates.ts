export const removeDuplicates = (arr: string[]) =>
  arr.sort().reduce((a, b) => {
    if (a.slice(-1)[0] !== b) a.push(b);
    return a;
  }, [] as string[]);
