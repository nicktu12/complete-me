import Trie from './Trie'
import dictionary from './dict'

let completion = new Trie();

completion.populate(dictionary);

const input = document.getElementById('user-input')

input.addEventListener('keyup', ()=>{
  if (input.value.length > 1) {
    $('input').autocomplete({
      source: completion.suggest(input.value),
      // focus: function( event, body ) {
      //   $( "#user-input" ).val( body.item.label );
      //   return false;
      // },
      // select: function( event, body ) {
      //    $( "#user-input" ).val( body.item.label );
      //    $( "#user-input" ).val( body.item.value );
      //    $( "#user-input" ).html( body.item.desc );
      //    return false;
      // }
    })
  } else {
    return
  }
})

// input.addEventListener('click', () => {
//   $('input').autocomplete({
//     select: function (e, ui) {
//       console.log('hey');
//     }
//   })
// })
// $( "#user-input" ).on( "autocompleteselect", function( event, ui ) {console.log('hey');} );




// $("#user-input").autocomplete({
//   source: dictionary
// });

// https://www.youtube.com/watch?v=FcerV0AO0bM
