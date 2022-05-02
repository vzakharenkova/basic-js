const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
   return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`(${ value })`);
  },
  removeLink(position) {
    
  },
  reverseChain() {
    this.chain.reverse();
  },
  finishChain() {
    return this.chain.join('~~');
  }
};

module.exports = {
  chainMaker
};
