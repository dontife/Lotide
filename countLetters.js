const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽 Assertion Passed: [${actual}] === [${expected}]`);
  } else
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
};

const countLetters = function (sentence){
// remove the whitespace in the string   
  let str = sentence.replace(/\s+/g, '');
  // declare an empty objects
  let result = {};
// use a for of loop to iterate the content of the string    
  for (let args of str){
/* if conditional statement to calaculate 
how many times a letter occurs in the string argument of the function
*/ 
    if(result[args] >= 1){
      result[args] += 1;
    } else {
      result[args] = 1;
    }
    
  }
  return result;
};





//test case 
console.log(countLetters("lighthouse in the house"));
