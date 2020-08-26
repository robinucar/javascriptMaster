const factorial = number => {
  let result = 1;
  for(i = 2; i <= number; i++) {
    result = result * i
  }
  return result;
};

console.log(factorial(4)); // 4*3*2*1 = 24
console.log(factorial(5)); // 5*4*3*2*1 = 120
console.log(factorial(6)); // 6*5*4*3*2*1 = 720

// Time Complexity = O(n) = Linear
//Space Complexity = 0(1) = Constant