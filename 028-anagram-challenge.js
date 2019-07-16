/**
 * Problem:
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as
 * cinema, formed from iceman.
 */

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false
  if (str1.length === 0) return true

  const freq = {}
  for(let i = 0; i < str1.length; i++) {
      freq[str1.charAt(i)] = ++freq[str1.charAt(i)] || 1
  }

  let char = ''
  for(let i = 0; i < str2.length; i++) {
      char = str2.charAt(i)
      if (freq[char] > 0) {
          freq[char]--
      }

      if (freq[char] === 0) {
          delete freq[char]
      }
  }

  return Object.keys(freq).length === 0
};

console.log(validAnagram("", ""))                 // true
console.log(validAnagram("anagram", "nagaram"))   // true
console.log(validAnagram("rat", "car"))           // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"))   // false
console.log(validAnagram("qwerty", "qeywrt"))     // true
console.log(validAnagram("texttwisttime", "timetwisttext")) // true
