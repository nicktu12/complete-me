import Trie from './Trie'
import dictionary from './dict'

let completion = new Trie();

completion.populate(dictionary);

const input = document.getElementById('user-input')

input.addEventListener('keyup', ()=>{
  $('input').autocomplete({
    source: completion.suggest(input.value),
    minLength: 1,
    focus: function(event, ui) {
      $(this).val(ui.item.label);
      return false;
    },
    select: function(event, ui) {
      console.log($('#user-input').val());
      $('#user-input').val(ui.item.value);
      $(this).val(ui.item.label);
      return false;
    }
  })
})

// https://www.youtube.com/watch?v=FcerV0AO0bM
