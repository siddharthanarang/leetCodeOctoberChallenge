// 132 Pattern
//
// Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k]
// such that i < j < k and nums[i] < nums[k] < nums[j].
//
//     Return true if there is a 132 pattern in nums, otherwise, return false.
//
//     Follow up: The O(n^2) is trivial, could you come up with the O(n logn) or the O(n) solution?
//
//
//     Input: nums = [1,2,3,4]
// Output: false
// Explanation: There is no 132 pattern in the sequence.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
   
    let stack=[], min = -Infinity;
    for(let i=nums.length-1; i>=0; i--){
        if(nums[i] < min)
            return true;
        else{
            while(stack.length>0 && nums[i]> stack[stack.length-1]){
                min = stack.pop();
            }
            stack.push(nums[i]);
        }
    }
    return false;
};

console.log(`Number of 132 pattern are `,find132pattern([3,5,0,3,4]));