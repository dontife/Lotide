/* This code compares two arrays content and returns true or false 
// depending on the calculation.
*/
const eqArrays = function (someArray, anotherArray) {
  for (let i =0; i < someArray.length; i++){
/* if the content of each individual array does not match with eaach other 
   or the length of the both arrays are not the same return false, otherwise
  return true
*/    
    if ((someArray[i] !== anotherArray[i]) || (someArray.length !== anotherArray.length)){
      return false;
    }
  } 
 return true;
 };

// exporting our eqArrays function for use in another module
module.exports = eqArrays;