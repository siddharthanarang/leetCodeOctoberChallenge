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

  intervals = intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  for (let i = 0; i < intervals.length; i++) {
    if(i >= 1){
      if (intervals[i][0] >= intervals[i - 1][0] && intervals[i][1] <= intervals[i - 1][1]) {
        intervals.splice(i, 1);
        i--;
        continue;
      }
    }
    if(i < intervals.length - 1){
      if(intervals[i][0] === intervals[i+1][0] && intervals[i][1] <= intervals[i+1][1]){
        intervals.splice(i, 1);
        i--;
        continue;
      }
    }
  }
  return intervals.length;
};

console.log(`Total interval are `,removeCoveredIntervals([[1,2],[1,4],[3,4]]));