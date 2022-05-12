const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


// Test cases to see if the logic is sound
console.log(middle([1]));  // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3]));// => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));// => [3, 4]

// Make sure the original array was not altered by the without function


assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);