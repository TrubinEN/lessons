/**
 * Удаляем из массива объекты по ключу
 * возвращам массив
 *
 * @param {*} array
 * @param {*} id
 * @param {*} field
 */
export const deleteArrayValueById = (array, id, field = "id") => {
  let result = [...array];

  for (let i = 0; i < array.length; i++) {
    if (array[i][field] === id) {
      result.splice(i, 1);
      break;
    }
  }

  return [...result];
};
