// Bag of Tokens
//
//
// You have an initial power of P, an initial score of 0, and a bag of tokens where tokens[i] is the value of the
// ith token (0-indexed).
//
//   Your goal is to maximize your total score by potentially playing each token in one of two ways:
//
//   If your current power is at least tokens[i], you may play the ith token face up, losing tokens[i] power and
// gaining 1 score.
//   If your current score is at least 1, you may play the ith token face down, gaining tokens[i] power and losing
// 1 score.
//   Each token may be played at most once and in any order. You do not have to play all the tokens.
//
//   Return the largest possible score you can achieve after playing any number of tokens.
//


// Input: tokens = [100,200,300,400], P = 200
// Output: 2
// Explanation: Play the tokens in this order to get a score of 2:
// 1. Play the 0th token (100) face up, your power becomes 100 and score becomes 1.
// 2. Play the 3rd token (400) face down, your power becomes 500 and score becomes 0.
// 3. Play the 1st token (200) face up, your power becomes 300 and score becomes 1.
// 4. Play the 2nd token (300) face up, your power becomes 0 and score becomes 2.


/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function(tokens, P) {

  let maxscore;
  if(!tokens || !tokens.length){
    return 0;
  }

  tokens = tokens.sort(function (a, b) {
    return a - b;
  });
  let i =0, possibleScore = 0;

  maxscore = possibleScore;
  let j = tokens.length -1;

  while(i<= j){
   if(tokens[i] <= P){
     P -= tokens[i];
     i++;
     possibleScore++;
     maxscore = Math.max(possibleScore, maxscore);
   }
    else if(possibleScore > 0){
     P += tokens[j];
     j--;
     maxscore = Math.max(possibleScore, maxscore);
     possibleScore--;
   }
    else {
     break;
   }
   
  }
  return maxscore;

};

console.log(`Max score possible is `, bagOfTokensScore([100,200,300,400],200));