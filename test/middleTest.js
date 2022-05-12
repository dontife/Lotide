const assert = require('chai').assert
const middle = require('../middle');

describe('#Middle', () => {
  it('should return undefined if the the argument passed to the function is not an array', () =>{
    assert.isUndefined(middle('woman'), undefined);
  });
  it('should return [] if the length of the array is less than or equal to 2', () =>{
    assert.deepEqual(middle([1,5]), []);
  });
  it('should return [2] - middle element, if the array length is an odd number [1,2,3]', () =>{
    assert.deepEqual(middle([1,7,9]), [7]);
  });
  it('should return [2, 3] - middle element, if the array length is an even number [1,2,3,4]', () =>{
    assert.deepEqual(middle([1,7,9,10]), [7,9]);
  });
  it('the array passed an argument to the function should remain unchanged [5,7,8] = [5,7,8]', () => {
    let someArray = [7, 8, 9];
    middle(someArray);
    assert.deepEqual(someArray, [7, 8, 9]);
  });
  

});




