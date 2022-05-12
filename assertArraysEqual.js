
const eqArrays = require('./eqArrays');


const assertArraysEqual = function(actual, expected) {
let result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`👏🏽👏🏽👏🏽 Assertion Passed: [${actual}] === [${expected}]`);
  } else
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
};



module.exports = assertArraysEqual;

assertArraysEqual([4,6,7,8], [4,6,7,8]);
assertArraysEqual([4,'8'], [4,8,9]);
assertArraysEqual([4,6,7,11], [4,0,7,1]);
assertArraysEqual([4,6,7,8], [4,6,7,8,8,9]);
