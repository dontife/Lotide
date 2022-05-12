const assert = require('chai').assert;
const head = require('../head');

describe('#head' , () => {
  it('should return 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  });
  it ('should return 5 for [5]', () =>{
    assert.strictEqual(head([5]), 5)
  });
  it ('should return Hello for ["Hello", "Lighthouse", "Labs"]', () =>{
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });
  it ('should return undefined for []', () =>{
    assert.isUndefined(head([]), undefined);
  });

});









/*const assertEqual = require('../assertEqual');
const head = require('../head');

 assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");
assertEqual(head([1]), 1);
*/

