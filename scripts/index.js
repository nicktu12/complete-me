import Trie from './Trie'
import dictionary from './dict'

let completion = new Trie();

completion.populate(dictionary);

const input = document.getElementById('user-input')

input.addEventListener('keyup', ()=>{
  if (input.value.length > 1) {
    $('input').autocomplete({
      source: completion.suggest(input.value),
    })
  } else {
    return
  }
})

$( "#user-input" ).on( "autocompleteselect", function( event, ui ) {console.log('hey');} );




// $("#user-input").autocomplete({
//   source: dictionary
// });

// https://www.youtube.com/watch?v=FcerV0AO0bM
