// Given a list of intervals, remove all intervals that are covered by another interval in the list.
//
//   Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.
//
//   After doing so, return the number of remaining intervals.

// Example
//
// Input: intervals = [[1,4],[3,6],[2,8]]
// Output: 2
// Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {

  //       O(n^2) solution with brute force approach

  // for(let i=0; i<intervals.length; i++){
  //   for(let j=0; j<intervals.length; j++){
  //     if(i ===j){
  //       continue;
  //     }
  //     if(intervals[i][0] >= intervals[j][0] && intervals[i][1] <=  intervals[j][1] ){
  //       intervals.splice(i,1) ;
  //       i--;
  //       break;
  //     }
  //   }
  // }
  // return intervals.length;

  // O(nlogn) solution with sorting

  let sortComparotor = (a, b) => {
    if(a[0] === b[0]){
      return b[1] - a[1];
    }
    return a[0] - b[0];
  };

  intervals = intervals.sort(sortComparotor);
  let max = intervals[0][1];
  let result = intervals.length;
  
  for (let i = 1; i < intervals.length; i++) {
    
    // Since intervals is already sorted on 1st element then no need to comapare that, it is already in interval
    // Comparing 2nd element is less then max, then it will be in interval, max will be the maximum value in the element 
    // previous to ot
    if (intervals[i][1] <= max) {
      result--;
    }
    max = Math.max(max, intervals[i][1]);
    
  }
  return result;
};

console.log(`Total interval are `,removeCoveredIntervals([[1,2],[1,4],[3,4]]));