//1) Write a function/program that receives as argument one list and checks which elements of the list are divisible by 2 and return those elements.
const divise = (numbers) => {
  let result = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
};
console.log(divise([0, 4, 5, 3, 10, 2]));

// 2) Write a function/program that receives as argument one list and checks which of the elements is a prime number and returns the primes numbers from the list

const primeNumbers = (numbers) => {
  let primes = [];
  const isPrime = (num) => {
    for (let i = num-1; i>=2; i--) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;

  };
  for(const num of numbers) {
    if (isPrime(num)) {
      primes.push(num)
    }
  }
  return primes;
};

console.log(primeNumbers([1,2,3,4,5,6,7,8,9,10,11,49]))


//3) Write a function/program, that receives as arguments one list and one number/element and checks if the number is present, return true, if is not present, returns false.

const checkElm = (list, elm) => {

  for(let element of list) {
    if (element === elm) {
      return true
    }

  }
  return false;

};

console.log(checkElm([1,2,3,4,5,6,],5));

//4) Write a function/program that receives   as arguments one list and one number/element and checks how many times the number/element is present and returns that result.


const countElement = (list,elm) => {
  let count = 0;
  for(let element of list) {
    if(element === elm) {
      count++
    }
  }
  return count;
};

console.log(countElement([0,1,2,3,4,5,6,7,8,9,3,5,3,5],3));

//5) Write a function/program that receives as arguments 2 lists,  list1 and list2 for ex. and checks if the elements in list1 are also present in list2, and returns those elements, "the common elements".

const findCommonElements = (list1,list2)=>{
  let commonElements =[];
  for(const elm1 of list1) {
    for(const elm2 of list2) {
      if(elm1 === elm2) {
        commonElements.push(elm1);
      }
    }
  }
  return commonElements;
}

console.log(findCommonElements([0,1,2,3,4,5,6],[3,4,5,6,7,8,9]));
