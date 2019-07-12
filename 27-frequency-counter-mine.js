/**
 * Problem:
 * Write a function called "same", which accepts two arrays. The function should
 * return true if every value in the array has a corresponding value squared in
 * the second array. The frequency of the values must be the same.
 */

 /**
  * My solution, 2n operations or O(n).
  *
  * Loops through arr2 to creates an object to count the frequency of powered
  * numbers, then loops through the first array, calculates the number's power
  * and decrements it's value in the object. Return whether or not the resulting
  * object's length is 0.
  */
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false

    const compareSet = {}
    // O(n)
    arr2.forEach((v) => {
        compareSet[v] = ++compareSet[v] || 1
    })

    let power = 0
    // O(n)
    arr1.forEach((v) => {
        power = Math.pow(v, 2)
        if (compareSet[power] > 0) {
            compareSet[power]--
        }

        if (compareSet[power] == 0) {
            delete compareSet[power]
        }
    })

    return Object.keys(compareSet).length == 0
}

console.log(same([1,2,3], [4,1,9]))  // true
console.log(same([1,2,3], [1,9]))    // false
console.log(same([1,2,1], [4,4,1]))  // false
