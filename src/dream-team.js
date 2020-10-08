const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = []
  // members.forEach( name => {
    if (members == null) return false
    for (let i = 0; i < members.length; i++) {
      let name = members[i]
      if (typeof(name) !== 'string') continue
      name = name.trim();
      name = name.charAt(0).toUpperCase()
      arr.push(name);
    }
    // if (typeof(name) !== 'string') return false
    // name = name.trim();
    // name = name.charAt(0).toUpperCase()
    // arr.push(name);
  // });
  arr.sort()
  return arr.join('')
};
