const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string') return false;
  num = +sampleActivity
  if (typeof(num) != 'number' || isNaN(num) || num <= 0) return false;
  let k = 0;
  k = 0.693/HALF_LIFE_PERIOD;
  let t = 0;
  t = Math.log(15/sampleActivity)/k;
  if (Math.ceil(t) <= 0) return false;
  return Math.ceil(t);

};
