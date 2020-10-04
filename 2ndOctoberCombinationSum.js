/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  
  if(!candidates || !candidates.length){
    return [];
  }
  candidates = candidates.sort(function (a,b) {
    return a - b;
  });
  let allCombinations = [];
  let currentCombination = [];
  let currentIndex = 0;
  
  function combinationHelperFunction(allCombinations, currentCombination, candidates, target, index) {

    if(target === 0){
      allCombinations.push(Array.from(currentCombination));
      return;
    }
    else if(target < 0){
      return;
    }
    for(let i=index; i<candidates.length; i++){
      if(candidates[i] <= target){
        currentCombination.push(candidates[i]);
        combinationHelperFunction(allCombinations, currentCombination, candidates, target - candidates[i], i);
        currentCombination.pop();
      }
      else{
        break;
      }
    }
    return;
  }
  combinationHelperFunction(allCombinations, currentCombination, candidates, target, currentIndex);
  return allCombinations;

};

console.log(`combinationSum is `,combinationSum([2,3,5], 8));