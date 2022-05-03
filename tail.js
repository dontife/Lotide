const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽 Assertion Passed: [${actual}] === [${expected}]`);
  } else
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
};


const tail = function(someArray) {
  let newArray = [];
  for (let i = 0; i < someArray.length; i++) {
    if (i !== 0) {
      newArray.push(someArray[i]);
    }
  }  return newArray;

};

// Test Case: Check the original array
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(words[1], "Labs"); // ensure second element is "Labs"