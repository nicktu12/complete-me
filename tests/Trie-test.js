import { expect } from 'chai';
import Trie from '../scripts/Trie'
import dictionary from '../scripts/dict'
// import locus from 'locus'

describe('Trie test', () => {
  let completion;

  beforeEach(() => {
      completion = new Trie();
  })

  it('should be an object', () => {
    expect(typeof(completion)).to.eq('object');
  })

  context('insert()', () => {
    it('should be able to insert nodes in the trie', () => {
      completion.insert('pizza');

      expect(completion.head.children.p.data).to.eq('p');
      expect(completion.head.children.p.children.i.data).to.eq('i');
    })

    it('should be able to count the inserted words', () => {
      expect(completion.count).to.eq(0);
      completion.insert('pizza');

      expect(completion.count).to.eq(1);
      completion.insert('apple');
      completion.insert('zip');

      expect(completion.count).to.eq(3);
    })
  })

  context('findNode()', () => {
    it('should return the node of the last letter of the function', () => {
      completion.insert('pizza');
      completion.findNode('piz')

      expect(completion.findNode('piz').data).to.eq('z');
    })
  })

  context('suggest()', () => {
    it('should should be able to offer suggestions based on a prefix', () => {
      expect(completion.count).to.eq(0);
      completion.insert('pizza');
      completion.insert('pizzeria');
      completion.insert('apple');
      completion.insert('arson');
      completion.insert('fries');
      completion.insert('hometeam');
      completion.insert('pie');
      completion.insert('alley');
      completion.insert('pasta');

      expect(completion.count).to.eq(9);
      expect(completion.suggest('a')).to.deep.eq(['apple', 'arson', 'alley']);
      expect(completion.suggest('pi')).to.deep.eq(['pizza', 'pizzeria', 'pie']);
      expect(completion.suggest('piz')).to.deep.eq(['pizza', 'pizzeria']);
    })
  })

  context('populate()', () => {
    it('should populate the trie with words', () => {
      expect(completion.count).to.eq(0);
      completion.populate(['pizza', 'pizzeria', 'pie']);

      expect(completion.count).to.eq(3);
    })

    it('should populate the trie with the dictionary', () => {
      expect(completion.count).to.eq(0);
      completion.populate(dictionary);

      expect(completion.count).to.eq(235886);
    })
  })

  // tests for if its already been inserted
  // need to update completion count to equal 234371
  // add the follwing to the end of the insert function
  // if(!currentNode.isWord) {
  //   currentNode.isWord = true;
  //   this.count++;
  // }

  context('select()', () => {
    it('should increment the count of a selected word', () => {
      completion.populate(dictionary);
      completion.select('yellow');

      expect(completion.findNode('yellow').selectProp.count).to.eq(1);
    })

    it('should save the prefix and count of selections for that prefix', () => {
      // completion.populate(dictionary);
      // completion.select('pizza', 'piz');
      // completion.select('pizza', 'pi');
      // completion.select('pizza', 'piz');
      //
      // expect(completion.findNode('pizza').selectProp.prefixFreq.count).to.eq(3);
    })
  })

})
