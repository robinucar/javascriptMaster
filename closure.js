const makeAdder = x => add = y => x + y;

const plusOne = makeAdder(1);
const plusTen = makeAdder(10);

console.log(plusOne(3))
console.log(plusTen(20))
console.log(plusOne(55) - plusTen(3))

