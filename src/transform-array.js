const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let result = arr.slice();
  for (let i = 0; i < result.length; i++) {
    let removed;
    switch (result[i]) {
      case '--discard-next' :
        removed = result.splice(i, 2);
      case '--discard-prev' :
        removed = result.splice(result[i-1], 2);
      case '--double-next' :
        removed = result.splice(i, 1, result[i+1]);
      case '--double-prev' :
        removed = result.splice(i, 1, result[i-2]);
    }
  }
  return result;
}

module.exports = {
  transform
};
