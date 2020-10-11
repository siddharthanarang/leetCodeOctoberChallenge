// Remove Duplicate Letters
//
// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your
// result is the smallest in lexicographical order among all possible results.
//
//   Example
//
// Input: s = "cbacdcbc"
// Output: "acdb"


/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {

  if(!s || !s.length){
    return '';
  }

  let stack = [];
  let alreadyVisited = {};
  let lastIndex = {};
  let i;
  for(i=0; i<s.length; i++){
    lastIndex[s[i]] = i;
  }
  stack.push(s[0]);
  alreadyVisited[s[0]] = 1;
  let previousElement;
  for(i=1; i<s.length; i++){
    if(alreadyVisited[s[i]]){
      continue;
    }
    previousElement = stack[stack.length-1];
    if(s[i] < previousElement && lastIndex[previousElement] > i){
      stack.pop();
      alreadyVisited[previousElement] = 0;
      i--;
      continue;
    }
    stack.push(s[i]);
    alreadyVisited[s[i]] = 1;
  }
  return stack.join('');
};

console.log(`Remove Duplicate Letter from string using lexicographical order  `, removeDuplicateLetters('cbacdcbc'));

