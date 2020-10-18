// Repeated DNA Sequences
//
//
// All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
//
//   Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
//
//   Example
//
//   Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]


/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {

  if(!s || s.length < 10){
    return [];
  }
  let dnaString = s.slice(0,10);
  let frequencyObject = {};
  frequencyObject[dnaString] = (frequencyObject[dnaString] || 0) + 1;
  for(let i=10; i<s.length; i++){
    dnaString = dnaString.slice(1);
    dnaString += s[i];
    frequencyObject[dnaString] = (frequencyObject[dnaString] || 0) + 1;
  }

  let response = [];
  for(let key in frequencyObject){
    if(frequencyObject[key] > 1){
      response.push(key);
    }
  }

  return response;

};

console.log(`Repeated DNA is `, findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));