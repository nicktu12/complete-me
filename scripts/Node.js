class Node {

  constructor(data) {
    this.data = data;
    this.children = {};
    this.isWord = false;
    this.selectProp = {count: 0, prefixFreq: []};
  }
}

export default Node
