const { assert } = require('chai');
const chai = require('chai');
const tail = require('../tail');

describe('#Tail', () => {
  it('the array passed an argument to the function should remain unchanged [5,7,8] = [5,7,8]', () => {
    let someArray = [7, 8, 9];
    tail(someArray);
    assert.deepEqual(someArray, [7, 8, 9]);
  });
  it('should return [6,7] for tail([4,6,7])', () => {
    assert.deepEqual(tail([4, 6, 7]), [6, 7]);
  });
  it('should return [] for tail([4])', () => {
    assert.deepEqual(tail([4]), []);
  });
  it('should return [] for tail([])', () => {
    assert.deepEqual(tail([4]), []);
  });
  it('should return undefined if the argument of the function is not an array', () => {
    assert.isUndefined(tail('romoe'), undefined);
  });


});



