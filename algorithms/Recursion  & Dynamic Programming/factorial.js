//faactorial algorithm recursion way
const factorial = number => {
  if(number === 1) {
    return 1;
  }
  return number * factorial (number - 1)
}



console.log(factorial(4)); // 4*3*2*1 = 24
console.log(factorial(5)); // 5*4*3*2*1 = 120
console.log(factorial(6)); // 6*5*4*3*2*1 = 720

// Time Complexity = O(n) = Linear
