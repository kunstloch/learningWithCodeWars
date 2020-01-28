// CodeWars - anagrams

let word = 'abab';
let words = ['aabb', 'abcd', 'bbaa', 'dada'];

function anagrams(word, words) {
  // sort word

  let wordSorted = word.split('');
  wordSorted = wordSorted.sort();
  wordSorted = wordSorted.join('');

  // sort every element from words

  let wordsSorted = words.map(function(element) {
    let eSorted = element.split('');
    eSorted = eSorted.sort();
    eSorted = eSorted.join('');

    // return element if is same as sorted word
    if (eSorted === wordSorted) {
      return element;
    }
  });

  // delete undefined elements
  let final = wordsSorted.filter(function(e) {
    return e != undefined;
  });
  console.log('final: ', final);
  return final;
}
