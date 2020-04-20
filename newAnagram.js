let words = ['aabb', 'abcd', 'bbaa', 'dada', 'ddaa', 'fede'];
let sorted = words.slice();
let newSorted = [];

for (let i = 0; i < sorted.length; i++) {
  newSorted.push(
    sorted[i]
      .split('')
      .sort()
      .join(''),
  );
}

console.log('words: ', words);
console.log('sorted: ', sorted);
console.log('newSorted: ', newSorted);
