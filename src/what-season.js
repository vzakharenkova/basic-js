const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  let error = 'Invalid date!';
  if (typeof date === 'undefined') return 'Unable to determine the time of year!'
  // if (!(date instanceof Date)) {
  //   return 'Invalid date!'
  // }
  try { date.getUTCMonth();
  } catch (e) {
    throw error;
  }
  let month = date.getUTCMonth();
  if (month < 2 || month === 11) return 'winter';
  if (month > 1 && month < 5) return 'spring';
  if (month > 4 && month < 8) return 'summer';
  if (month > 7 && month < 11) return 'fall';
  
}

module.exports = {
  getSeason
};
