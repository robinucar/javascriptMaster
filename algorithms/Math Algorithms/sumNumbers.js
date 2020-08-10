const sumNumbers = numbers => {
  let result =0;
  for(const number of numbers) {
    result += number;
  }
  return result;
};

console.log(sumNumbers([1,3,10,50,100]));

//sumNumbers() Time Complexity = O(N) =  Linear