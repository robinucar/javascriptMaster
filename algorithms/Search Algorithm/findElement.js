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

// Time Complexity = Best Case O(1); Avarage Case O(n); Worst Case O(n)
