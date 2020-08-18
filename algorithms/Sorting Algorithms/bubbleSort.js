// Bubble sort solution

const sort = (arr) => {
  const resultArray = [...arr];

  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerEl = resultArray[outer];
    //console.log("OUTER LOOP");
    //console.log("outerEl: " + outerEl);

    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerEl = resultArray[inner];
      //console.log("INNER LOOP");
      //console.log("innerEl: " + innerEl);

      if (outerEl > innerEl) {
        resultArray[outer] = innerEl;
        resultArray[inner] = outerEl;

        outerEl = resultArray[outer];
        innerEl = resultArray[inner];

        //console.log("INSIDE IF");
        //console.log(resultArray);
      }

      //console.log("End of inner loop");
      //console.log(resultArray);
    }
    //console.log("End of outer loop");
    //console.log(resultArray);
  }
  return resultArray;
};
const sortedArray = sort([5, 10, -3]);
console.log(sortedArray);


/*      Time Complexity :
          Best Case : (Items are already sorted) O(n);
          Avarage Case = O(n^2) = Quadratic Time Complexity;
          Worst Case = O(n^2) = Quadratic Time Complexity;          */