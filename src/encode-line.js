const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let counter = 0;
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      counter += 1;
    } else if (counter !== 0) {
      resultArr.push(counter+1);
      resultArr.push(arr[i]);
      counter = 0;
    } else resultArr.push(arr[i]);
  }
  return resultArr.join('');
}

module.exports = {
  encodeLine
};
