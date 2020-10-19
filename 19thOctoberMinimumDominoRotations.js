// In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.
// (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)
//
// We may rotate the ith domino, so that A[i] and B[i] swap values.
//
//   Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.
//
//   If it cannot be done, return -1.
//
//
// Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
// Output: 2
// Explanation:
//   The first figure represents the dominoes as given by A and B: before we do any rotations.
//   If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by
// the second figure.


/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {

  if(!A || !B || !A.length || !B.length || A.length != B.length){
    return -1;
  }

  let first = A[0], second =B[0], i;

  for(i=1; i<A.length; i++){
    if(A[i] === first || B[i] === first){
      if(A[i] !== second && B[i] !== second){
        second = -1;
      }

    }
    else if(A[i] === second || B[i] === second){
      first = -1;
    }
    else{
      return -1;
    }
  }

  let firstSolution = false, secondSolution = false, swap1 =0, swap2 = 0, swap3 =0, swap4 = 0;

  if(first != -1){
    firstSolution = true;
    for(i =0; i< A.length; i++){
      if(A[i] != first){
        swap1++;
      }

    }
    for(i =0; i< B.length; i++){
      if(B[i] != first){
        swap2++;
      }

    }
    swap1 = Math.min(swap1,swap2);
  }
  if(second != -1){
    secondSolution = true;
    for(i =0; i< A.length; i++){
      if(A[i] != second){
        swap3++;
      }
    }
    for(i =0; i< B.length; i++){
      if(B[i] != second){
        swap4++;
      }
    }
    swap3 = Math.min(swap3,swap4);

  }
  return firstSolution && secondSolution ? Math.min(swap1, swap3) : firstSolution ? swap1 : swap3;
};





console.log(`Minimum Domino Rotations For Equal Row `,minDominoRotations([3,5,1,2,3], [3,6,3,3,4]));

