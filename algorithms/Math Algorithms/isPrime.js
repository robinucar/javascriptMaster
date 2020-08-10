const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(5));
console.log(isPrime(9));
console.log(isPrime(11));



//faster way

const isPrime1 = (num) => {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime1(5));
console.log(isPrime1(9));
console.log(isPrime1(11));


// Time Complexity :
//Best case : O(1)  if number is 1 or 2
//Avarage case : O(n) (faster way : O(sqrt(n)))
//Worst Case : O(n) (faster way : O(sqrt(n))) if number is big prime number such as 27,277