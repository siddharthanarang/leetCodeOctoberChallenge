//  Maximize Distance to Closest Person
//
// You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).
//
//   There is at least one empty seat, and at least one person sitting.
//
//   Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
//
//   Return that maximum distance to the closest person.
//
//
//    Example
//
//  Input: seats = [1,0,0,0,1,0,1]
//  Output: 2
//  Explanation:
//    If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
//  If Alex sits in any other open seat, the closest person has distance 1.
//  Thus, the maximum distance to the closest person is 2.

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {

  if(!seats || !seats.length){
    return 0;
  }

  let maxDistance = 0, lastElementIndex, distance, i;


  for(i=0; i<seats.length; i++){
    if(seats[i] === 1){
      if(lastElementIndex == undefined){
        if(i === 0){
          lastElementIndex = i;
        }
        else{
          distance = i - 0;
          maxDistance = Math.max(distance, maxDistance);
          lastElementIndex = i;

        }

      }
      else {
        distance = Math.floor((i - lastElementIndex)/2);
        maxDistance = Math.max(distance, maxDistance);
        lastElementIndex = i;
      }
    }
  }
  if(seats[i-1] === 0){
    maxDistance = Math.max(maxDistance, seats.length -1 - lastElementIndex);
  }

  return maxDistance;

};

console.log(`maxDistToClosest is `,maxDistToClosest([0,1]));