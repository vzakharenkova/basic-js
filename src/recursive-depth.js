const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    let checker = 0;
    count(arr);
    function count(a) {
      for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
          counter += 1;
          count(a[i]);
        }
      }
        if (counter >= checker) {
          checker = counter;
          counter = 1;
        } else counter = 1;
    }
    return checker;
    }
}

module.exports = {
  DepthCalculator
};
