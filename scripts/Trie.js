// const Trie = (array) => {

class Trie {
  constructor() {
    this.count = 0;
    this.wordArray = [];
    this.nodeArray = [];
  }

  insert(string) {
    this.wordArray.push();
    let splitString = string.split('');

    for (var i = 0; i < nodeArray.length; i++) {
      if (nodeArray[i].id !== splitString[0]) {
        new Node(splitString[0])
      } else {

      }
    }

    this.countWords();
  }

  countWords() {
    this.count++
  }

  suggest(string) {
    return this.wordArray.filter((word) => {
      return word.includes(string)
    })
  }

}

export default Trie
