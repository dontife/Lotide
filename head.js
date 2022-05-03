const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽 Assertion Passed: [${actual}] === [${expected}]`);
  } else
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
};

/*assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1);
assertEqual('Biology', 'Biology');
assertEqual(10, 25);
*/

const head = function (someArray){
  let firstElement;
  for (let i =0; i < someArray.length; i++){
    if(i === 0){
      firstElement = someArray[i];
      return firstElement;
    }
  }
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");
assertEqual(head([1]), 1);