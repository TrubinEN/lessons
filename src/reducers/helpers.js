export const sortOrderFn = (a, b) => b.createdAt - a.createdAt;

/**
 * Удаляем из массива объекты по ключу
 * возвращам массив
 *
 * @param {*} state
 * @param {*} id
 */
export const deleteArrayValueById = (array, id, field = "id") => {
  let result = array;

  array.forEach((item, i) => {
    if (item[field] === id) {
      result.splice(i, 1);
      //break;
    }
  });

  return [...result];
};
