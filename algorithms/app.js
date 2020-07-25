const isPrime = numbers => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]  % numbers.length !== 0) {
      return i;
    }
  }
  return numbers;
}

console.log(isPrime([1,2,3,4,5,6,7,8,9]))