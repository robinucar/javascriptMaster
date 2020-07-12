const getMin = numbers => { //[3,1,5]
  let currentMin = numbers[0];
  for (const num of numbers) {
    if (num < currentMin) {
      currentMin = num
    }
  }
  return currentMin;
}

console.log(getMin([5,2,6]));
console.log(getMin([1,4,7]));
console.log(getMin([7,9,5]));
