const assertArraysEqual = function(actual, expected) {
let result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`👏🏽👏🏽👏🏽 Assertion Passed: [${actual}] === [${expected}]`);
  } else
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
};



const eqArrays = function (someArray, anotherArray) {
 for (let i =0; i < someArray.length; i++){
   if ((someArray[i] !== anotherArray[i]) || (someArray.length !== anotherArray.length)){
     return false;
   }
 } 
return true;
};


assertArraysEqual([4,6,7,8], [4,6,7,8]);
assertArraysEqual([4,'8'], [4,8,9]);
assertArraysEqual([4,6,7,11], [4,0,7,1]);
assertArraysEqual([4,6,7,8], [4,6,7,8,8,9]);