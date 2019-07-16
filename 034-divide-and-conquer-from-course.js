/**
 * This is essentially binary search. Checking one by one (linear search) has a
 * time complexity of O(n); with a sorted set, binary search is more efficient.
 * This solution was essentially copied down from the course, but the variables
 * aren't named the same way.
 */
const search = (arr, val) => {
  let min = 0, max = arr.length - 1
  if (arr[min] > val || arr[max] < val) return -1

  let currVal, middle
  while(min <= max) {
      middle = Math.floor((min + max) / 2)
      currVal = arr[middle]

      if (currVal < val) {
          min = middle + 1
      } else if (currVal > val) {
          max = middle - 1
      } else {
          return middle
      }
  }

  return -1
}

console.log(search([1,2,3,4,5,6], 1))   // 0
console.log(search([1,2,3,4,5,6], 4))   // 3
console.log(search([1,2,3,4,5,6], 6))   // 5
console.log(search([1,2,3,4,5,6], 11))  // -1
console.log(search([1,2,3,4,5,6,9,10,12,17,20,25,26,35], 19))   // -1
