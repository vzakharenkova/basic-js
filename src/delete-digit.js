const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let x = 0, y = 0;
  for (let i = 0; i < arr.length; i++) {
    x = arr;
    let removed = x.splice(i, 1).join('');
    x = x.join('')
    if (+x > y) {
      y = +x;
    }
    arr = n.toString().split('');
  }
  return y;
}

module.exports = {
  deleteDigit
};
