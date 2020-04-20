let k = [2, 4];
let result = [];

for (let m = 0; m < k.length; m++) {
  let zahl = k[m];
  let array = [];

  for (let l = 0; l < zahl; l++) {
    if (zahl % (l + 1) == 0) {
      array.push(l + 1);
    }
  }
  result.push(array.reduce((a, b) => a + b, 0));
}

console.log('result = ', result);
return result;
