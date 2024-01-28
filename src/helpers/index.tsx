export const renderList = (num: number, value: number): number[] => {
  const list = [];
  for (let i = 0; i < num - 1 ; i++) {
    list.push(value);
  }

  return list;
};

export const setLocalStorage = (
  key: string,
  value: Record<string, number> | Record<string, number>[]
): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const readLocalStorage = (key: string): Record<number, number> => {
  const value = window.localStorage.getItem(key);
  let rowsInfo: Record<number, number> = {};
  if (value) rowsInfo = JSON.parse(value);
  return rowsInfo;
};
