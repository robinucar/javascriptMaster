const fib = num => {
const numbers = [1, 1];
for(let i = 2; i <= num; i++) {

  numbers.push(numbers[i - 2] + numbers[i - 1])
}

return numbers[num]
}

console.log(fib(4));
console.log(fib(5));
