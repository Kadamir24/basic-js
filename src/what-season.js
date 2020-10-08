const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) return 'Unable to determine the time of year!'
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw 'FAIL'
  }
  let month = date.getMonth()
  // console.log('mesyac', month)
  if (month >= 2 && month <= 4) {
    return 'spring'
  } else if (month >= 5 && month <= 7) {
    return 'summer'
  } else if (month >= 8 && month < 11) {
    return 'autumn'
  } else {
    return 'winter'
  }
};
