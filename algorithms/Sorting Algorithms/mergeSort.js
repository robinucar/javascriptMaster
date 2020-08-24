function sort(arr) {
  console.log('FUNCTION START')
  console.log('ARR: ' + arr)

  if (arr.length < 2) {
    return arr;
  }

  if (arr.length === 2) {
    console.log('EXACTLY 2 ITEMS');
    console.log('RETURN: ' + arr[0] > arr[1] ? [arr[1], arr[0]] : arr )
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  console.log('left array: ' + leftArray);
  console.log('right array: ' + rightArray);

  const leftSortedArray = sort(leftArray);
  const rightSortedArray = sort(rightArray);

  console.log('AFTER RECURSIVE STEP');
  console.log('left sorted array :' + leftSortedArray)
  console.log('Right sorted array :' + rightSortedArray)

  const mergedArr = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;

  while (leftArrayIndex < leftSortedArray.length || rightArrayIndex < rightSortedArray.length) {
    if (leftArrayIndex >= leftSortedArray.length|| leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]) {
      mergedArr.push(rightSortedArray[rightArrayIndex]);
      rightArrayIndex++;
    } else {
      mergedArr.push(leftSortedArray[leftArrayIndex]);
      leftArrayIndex++
    }
  }

  console.log('AFTER MERGE')
  console.log('merged array: ' + mergedArr)
  return mergedArr
}

const sortedArray = sort([-10, 33, 100, 5]);

console.log(sortedArray);