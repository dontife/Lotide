
const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
    if (result === true) {
      console.log(`👏🏽👏🏽👏🏽 Assertion Passed: [${actual}] === [${expected}]`);
    } else
      console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  };



const letterPositions = function(sentence) {
  let str = sentence.replace(/\s+/g, '');
  let letters = str.split('');
  let lettersPositionsObject = {};

  for(let i = 0; i < letters.length; i++){
    console.log('-----');
    console.log('i', i);
    const letter = letters[i];
    console.log('letter' , letter);
    console.log('lettersPositionsObject[letter]', lettersPositionsObject[letter]);

    if(lettersPositionsObject[letter] === undefined){
      lettersPositionsObject[letter] = [];
    }
    lettersPositionsObject[letter].push(i); 
  }
  return lettersPositionsObject;
};
console.log(letterPositions('lighthouse in the house'));


console.log(assertArraysEqual(letterPositions('hello').e, [1]));
console.log(assertArraysEqual(letterPositions('hello').o, [4]));