// Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.
//
//   Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
//
//   Example
//
//   Input: A = "ab", B = "ba"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.
//
//
//   Input: A = "aa", B = "aa"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.


/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {

  if(A.length != B.length){
    return false;
  }
  let diff = {}, i;
  
  if(A === B){
    for(i=0; i<A.length; i++){
      if(!diff[A[i]]){
        diff[A[i]] = 1;
      }
      else{
        return true;
      }
    }
    return false;
  }

  // check diff scenarios
  let changesRequired = 0;
  for(i=0; i<A.length; i++){
    if(A[i] != B[i]){
      changesRequired++;
      if(changesRequired > 2){
        return false;
      }
      if(changesRequired === 2){
        if(diff[A[i]] != B[i]){
          return false
        }
      }
      diff[B[i]] = A[i];
    }
  }
  if(changesRequired === 1){
    return false;
  }
  
  return true;
};

console.log(`Buddy Strings are `, buddyStrings('aa', 'aa'));