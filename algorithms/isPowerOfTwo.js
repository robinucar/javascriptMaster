const isPowerOfTwo = number => {
 if (number < 1) {
   return false
 };
 let dividedNumber = number;
 while (dividedNumber !== 1) {
   if (dividedNumber % 2 !== 0) {
     return false
   }
   dividedNumber = dividedNumber / 2;
 }
 return true
}

console.log(isPowerOfTwo(4)) //true
console.log(isPowerOfTwo(10)) //false
console.log(isPowerOfTwo(8)) //true
console.log(isPowerOfTwo(15)) //false
console.log(isPowerOfTwo(16)) //true
console.log(isPowerOfTwo(-8)) //false