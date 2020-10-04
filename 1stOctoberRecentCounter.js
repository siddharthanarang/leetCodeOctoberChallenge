// You have a RecentCounter class which counts the number of recent requests within a certain time frame.
//
//   Implement the RecentCounter class:
//
// RecentCounter() Initializes the counter with zero recent requests.
//   int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of
// requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the
// number of requests that have happened in the inclusive range [t - 3000, t].
//   It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

//Example


// Input
//   ["RecentCounter", "ping", "ping", "ping", "ping"]
//   [[], [1], [100], [3001], [3002]]
// Output
//   [null, 1, 2, 3, 3]
//
// Explanation
// RecentCounter recentCounter = new RecentCounter();
// recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
// recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
// recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
// recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

var RecentCounter = function() {
  this.requests = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.requests.push(t);
  const minimumRange = t-3000;
  let counter = 0;
  for(let i=this.requests.length -1; i>=0; i--){
    if(minimumRange > this.requests[i]){
      break;
    }
    counter++
  }
  return counter;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
var obj = new RecentCounter();
var param_1 = obj.ping(1);
var param_2 = obj.ping(100);
var param_3 = obj.ping(3001);
var param_4 = obj.ping(3002);
console.log(`param_1 is `,param_1);
console.log(`param_2 is `,param_2);
console.log(`param_3 is `,param_3);
console.log(`param_4 is `,param_4);