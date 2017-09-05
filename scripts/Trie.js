// const Trie = (array) => {

class Trie {
  constructor() {
    this.count = 0;
    this.head = new Node('');
  }

  insert(string) {
    let wordCheck = [];
    let stringArray = [...string.toLowercase()];
    let currentLetter = stringArray.shift();
    let currentNode = this.head;

    wordCheck.push(currentLetter)

    while (currentLetter) {
      if(!currentLetter.children[currentLetter]){
        currentNode.children[currentLetter] = new Node(currentLetter);
      }
      currentNode = currentNode.children[currentLetter];
      currentLetter = stringArray.shift();
      wordCheck.push(currentLetter)
    }
    if (wordCheck.join() === string) {
      currentNode.isWord = true;
      this.count++;
    }

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
