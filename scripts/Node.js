class Node {

  constructor(letter) {
    this.id = letter;
    this.children = [];
  }

  add() {
    this.children = new Node(letter)
  }

}

export default Node
