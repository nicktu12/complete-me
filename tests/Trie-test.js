import { expect, assert } from 'chai';
import Trie from '../scripts/Trie'

describe('Trie test', () => {

  it('should be able to insert a word into the trie', () => {

  })

  it('should be able to count the inserted words', () => {
    let completion = new Trie();

    expect(completion.count).to.eq(0);

    assert.equal(completion.count, 0)

    completion.insert('pizza');
    expect(completion.count).to.eq(1);

    completion.insert('apple');
    completion.insert('zip');

    expect(completion.count).to.eq(3);

  })

  it('should should be able to offer suggestions based on a prefix', () => {
    let completion = new Trie();

    expect(completion.count).to.eq(0);

    completion.insert('pizza');
    completion.insert('pizzeria');
    completion.insert('apple');
    completion.insert('arson');
    completion.insert('bumble');
    completion.insert('friend');
    completion.insert('hometeam');
    completion.insert('pitchfork');
    completion.insert('altruism');
    completion.insert('pasta');

    expect(completion.count).to.eq(10);
    expect(completion.suggest('a')).to.deep.eq(['apple', 'arson', 'altruism']);
    expect(completion.suggest('p')).to.deep.eq(['pizza', 'pizzeria', 'pitchfork', 'pasta']);
    expect(completion.suggest('pi')).to.deep.eq(['pizza', 'pizzeria', 'pitchfork']);
    expect(completion.suggest('piz')).to.deep.eq(['pizza', 'pizzeria']);
  })

})
