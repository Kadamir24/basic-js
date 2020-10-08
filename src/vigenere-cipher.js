const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isReverse) {
    if (isReverse == false) {
      this.isReverse = true;
    } 
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error();
    var res = "";
    key = key.toUpperCase();
    str = str.toUpperCase();
    for(let i = 0, j = 0; i < str.length; i++){
      let letter = str[i];
      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90){
        let letterChange = ((letter.charCodeAt() - 65) + (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
        res += String.fromCharCode(letterChange+65);
        j++;
      } else {
        res += letter;
      }
    }

    if (this.isReverse) {
      return res.split('').reverse().join("");
    }


    return res;
  }    
  decrypt(str, key) {
    if (!str || !key) throw new Error();
    var res = "";
    key = key.toUpperCase();
    str = str.toUpperCase();
    for(let i = 0, j = 0; i < str.length; i++){
      let letter = str[i];
      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90){
        let letterChange = ((letter.charCodeAt() - 65) +26 - (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
        res += String.fromCharCode(letterChange+65);
        j++;
      } else {
        res += letter;
      }
    }

    if (this.isReverse) {
      return res.split('').reverse().join("");
    }

    return res;
  }
}

module.exports = VigenereCipheringMachine;
