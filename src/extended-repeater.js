const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let times = 1;
  let separator = '+';
  let addSeparator = '|';
  let addRepeat = 0;
  let add = '';
  if (!str) {
    str = `${str}`;
  }
  if (options.repeatTimes) {
    times = options.repeatTimes;
  }

  if (options.separator) {
    separator = options.separator;
  }
  if (options.addition !== undefined) {
    add = options.addition;
  } 
  if (options.addition === null) {
    add = `${options.addition}`;
  }
  if (options.additionSeparator) {
    addSeparator = options.additionSeparator;
  }
  if (options.additionRepeatTimes) {
    addRepeat = options.additionRepeatTimes;
  }
  let adding = [add];
  for (let j = 0; j < addRepeat-1; j++) {
    adding.push(addSeparator);
    adding.push(add);
    
  }
  adding = adding.join('');
  let result = [str, adding];
  for (let i = 0; i < times-1; i++) {
    
    result.push(separator);
    result.push(str);
    result.push(adding);
    
    
  }
    
  return result.join('');
}

module.exports = {
  repeater
};
