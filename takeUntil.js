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


// - a function that takes in two argument an array and callback
/* - we loop through the array
- Create a new array to store the content if the condition is not meant  
- if the condition is met, stop the execution of the looping 
 then the array should stop and return the content of the array that has been passed


*/

const takeUntil = function (data, callback){
  let newArray = [];
  for (let element of data){
    if (callback(element) === false){
        newArray.push(element);
    }
    else {
      return newArray;
    } 
  }
   
}

//Test case 
const data = [1,2,5,7,2,-1,2,4,5]
const results1 = takeUntil(data, x => x < 0);
console.log(results1);
console.log('---');
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
