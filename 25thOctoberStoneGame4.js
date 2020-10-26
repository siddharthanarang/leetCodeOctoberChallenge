// Stone Game IV
//
//
// Alice and Bob take turns playing a game, with Alice starting first.
//
//   Initially, there are n stones in a pile.  On each player's turn, that player makes a move consisting of ' +
// 'removing any non-zero square number of stones in the pile.
//
// Also, if a player cannot make a move, he/she loses the game.
//
//   Given a positive integer n. Return True if and only if Alice wins the game otherwise return False, assuming
// both players play optimally.
//
// Example
//
// Input: n = 7
// Output: false
// Explanation: Alice can't win the game if Bob plays optimally.
// If Alice starts removing 4 stones, Bob will remove 1 stone then Alice should remove only 1 stone and finally
// Bob removes the last one (7 -> 3 -> 2 -> 1 -> 0).
// If Alice starts removing 1 stone, Bob will remove 4 stones then Alice only can remove 1 stone and finally
// Bob removes the last one (7 -> 6 -> 2 -> 1 -> 0).


/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {

  const result = new Array(n+1).fill(false);
  let k = 1;

  for (let i = 1; i <= n; i++) {
    if (k*k === i) {
      result[i] = true;
      k++;
      continue;
    }
    let aliceWin = false;
    for (let j = 1; j < k && j*j <= i; j++) {
      if (!result[i-j*j]) {
        aliceWin = true;
        break;
      }
    }
    result[i] = aliceWin;
  }

  return result[n];

};