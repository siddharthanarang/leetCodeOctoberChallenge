// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money
// stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the
// last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police
// if two adjacent houses were broken into on the same night.
//
//   Given a list of non-negative integers nums representing the amount of money of each house, return the maximum
// amount of money you can rob tonight without alerting the police.
//
//
//   Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
//
//   Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//   Total amount you can rob = 1 + 3 = 4.


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

  if(!nums || !nums.length){
    return 0;
  }
  if(nums.length === 1){
    return nums[0];
  }
  if(nums.length === 2 || nums.length === 3){
    return Math.max(...nums);
  }

  let findMaxRob = (array) => {
    let total = [array[0],Math.max(array[0],array[1])];

    for(let i = 2; i<nums.length-1 ; i++){
      total[i] = Math.max(total[i-1],total[i-2]+array[i]);
    }
    return(total[total.length-1]);
  };
  let robber1 = findMaxRob(nums.slice(0,nums.length-1));
  let robber2 = findMaxRob(nums.slice(1,nums.length));
  return Math.max(robber1,robber2);
};

console.log(`Rob house sum is `, rob([1,2,3,1]));