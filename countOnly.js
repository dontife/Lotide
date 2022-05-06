const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽 Assertion Passed: [${actual}] === [${expected}]`);
  } else
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
};
// code for the finction countOnly 
const countOnly = (arr, obj) => {
// create an empty object to store the counter and key
  let results = {};
/* The method object.entries returns the key and value in an objects. 
   The forEach method matches the key and value prooperties of the object with the key and vlaue arguements

*/

  Object.entries(obj).forEach(([key, value]) => {
// return the content of the array arr
    arr.forEach(item => {
      if (item == key && value == true) {
// if the object value of the key is false equate the value to 1 if otherwise equate to two        
        if (!results[key]) {
          results[key] = 1;
        } else {
          results[key] += 1;
        }
      }
    });
  });
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false
});


console.log(result1);



assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

