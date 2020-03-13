module.exports = function countCats(matrix) {
  let catsQuantity = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      if (matrix[i][j] == '^^') {
        catsQuantity += 1;
      };
    }
  }
  return catsQuantity;
};
