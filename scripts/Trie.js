// const Trie = (array) => {
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

  countWords() {
    this.count++
  }

  find(string) {
    let stringArray = [...string.toLowerCase()];
    let currentNode = this.head;

    stringArray.forEach((letter) => {
      if (currentNode.children[letter]) {
        currentNode = currentNode.children[letter];
      } else {
        return null;
      }
    })
    return currentNode;
  }

  suggest(string) {
    let currentNode = this.find(string);
    let suggestionsArray = [];

    const helper = (wordString, node) => {
      if (node.isWord === true) {
        if (node.selectProp.count > 0) {
          suggestionsArray.unshift(wordString);
        } else {
          suggestionsArray.push(wordString);
        }
      }
      Object.keys(node.children).forEach((key)=>{
        helper(wordString + node.children[key].data, node.children[key]);
      })
    }

    helper(string, currentNode);

    return suggestionsArray;
  }

  populate(largeArrayOfWords) {
    largeArrayOfWords.forEach((word)=>{
      this.insert(word);
    })
  }

  select(word, prefix) {
    let selected = this.find(word);
    let selectedPrefix = prefix || 'hehe';

    selected.selectProp.count++;
    selected.selectProp.prefixFreq.count++;
    selected.selectProp.prefixFreq.prefix.push(selectedPrefix);
  }

}

export default Trie
