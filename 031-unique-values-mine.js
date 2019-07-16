const countUniqueValues = arr => {
  if (arr.length === 0) return 0;

  let i = 0, lastUniqueNum = 0, numOfUnique = 0;

  while(i < arr.length) {
      if (arr[i] !== lastUniqueNum) {
          lastUniqueNum = arr[i];
          numOfUnique++;
      }
      i++;
  }

  return numOfUnique
};

console.log(countUniqueValues([1,1,1,1,1,2]))                // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))   // 7
console.log(countUniqueValues([]))                           // 0
console.log(countUniqueValues([-2,-1,-1,0,1]))               // 4
