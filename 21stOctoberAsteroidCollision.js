// Asteroid Collision
//
// We are given an array asteroids of integers representing asteroids in a row.
//
//   For each asteroid, the absolute value represents its size, and the sign represents its direction
// (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
//
//   Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will
// explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
//
//   Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {

  if(!asteroids || !asteroids.length){
    return asteroids;
  }

  for(let i=0; i<asteroids.length -1; i++){
    if(asteroids[i] >0 && asteroids[i + 1] < 0){

      if(Math.abs(asteroids[i]) === Math.abs(asteroids[i + 1])){
        asteroids.splice(i, 2);
        i = i -2;
      }
      else if(Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])){
        asteroids.splice(i, 1);
        i = i -2;
      }
      else {
        asteroids.splice(i + 1, 1);
        i--;
      }

    }
  }
  return asteroids;
};

console.log(`After Asteroid Collision is `,asteroidCollision([-2,-1,1,2]) );