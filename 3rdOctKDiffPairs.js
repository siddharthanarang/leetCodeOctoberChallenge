// Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
//
//   A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
//
// 0 <= i, j < nums.length
// i != j
// a <= b
// b - a == k

// Example
//
// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
//   Although we have two 1s in the input, we should only return the number of unique pairs.
//
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  
  // O(nlogn) approach sorting the array and using the multiple pointer approach

  // if(!nums || nums.length < 2){
  //   return 0;
  // }
  // nums = nums.sort(function (a, b) {
  //   return a-b;
  // });
  // let start =0, end = 1, counter = 0, startNumber = null, endNumber = null;
  // while(start < nums.length -1 && end < nums.length){
  //  
  //   if(nums[start] === startNumber && nums[end] === endNumber){ // To Find unique pairs only, Not to repeat the pair
  //     start++;
  //     continue;
  //   }
  //  
  //   startNumber = null, endNumber = null;
  //
  //   if(nums[end] - nums[start] === k){
  //     startNumber = nums[start];
  //     endNumber = nums[end];
  //     counter++;
  //     start++;
  //     end++;
  //   }
  //   else if(nums[end] - nums[start] > k){
  //     start++;
  //   }
  //   else{
  //     end++;
  //   }
  //   if(start === end){
  //     end++;
  //   }
  // } 
  // return counter;
  
  
  // O(n) solution using hashmap but extra space complexity of O(n)

  if(!nums || nums.length < 2){
    return 0;
  }
  
  let countOfNums = {}, counter = 0;
  for(let i=0; i< nums.length; i++){
    countOfNums[nums[i]] = (countOfNums[nums[i]] || 0) + 1;
  }
  let b;
  for(let j in countOfNums){
    b = parseInt(j)+k;
    if((k !=0 && countOfNums[b]) || (k ==0 && countOfNums[b] > 1) ){
      counter++;
    }
  }
  return counter;
};

console.log('K diff Pairs are ', findPairs([-1,-2,-3],1));