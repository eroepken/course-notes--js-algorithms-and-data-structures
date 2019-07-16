/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0. Return an array
 * that includes both values that sum to zero or undefined if a pair does not exist.
 */

 /**
  * My solution is very close to his and has O(n) operations.
  */
 const sumZero = arr => {
  let l = 0, r = arr.length-1;
  while (l < r) {
      if (arr[l] + arr[r] > 0) {
          r--;
      } else if (arr[l] + arr[r] < 0) {
          l++;
      } else {
        return [arr[l], arr[r]];
      }
  }

  return undefined;
}

console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3, 3]
console.log(sumZero([-4,-3,-2,-1,0,1,2,5])) // [-2, 2]
console.log(sumZero([-17,-14,-10,-7,-5,-4,-3,-1,0,1,4,6,9,10,15,19])) // [-10, 10]
console.log(sumZero([-4,-3,-2,-1,0,5,6])) // undefined
