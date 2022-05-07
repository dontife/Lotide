const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽 Assertion Passed: [${actual}] === [${expected}]`);
  } else
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
};

const eqArrays = function (someArray, anotherArray) {
  for (let i = 0; i < someArray.length; i++) {
    if ((someArray[i] !== anotherArray[i]) || (someArray.length !== anotherArray.length)) {
      return false;
    }
  }
  return true;
};



const eqObjects = function (object1, object2) {
  let arrObject1 = Object.keys(object1);
  let arrObject2 = Object.keys(object2);
  let compareResult = false;
  if (arrObject1.length === arrObject2.length) {
    for (let key of arrObject1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        compareResult = eqArrays(object1[key], object2[key])
        if (!compareResult){
          return false
        }
      } else {
        if (object1[key] === object2[key]) {
          compareResult = true;
        } else {
          compareResult = false;
          return compareResult;
        }
      }
    }

  } 
  return compareResult;
};


const ab = {
  a: 1,
  b: 2
};

const ba = {
  b: 2,
  a: 1
}

const abc = {
  a: "1",
  b: "2",
  c: "3"

}
const cd = { c: '1', d: ['2', 3,4] };
const dc = {d: ['2', 3 ], c: '1' };

console.log(eqObjects(cd, abc));

const cd2 = { c: '1', d: ['2', 3, 4] };
//eqObjects(cd, cd2);

//assertEqual((eqObjects(ab, abc)), false);
assertEqual((eqObjects(cd, dc)), true);
assertEqual((eqObjects(cd, cd2)), false);
console.log(eqObjects(ab, abc));