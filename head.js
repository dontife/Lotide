const assertEqual = require('./assertEqual');

const head = function (someArray){
  let firstElement;
  for (let i = 0; i < someArray.length; i++){
    if(i === 0){
      firstElement = someArray[i];
      return firstElement;
    }
  }
}

module.exports = head;