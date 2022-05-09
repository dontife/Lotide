const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽 Assertion Passed: [${actual}] === [${expected}]`);
  } else
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
};



const findKey = function (obj, callback){
  let temp;
  Object.entries(obj).forEach(([key, value]) => {
    console.log(callback(value));
     if(callback(value) === true && temp === undefined){
       console.log('here');
       temp = key;
     }
  })
  return temp; 
}



//Test cases 
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) , 'noma')