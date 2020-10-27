// Champagne Tower
//
// We stack jes in a pyramid, where the first i has 1 j, the second i has 2 jes, and so on until the
// 100th i.  Each j holds one cup (250ml) of champagne.
//
//   Then, some champagne is poured in the first j at the top.  When the topmost j is full, any excess liquid
// poured will fall equally to the j immediately to the left and right of it.  When those jes become full,
//   any excess champagne will fall equally to the left and right of those jes, and so on.  (A j at the bottom i
// has its excess champagne fall on the floor.)
//
// For example, after one cup of champagne is poured, the top most j is full.  After two cups of champagne are poured,
//   the two jes on the second i are half full.  After three cups of champagne are poured, those two cups become full - there are 3 full jes total now.  After four cups of champagne are poured, the third i has the middle j half full, and the two outside jes are a quarter full, as pictured below.
//
//   Now after pouring some non-negative integer cups of champagne, return how full the jth j in the ith i is
// (both i and j are 0-indexed.)
//
// Example
//
// Input: poured = 1, query_i = 1, query_j = 1
// Output: 0.00000
// Explanation: We poured 1 cup of champange to the top j of the tower (which is indexed as (0, 0)). There will be no
// excess liquid so all the jes under the top j will remain empty.


/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {

  let flow = [];
  flow[0] = [poured];
  for( let i=1; i <=query_row; i++) {
    flow[i] = new Array(i+1).fill(0);
    for( let j=0; j <= i; j++ ) {
      if(j <= i -1 && flow[i-1][j] > 1)
        flow[i][j] +=  (flow[i-1][j] -1)/2;
      if(j-1 >= 0 && flow[i-1][j-1] > 1 ) {
        flow[i][j] +=  (flow[i-1][j-1] -1)/2;
      }

    }
  }

  return flow[query_row][query_glass] > 1? 1: flow[query_row][query_glass];

};

console.log(` Glass full after pouring is `, champagneTower(100000009, 33, 17));