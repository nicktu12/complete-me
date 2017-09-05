import { expect, assert } from 'chai';
import Trie from '../scripts/Trie'

describe('Trie test', () => {

  it('should be able to insert a word into the trie', () => {

  })

  it('should be able to count the inserted words', () => {
    let completion = new Trie;

    assert.equal(completion.count, 0)

    completion.insert('pizza');
    assert.equal(completion.count, 1);

    completion.insert('apple');
    assert.equal(completion.count, 2)

  })

  it('should be able to return words based on common prefix', () => {
    let completion = new Trie;

    assert.equal(completion.count, 0)
    completion.insert('pizza');
    completion.insert('pizzeria');
    completion.insert('apple');
    assert.equal(completion.count, 3)

    assert.deepEqual(completion.suggest('piz'), ['pizza', 'pizzeria'])

    assert.deepEqual(completion.suggest('ap'), ['apple'])
  })

})
