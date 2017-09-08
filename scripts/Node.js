class Node {

  constructor(data) {
    this.data = data;
    this.children = {};
    this.isWord = false;
    this.selectProp = {count: 0, prefixFreq: {count: 0, prefix: []}};
  }
}

export default Node
