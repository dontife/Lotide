const assertEqual = require('./assertEqual');

const tail = function(someArray) {
  let newArray = [];
  for (let i = 0; i < someArray.length; i++) {
    if (i !== 0) {
      newArray.push(someArray[i]);
    }
  }  return newArray;

};

module.exports = tail;

