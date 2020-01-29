// CodeWars - anagrams

/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

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
