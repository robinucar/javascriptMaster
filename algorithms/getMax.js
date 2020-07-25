const getMax = numbers => { // [5,4,7,18,24]
  let currentMax = numbers[0];
  for (const num of numbers) {
    if (num > currentMax) {
      currentMax = num
    }
  }
  return currentMax;
}

console.log(getMax([5,2,6]));
console.log(getMax([1,4,7]));
console.log(getMax([7,9,5]));   // [5,4,7,18,24]

// Time Complexity = O(n) Linear