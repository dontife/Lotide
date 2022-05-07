const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽 Assertion Passed: [${actual}] === [${expected}]`);
  } else
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
};



const bestTVShowsByGenre = {
  sci_fi: 'The expense',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The wire'
  
};

const findKeyByValue = function (object, objectValue){
  let storeKey;
  Object.entries(object).forEach(([key, value]) => {
    if (value === objectValue && storeKey === undefined){
        storeKey = key;
      
    }

 });  
  return storeKey;
  
}


assertEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The expense'), 'sci_fi');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);