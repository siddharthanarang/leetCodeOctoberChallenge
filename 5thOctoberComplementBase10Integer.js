//   Complement of Base 10 Integer


// Every non-negative integer N has a binary representation.  For example, 5 can be represented as "101" in binary, 11
// as "1011" in binary, and so on.  Note that except for N = 0, there are no leading zeroes in any binary representation.
//
// The complement of a binary representation is the number in binary you get when changing every 1 to a 0 and 0 to a 1.
// For example, the complement of "101" in binary is "010" in binary.
//
// For a given number N in base-10, return the complement of it's binary representation as a base-10 integer.
//
//
//     Example
//
// Input: 5
// Output: 2
// Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base - 10.

/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {

  //   O(logn) solution where we are doing bit by bit step operation
  //
  // if(N === 0){
  //   return 1;
  // }
  // const noOfDigits = Math.floor(Math.log2(N));
  // let binaryRepresentation = '', positionValue, tempValue = N, i;
  // for(i=noOfDigits; i>=0; i--){
  //   positionValue = Math.pow(2,i);
  //   if(positionValue <=  tempValue){
  //     tempValue -= positionValue;
  //     binaryRepresentation += '1';
  //   }
  //   else{
  //     binaryRepresentation += '0';
  //   }
  // }
  // let complimentBinary = '';
  // for(i=0; i<binaryRepresentation.length; i++){
  //   if(binaryRepresentation[i] === '1'){
  //     complimentBinary += '0';
  //   }
  //   else{
  //     complimentBinary += '1';
  //   }
  // }
  // return parseInt(complimentBinary, 2);

  if (N === 0){
    return 1;
  }

  let power = 1, ans = 0;
  while (N>0) {
    if((N & 1) === 0){
      ans += 1*power;
    }
    power *= 2;
    N = N >> 1;
  }
  return ans;
};
console.log(`Bitwise compliment is `,bitwiseComplement(7));