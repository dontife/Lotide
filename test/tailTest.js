const assertEqual = require('../assertEqual');
const tail = require('../tail');


// Test Case: Check the original array
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(words[1], "Labs"); // ensure second element is "Labs"

