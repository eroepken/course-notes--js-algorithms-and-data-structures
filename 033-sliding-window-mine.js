const maxSubarraySum = (arr, num) => {
  if (arr.length === 0) return null;

  let sum = 0;
  // Get sum of first {num} numbers
  for(let i = 0; i < num; i++) {
      sum += arr[i]
  }
  let max = sum;

  for(i = num; i < arr.length; i++) {
      sum = sum - arr[i-num] + arr[i]
      if (sum > max) {
          max = sum;
      }
  }

  return max
};

console.log(maxSubarraySum([1,2,5,2,8,1,5],2))   // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4))   // 17
console.log(maxSubarraySum([4,2,1,6],1))         // 6
console.log(maxSubarraySum([4,2,1,6,2],4))       // 13
console.log(maxSubarraySum([],4))                // null
