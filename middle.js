/* This function comapres the content of two arrays
 and returns either true or false depending on the outcome
 */
const eqArrays = function (someArray, anotherArray) {
  for (let i =0; i < someArray.length; i++){
    if ((someArray[i] !== anotherArray[i]) || (someArray.length !== anotherArray.length)){
      return false;
    }
  } 
  return true;
 };
/*This function returns a message to confirm if the the assertion 
inputted as an arguements passed or failed
*/
 const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
    if (result === true) {
      console.log(`👏🏽👏🏽👏🏽 Assertion Passed: [${actual}] === [${expected}]`);
    } else
      console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  };

/* This functions returns the middle element of an array
*/
const middle = function (someArray){
// Create a new array to store the returned element
  let newArr = [];
// returns an empty array if the the length of the array is less than or equal to two
  if (someArray.length <= 2){
     return newArr;
// returns the middle element of the array if the array is even      
  } else if (someArray.length % 2 === 0){
     newArr = someArray.slice(someArray.length/2 - 1, someArray.length/2 + 1);
// case of an odd array content 
  } else if (someArray.length % 2 !== 0){
    newArr = someArray.slice(Math.round(someArray.length/2) - 1, Math.round(someArray.length/2));
    
  }
  return newArr;
};


// Test cases to see if the logic is sound
console.log(middle([1]));  // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3]));// => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));// => [3, 4]
// Make sure the original array was not altered by the without function
const test = [4,5,7,0,1];
middle(test);
assertArraysEqual(test, [4,5,7,0,1]);