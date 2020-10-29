// Summary Ranges
//
//
// You are given a sorted unique integer array nums.
//
//   Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
//
//   Each range [a,b] in the list should be output as:
//
// "a->b" if a != b
//   "a" if a == b
//
//    Example

//   Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
//   [0,2] --> "0->2"
//     [4,5] --> "4->5"
//     [7,7] --> "7"


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

  if(!nums || !nums.length){
    return [];
  }
  let response = [];
  if(nums.length === 1){
    response.push(nums[0].toString());
    return response;
  }
  let startElementIndex = 0, range = "", i;

  for(i=1; i<nums.length; i++){
    if((nums[i] - nums[i-1]) != 1){
      range = nums[startElementIndex].toString();
      if(i-1 - startElementIndex != 0){
        range+= "->" + nums[i-1]
      }
      response.push(range);
      startElementIndex = i;
    }
  }

  range = nums[startElementIndex].toString();
  if(i-1 - startElementIndex != 0){
    range+= "->" + nums[i-1]
  }
  response.push(range);

  return response;
};

console.log(`Summary Ranges are `, summaryRanges([-1]));