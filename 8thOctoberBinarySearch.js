// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to
// search target in nums. If target exists, then return its index, otherwise return -1.
//
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  if(!nums || !nums.length){
    return -1;
  }
  let start = 0, end = nums.length - 1;
  let middle = Math.floor((start + end)/2);
  while (start <= end){
    if(target === nums[middle]){
      return middle;
    }
    else if(target < nums[middle]){
      end = middle -1;
    }
    else {
      start = middle +1
    }
    middle = Math.floor((start + end)/2);
  }
  return -1;
};

console.log(`Binary Search of element is `, search([-1,0,3,5,9,12], 2));
