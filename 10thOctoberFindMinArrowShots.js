// Minimum Number of Arrows to Burst Balloons
//
//
// There are some spherical balloons spread in two-dimensional space. For each balloon, provided input is the start and
// end coordinates of the horizontal diameter. Since it's horizontal, y-coordinates don't matter, and hence the
// x-coordinates of start and end of the diameter suffice. The start is always smaller than the end.
//
//   An arrow can be shot up exactly vertically from different points along the x-axis. A balloon with xstart and xend
// bursts by an arrow shot at x if xstart ≤ x ≤ xend. There is no limit to the number of arrows that can be shot. An arrow
// once shot keeps traveling up infinitely.
//
//   Given an array points where points[i] = [xstart, xend], return the minimum number of arrows that must be shot to
// burst all balloons.
//
//   Example
//
// Input: points = [[10,16],[2,8],[1,6],[7,12]]
// Output: 2
// Explanation: One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and
// another arrow at x = 11 (bursting the other two balloons).


/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {

  // 1st Approach =  Brut Force
  // 2nd Aproach = sort on last element and check overlapping
  
  if(!points || !points.length){
    return 0;
  }

  points = points.sort(function (a,b) {
    if(a[1] === b[1]){
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  let currentEndPoint = points[0][1], counter = 1;
  for(let i=1; i<points.length; i++){
    if(points[i][0] <= currentEndPoint && currentEndPoint <= points[i][1]){
      continue;
    }
    counter++;
    currentEndPoint = points[i][1];
  }
  return counter;
};

console.log(`Minimum Arrow to Shot balloons are `, findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]));
