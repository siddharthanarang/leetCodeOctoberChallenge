// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
//   Integers in each row are sorted from left to right.
//   The first integer of each row is greater than the last integer of the previous row.
//
//
//    Example
//   Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
// Output: true


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

  if(!matrix || !matrix.length){
    return false;
  }

  for(let i=0; i<matrix.length; i++){
    if(target < matrix[i][0]){
      return false;
    }
    if(target > matrix[i][matrix[i].length - 1]){
      continue;
    }
    
    const binarySearch = (sampleArray, searchElement) => {
      
      let start = 0, end = sampleArray.length -1, mid = parseInt((start + end)/2);
      
      while (start <= end){
        if(searchElement === sampleArray[mid]){
          return mid;
        }
        else if(searchElement < sampleArray[mid]){
          end = mid -1;
        }
        else{
          start = mid +1;
        }
        mid = parseInt((start + end)/2);
      }
      return -1;
    };
    
    
    if(binarySearch(matrix[i], target) === -1){
      return false;
    }
    else {
      return true;
    }
  }
  
  return false;

};


console.log(`Search element in 2d Matrix `,searchMatrix([[1]], 2));