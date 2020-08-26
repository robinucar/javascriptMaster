//Quicksort algorithm

const sort = arr => {
  const coppiedArray = [...arr];

  console.log('FUNCTION STARTING')
  console.log(arr)

  if (coppiedArray.length <= 1) {
    console.log('ONLY ONE ITEM - RETURNING')
    console.log('coppied array: ' + coppiedArray)
    return coppiedArray;
  }

  const smallerElementsArray = [];
  const biggerElementsArray = [];
  const pivotElement = coppiedArray.shift();
  const centerElementsArray = [pivotElement];

  while (coppiedArray.length) {
    const currentElement = coppiedArray.shift();
    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement);
    } else {
      biggerElementsArray.push(currentElement);
    }
  }

  console.log('AFTER WHILE');
  console.log('Smaller elements array: ' + smallerElementsArray);
  console.log('Center elements array: ' + centerElementsArray);
  console.log('Bigger elements array: ' + biggerElementsArray);

  const smallerElementSsortedArray = sort(smallerElementsArray);
  const biggerElementSsortedArray = sort(biggerElementsArray);
  return smallerElementSsortedArray.concat(centerElementsArray ,biggerElementSsortedArray);
}

const sortedArray = sort([-3, 10, 1, 100, -10, 22, 15]);
console.log(sortedArray)

/* Time Complexity :
        Best Case: O(n * log n)
        Avarage case = O(n * log n)
        Worst Case = O(n^2)
        Space Complexity: O(n) = Linear
        */
