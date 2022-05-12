const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


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




module.exports = middle;