const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  result: '',
  getLength() {
   return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      his.chain.push(`()`);
      return chainMaker;
    } else {
      this.chain.push(`( ${value} )`);
      return chainMaker;
    }
    
  },
  removeLink(position) {
    if (this.chain[position] && position > 0 && typeof position === 'number') {
      this.chain.splice(position-1, 1);
      return chainMaker
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    this.result = this.chain.join('~~');
    this.chain = [];
    return this.result;
  }
};

module.exports = {
  chainMaker
};
