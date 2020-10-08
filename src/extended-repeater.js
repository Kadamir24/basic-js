const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;
  res = '';
  let count = repeatTimes;
  let addCount = 0;

  // if (addition == false) {
  //   addition = 'false'
  // } else if (addition == null) {
  //   addition = 'null'
  // }
  if (addition != null) {
    addition = addition.toString();
  }


  for (let i = count; i > 0; i--) {
    addCount = additionRepeatTimes
    if (addition == '') {
      if (i == 1) {
        res += str
        break
      }
      res += str + separator;
    } else {
      if (i == 1) {

        if (addCount > 1) {
          let helper = '';
          // res += str + addition + separator;
          for (let j = addCount; j > 0; j--) {
            if (j == 1) {
              helper += addition
              break
            }
            helper += addition + additionSeparator 
          }
          if (i == 1) {
            res += str + helper;
            break
          }
          res += str + helper + separator
          continue
        }
        res += str + addition
        break
      }
      
      if (addCount > 1) {
        let helper = '';
        // res += str + addition + separator;
        for (let j = addCount; j > 0; j--) {
          if (j == 1) {
            helper += addition
            break
          }
          helper += addition + additionSeparator 
        }
        res += str + helper + separator
        continue
      }

      res += str + addition + separator;
 
    }
  }
  return res;
};
  