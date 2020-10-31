// Number of Longest Increasing Subsequence
//
//
// Given an integer nums nums, return the number of longest increasing subsequences.
//
//   Example
//   Input: nums = [1,3,5,4,7]
// Output: 2
// Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].



/**
 * @param {number[]} nums
 * @return {number}
 */
let findNumberOfLIS = function(nums) {
  let maxLength = 1;
  let length=[];
  let count =[];
  for(let r=0; r<nums.length; r++) {
    let currentValue = nums[r];
    let currentMaxLen = 1;
    let currentMaxCount = 1;
    for(let l=r-1; l>=0; l--) {
      if(nums[l]<currentValue) {
        let currentLen = length[l]+1;
        let currentCount = count[l];
        if(currentLen > currentMaxLen) {
          currentMaxLen = currentLen;
          currentMaxCount = currentCount;
        } else if(currentLen === currentMaxLen) {
          currentMaxCount += currentCount;
        }
      }
    }
    length[r] = currentMaxLen;
    count[r] = currentMaxCount;
    maxLength = Math.max(maxLength, currentMaxLen);
  }
  let allCount = 0;
  for(let i=0; i<length.length; i++) {
    if(length[i] === maxLength) {
      allCount += count[i];
    }
  }
  return allCount;

};

console.log(`Number Longest Increasing Subsequence is `,findNumberOfLIS([1,3,5,4,7]));