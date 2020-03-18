const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(String(value));
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position >= this.getLength()) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const result = this.arr.slice();
    this.arr = [];
    return `( ${result.join(' )~~( ')} )`;
  }
};

module.exports = chainMaker;
