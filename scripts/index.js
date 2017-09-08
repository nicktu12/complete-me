// require('./scripts/Trie')
// require('./scripts/dict')
import Trie from './Trie'
import dictionary from './dict'
// import('scripts.Trie')
// import { Trie } from './Trie';
// import { Node } from './scripts/Node';
// import { dictionary } from './scripts/dict';
// import fs from 'fs'
// const Trie = require('./Trie.js');
// const dictionary = require('./dict.js');

// const dictionary = fs.readFileSync("/usr/share/dict/words").toString().trim().split('\n')

let completion = new Trie();

completion.populate(['pizza', 'pasta', 'apple', 'pizzaz']);

const input = document.getElementById('user-input')

input.addEventListener('keyup', ()=>{
  console.log(completion.suggest(input.value))
})

$("#user-input").autocomplete({
  source: dictionary
});

// https://www.youtube.com/watch?v=FcerV0AO0bM
