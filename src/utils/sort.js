export const sort = (arr, field, asc) => {
  const newArr = [...arr];
  newArr.sort((a, b) => {
    if (a[field] < b[field]) {
      return asc ? 1 : -1;
    }
    if (a[field] > b[field]) {
      return asc ? -1 : 1;
    }
    return 0;
  });

  return newArr;
};
