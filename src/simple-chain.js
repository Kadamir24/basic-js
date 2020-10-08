const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    console.log(this.chain);
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value)
    // console.log(this.chain)
    return this
  },
  removeLink(position) {
    if (position > 0 && position < this.chain.length) {
      this.chain.splice(position - 1, 1);
      console.log('delete',this.chain);
    } else {
      this.chain = [];
      throw new Error();
    }
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let res = '';
    for(let i = 0; i < this.chain.length; i++){
      if (i == this.chain.length - 1) {
        res += '( ' + this.chain[i] + ' )'
        break
      }
      res += '( ' + this.chain[i] + ' )~~';
    }
    this.chain = []
    return res
  }
};

module.exports = chainMaker;

