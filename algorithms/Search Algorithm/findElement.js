//linear search algorithm: Different types
const findNumber = (arr, num) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return "not found";
};

const arr = [3, 5, 7, -4, 12, -6, 42, 10];

console.log(findNumber(arr, 10));
console.log(findNumber(arr, 3));
console.log(findNumber(arr, 12));
console.log(findNumber(arr, 40));
console.log(findNumber(arr, 5));



const findString = (arr, str) => {
  let index = 0;
  for (const item of arr) {
    if (item === str) {
      return index;
    }
    index++;
  }
  return str + " not found";
};

const arr1 = ["London", "Edinburg", "Cardif", "Belfast"];

console.log(findString(arr1, "Edinburg"));
console.log(findString(arr1, "Manchester"));
console.log(findString(arr1, "Cardif"));



const findObject = (arr, element) => {
  let index = 0;
  for(const item of arr) {
    if(item.name === element.name) {
      return index
    }
    index++
  }
  return element.name + ' ' + element.age + ' not found';
}
const persons = [
  {name: 'Robin', age: 32},
  {name: 'Denis', age: 30},
];

console.log(findObject(persons, {name: 'Robin', age: 32}));
console.log(findObject(persons, {name:'Denis', age: 30}));
console.log(findObject(persons, {name: 'Will', age: 40}));

// Time Complexity = Best Case O(1) = Constant;
//Avarage Case O(n) = linear;
//Worst Case O(n) = linear;


//Bineary search

const bFindElement = (sortedArray, elm) => {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex +  Math.floor((endIndex - startIndex) / 2);

    if(elm === sortedArray[middleIndex]) {
      return middleIndex;
    }

    if (sortedArray[middleIndex] < elm) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex -1
    }
  }

  return elm + ' not found';

}


const arr = [1,3,10,40,99,100];

console.log(bFindElement(arr,99));

// Time Complexity = Best Case O(1) = Constant;
// Avarage Case O(log n); Logarithmic
//Worst Case O(log n) = Logarithmic

//Recursive Binary Search

const rFindElement = (sortedArray, elm, offset) => {
  console.log(sortedArray, elm)
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;


    const middleIndex = startIndex +  Math.floor((endIndex - startIndex) / 2);

    if(elm === sortedArray[middleIndex]) {
      return middleIndex + offset;
    }

    if (sortedArray[middleIndex] < elm) {
      startIndex = middleIndex + 1;
      offset = offset + middleIndex + 1;
    } else {
      endIndex = middleIndex;
    }
    return rFindElement(sortedArray.slice(startIndex, endIndex + 1), elm, offset);


}


const arr = [1,3,10,40,99,100];

console.log(rFindElement(arr, 99, 0));

// Time Complexity = O(log n); Logarithmic