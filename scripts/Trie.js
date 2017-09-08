import Node from '../scripts/Node'

class Trie {

  constructor() {
    this.count = 0;
    this.head = new Node('');
  }

  insert(string) {
    let currentNode = this.head;
    let stringArray = [...string.toLowerCase()];
    let currentLetter = stringArray.shift();

    while (currentLetter) {
      if (!currentNode.children[currentLetter]) {
        currentNode.children[currentLetter] = new Node(currentLetter);
      }
      currentNode = currentNode.children[currentLetter];
      currentLetter = stringArray.shift();
    }
    currentNode.isWord = true;
    this.countWords();
  }

  // if (!currentNode.isWord) {
  //   currentNode.isWord = true;
  //   this.countWords();
  // }

  countWords() {
    this.count++
  }

  findNode(string) {
    let stringArray = [...string.toLowerCase()];
    let currentNode = this.head;

    stringArray.forEach((letter) => {
      if (currentNode.children[letter]) {
        currentNode = currentNode.children[letter];
      } else {
        return;
      }
    })
    return currentNode;
  }

  suggest(string) {
    if (this.findNode(string).data === string[string.length - 1]) {
      let currentNode = this.findNode(string);
      let suggestionsArray = [];

      this.findCompleteWords(string, currentNode, suggestionsArray)

      return suggestionsArray.slice(0, 9);
    }
  }

  findCompleteWords(string, node, array) {
    if (node.isWord === true) {
      if (node.selectProp.count > 0) {
        array.unshift(string);
      } else {
        array.push(string);
      }
    }
    Object.keys(node.children).forEach((key)=>{
      this.findCompleteWords(string + node.children[key].data, node.children[key], array);
    })
    return array;
  }

  populate(largeArrayOfWords) {
    largeArrayOfWords.forEach((word)=>{
      this.insert(word);
    })
  }

  select(word, prefix) {
    let selected = this.findNode(word);
    let selectedPrefix = prefix || 'hehe';

    selected.selectProp.count++;
    if (!selected.selectProp.prefixFreq.selectedPrefix) {
      selected.selectProp.prefixFreq.push({selectedPrefix: prefix, prefixCount: 1});
    } else {
      selected.selectProp.prefixFreq.prefixCount++;
    }
  }

}

export default Trie
