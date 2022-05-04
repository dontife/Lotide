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

  const without = function(source, itemsToRemove){
  let returnArray = [];
  for (let i = 0; i < source.length; i++){
    returnArray[i] = source[i];
  }
    for (remove of itemsToRemove){
      for (let i = 0; i < returnArray.length; i++){
           if(remove === returnArray[i]){
              returnArray.splice(i,1);
           }
      }
    }
    return returnArray;
  }
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);